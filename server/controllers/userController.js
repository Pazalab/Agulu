import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { sendAccountConfirmationCode } from "../mail/accountActivation.js";
import Code from "../models/verificationCode.js";
import mongoose from "mongoose";
import { generateTokenForMembers } from "../utils/generateCookieTokens.js";
import { sendWelcomeMessageToMember } from "../mail/sendMemberWelcomeMail.js";
import { sendResetPasswordCodeMail } from "../mail/sendMemberResetPasswordEmail.js";
import { sendMemberPasswordResetSuccessMessage } from "../mail/sendMemberPasswordSuccess.js";

//Register User
export const RegisterUser = asyncHandler(async(req, res) => {
         const { name, email, password } = req.body;

         //check if the account already exists
         const userExists = await User.findOne({ email });

         if(userExists){
               res.status(400);
               throw new Error("User account already exists.")
         }

         const default_photo = "https://res.cloudinary.com/dq6subhaj/image/upload/v1744382134/user-default-photo_u3mg1s.jpg";

         const user = await User.create({ name,email, password, profilePicture: default_photo });

         if(user){
               const email_sent = sendAccountConfirmationCode(user);
               if(email_sent){
                  res.status(201).json({
                          message: "Account created successfully.",
                          name: user.name,
                          id: user._id,
                          email: user.email,
                    })
               }
         }else{
               res.status(500).json({ 
                  message: "Account creation failed. Please try again later.",
            })
         }
})


//Verify activation code
export const verifyActivationCode = asyncHandler(async(req, res) => {
        const { user_id, code } = req.body;

        const tempCode = await Code.findOne({  user: new mongoose.Types.ObjectId(`${user_id}`)});
        const user = await User.findById(user_id);

        if(tempCode && (await tempCode.matchCodes(code))){
                const updateUser = await User.findByIdAndUpdate(user_id, {
                      verified: true
                }, { new: true})
                
                //create user cookie token
                generateTokenForMembers(res, user._id);

                if(updateUser){
                       sendWelcomeMessageToMember(updateUser)
                        res.status(201).json({
                              message: "Account activated successfully.",
                              id: updateUser._id,
                              role: updateUser.role.toLowerCase(),
                              name: updateUser.name
                        })
                }
        }else{
               res.status(500).json({
                     message: "Invalid activation code."
               })
        }      
})

//resend Activation code
export const resendActivationCode = asyncHandler(async(req, res) => {
         const { id } = req.body;
         const user_id = new mongoose.Types.ObjectId(`${id}`);
         const user = await User.findById(user_id);
         const codeExists = await Code.findOne({ user: user_id});

         if(codeExists){
               await Code.findByIdAndDelete(codeExists._id);
         }

         if(user){
            const new_code = sendAccountConfirmationCode(user);

            if(new_code){
                   res.status(201).json({
                          message: "We have sent you a new code."
                   })
            }else{
                   res.status(500);
                   throw new Error("Internal server error. Code not sent.")
            }
         }
})

//login user
export const LoginUser = asyncHandler(async(req, res) => {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if(!user){
            res.status(401);
            throw new Error("Invalid account credentials. Please create an account.");
      }
 
      const isUserVerified = user.verified;
      if(isUserVerified){
            if(user && (await user.matchPasswords(password))){
                 generateTokenForMembers(res, user._id);
                 res.status(201).json({ 
                      message: "Login Successful",
                      verified: true,
                      role: user.role.toLowerCase(),
                      name: user.name,
                      id: user._id
                 })

            }else{
                   res.status(401);
                   throw new Error("Invalid credentials. Please try again with the correct ones.")
            }
      }else{
              if(user && (await user.matchPasswords(password))){
                    const codeExists = await Code.findOne({ user: user._id})
                    if(codeExists){
                           const deleteExisting = await Code.findByIdAndDelete(codeExists._id);
                           if(deleteExisting){
                              const code_sent = sendAccountConfirmationCode(user);
                              if(!code_sent) {
                                       res.status(500);
                                       throw new Error("Internal server error. Code not sent.")
                              }
                              res.status(201).json({
                                      message: "Login Successful",
                                      name: user.name,
                                      id: user._id,
                                      email: user.email,
                                      verified: false
                              })
                           }
                    }
                   
              }else{
                    res.status(401);
                    throw new Error("Invalid email or password. Please try again.")
              }
      }
})


//Logout
export const logoutUser = asyncHandler(async(req, res) => {
        res.cookie("jwt", "", {
               httpOnly: true,
               expires: new Date(0)
        })
        res.status(200).json({ message: "You have logged out of your account."})
})

//send reset password code to the user
export const validateForgetPasswordEmail = asyncHandler(async(req, res) => {
         const { email } = req.body;

         //verify email
         const accountExists = await User.findOne({ email });
         if(!accountExists){
                res.status(404);
                throw new Error("Mmh...You don't seem to have an account with us. Consider creating one.")
         }
         const codeExists = await Code.findOne({ user: accountExists._id});
         if(codeExists){
                const deleteExisting = await Code.findByIdAndDelete(codeExists._id);
                if(deleteExisting){
                       const email_sent = sendResetPasswordCodeMail(accountExists);

                       if(email_sent){
                              res.status(201).json({
                                     message: "Account password reset initiated successfully.",
                                     email: accountExists.email,
                                     id: accountExists._id
                              })
                       }else{
                            res.status(500).json({
                                 message: "An error occured while initiating password reset."
                            })
                       }
                }
         }else{
               const email_sent = sendResetPasswordCodeMail(accountExists);

               if(email_sent){
                      res.status(201).json({
                             message: "Account password reset initiated successfully.",
                             email: accountExists.email,
                             id: accountExists._id
                      })
               }else{
                    res.status(500).json({
                          message: "An error occured while initiating password reset."
                    })
               }
         }
})

//confirm if its the right code
export const validateForgetPasswordCode = asyncHandler(async(req, res)=>{
        const { user_id, code } = req.body;

        const tempCode = await Code.findOne({ user: new mongoose.Types.ObjectId(`${user_id}`)});
        
        if(tempCode && (await tempCode.matchCodes(code))){
               res.status(201).json({
                       message: "Success! You can proceed to create a new password."
               })
        }else{
               res.status(500).json({
                       message: "Invalid password reset code."
               })
        }
})

//resend code to user
export const resendForgotPasswordCode = asyncHandler(async(req, res) => {
        const { id } = req.body;
        const user_id = new mongoose.Types.ObjectId(`${id}`);
        const user = await User.findById(user_id);
        const codeExists = await Code.findOne({ user: user_id});

        if(codeExists){
               await Code.findByIdAndDelete(codeExists._id);
        }

        if(user){
               const new_code = sendResetPasswordCodeMail(user);
               if(new_code){
                      res.status(201).json({
                             message: "We have sent you a new reset password code."
                      })
               }else{
                     res.status(500);
                     throw new Error("Internal server error. Code not sent.")
               }
        }
})

//Now reset member password
export const resetMemberPassword = asyncHandler(async(req, res) => {
        const { user_id, password } = req.body;

        const user = await User.findById(user_id);
        if(!user){
             res.status(500);
             throw new Error("Mmh...An error occured while trying to create a new password. Please try again later. ")
        }

      const updateUser = await User.findByIdAndUpdate(user_id, {
            password: password
       }, { new: true});

       if(updateUser){ 
              sendMemberPasswordResetSuccessMessage(user);
             res.status(201).json({
                   message: "Password reset successful."
             })
      }else{
            res.status(500).json({
                    message: "Password reset unsuccessful"
            })
      }
})
