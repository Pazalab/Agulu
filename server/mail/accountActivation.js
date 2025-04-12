import dotenv from "dotenv";
import ejs from "ejs";
import fs from "fs";
import { generateOTP } from "../utils/generateOtp.js";
import { mailTransport } from "../config/mail.js";
import Code from "../models/verificationCode.js";

dotenv.config();

export const sendAccountConfirmationCode = async(userData) => {
      const { _id, email, name } = userData;
      const otp = generateOTP();
      
      const single_name = name.split(" ")[0]

      const templateString = fs.readFileSync("./mail/views/accountActivationMail.ejs", "utf-8");

      const dynamicData = {
             name: single_name,
             otp: otp
      }

      const html = ejs.render(templateString, dynamicData);

      const mailOptions = {
             from: `Agulu Team <${process.env.EMAIL}>`,
             to: `${email}`,
             name: "Agulu Team",
             subject: "Agulu Account Verification",
             html: html
      }

      const activation = await Code.create({
            user:  _id,
            code: otp,
            name: name,
      })

      if(activation){
              setTimeout(async() => {
                       await Code.findByIdAndUpdate(activation._id, {
                             expired: true
                       })
              }, 180000)
      }
      
         //Send email
    mailTransport.sendMail(mailOptions).then(() => {
           return true;
    })
}