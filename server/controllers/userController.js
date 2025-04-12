import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { sendAccountConfirmationCode } from "../mail/accountActivation.js";
import Code from "../models/verificationCode.js";
import mongoose from "mongoose";
import { generateTokenForMembers } from "../utils/generateCookieTokens.js";
import { sendWelcomeMessageToMember } from "../mail/sendMemberWelcomeMail.js";

//Register User
export const RegisterUser = asyncHandler(async(req, res) => {
         const { name, email, password } = req.body;

         //check if the account already exists
         const userExists = await User.findOne({ email });

         if(userExists){
               res.status(400);
               throw new Error("User Account already exists.")
         }

         const default_photo = "https://res.cloudinary.com/dq6subhaj/image/upload/v1744382134/user-default-photo_u3mg1s.jpg";

         const user = await User.create({ name, email, password, profilePicture: default_photo });

         if(user){
               const email_sent = sendAccountConfirmationCode(user);
               if(email_sent){
                  res.status(201).json({
                          message: "Account created successfully.",
                          name: user.name,
                          id: user._id,
                          email: user.email,
                          status: "success"
                    })
               }
         }else{
               res.status(500).json({ 
                  message: "Account creation failed. Please try again later.",
                  status: "error"
            })
         }
})


//Verify activation code
export const verifyActivationCode = asyncHandler(async(req, res) => {
        const { user_id, code } = req.body;

        const tempCode = await Code.findOne({  user: new mongoose.Types.ObjectId(`${user_id}`), expired: false});
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
                              role: updateUser.role,
                              name: updateUser.name
                        })
                }
        }else{
               res.status(500).json({
                    message: "Invalid activation code."
               })
        }      
})