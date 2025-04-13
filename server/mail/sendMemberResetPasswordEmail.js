import { generateOTP } from "../utils/generateOtp.js";
import { mailTransport } from "../config/mail.js";
import Code from "../models/verificationCode.js";
import dotenv from "dotenv";
import ejs from "ejs";
import fs from "fs";

dotenv.config();

export const sendResetPasswordCodeMail = async(userData) => {
       const { _id, email, name } = userData;
       const otp = generateOTP();

       const single_name = name.split(" ")[0];

       const templateString = fs.readFileSync("./mail/views/memberResetPasswordMail.ejs", "utf-8");

       const dynamicData = {
             name: single_name,
             otp: otp
       }

       const html = ejs.render(templateString, dynamicData);

       const mailOptions = {
             from: `Agulu Team <${process.env.EMAIL}>`,
             to: `${email}`,
             name: "Agulu Team",
             subject: "Request to change your Agulu account password",
             html: html
       }

       //temporarily save the OTP to the DB
       const codeCreated = await Code.create({
             user: _id,
             code: otp
       })
       if(codeCreated){
             setTimeout(async() => {
                   await Code.findByIdAndDelete(codeCreated._id)
             }, 180000)
       }

       //send email
       mailTransport.sendMail(mailOptions).then(() => {
             return true;
       })
}