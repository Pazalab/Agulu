import dotenv from "dotenv";
import ejs from "ejs";
import fs from "fs";
import { mailTransport } from "../config/mail.js";

dotenv.config();

export const sendWelcomeMessageToMember = async(userData) => {
        const { email, name }  = userData;
        const single_name = name.split(" ")[0];

        const templateString = fs.readFileSync("./mail/views/memberWelcomeMail.ejs", "utf-8");

        const dynamicData = {
               name: single_name
        }

        const html = ejs.render(templateString, dynamicData);

        const mailOptions = {
              from: `Agulu Team <${process.env.EMAIL}>`,
              to: `${email}`,
              name: "Agulu Team",
              subject: `Welcome to Agulu ${single_name}`,
              html: html
        }

                 //Send email
     mailTransport.sendMail(mailOptions).then(() => {
              return true;
      });
}