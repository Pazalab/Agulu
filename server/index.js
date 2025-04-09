import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToDatabase from "./config/db.js";

//Initialize express for use
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Initialize dotenv for usage 
dotenv.config();

//Initialize port for server
const port = process.env.PORT || 6000;

//set up cookies
app.use(cookieParser());


app.listen(port, () => console.log(`Server listening at port ${port}`));

connectToDatabase();