import dotenv from "dotenv";
import ejs from "ejs";
import fs from "fs";
import { mailTransport } from "../config/mail.js";

dotenv.config();

export const sendMemberPasswordResetSuccessMessage = async(userData) => {
      const { email, name } = userData;
      const single_name = name.split(" ")[0];

      const templateString = fs.readFileSync("./mail/views/successPasswordResetMail.ejs", "utf-8");

      const dynamicData = {
             name: single_name
      }

      const html = ejs.render(templateString, dynamicData);

      const mailOptions = {
            from: `Agulu<${process.env.EMAIL}>`,
            to: `${email}`,
            name: "Agulu",
            subject: "Your Agulu Account Password Has Been Successfully Reset",
            html: html
      }

      //send email
      mailTransport.sendMail(mailOptions);
}