import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToDatabase from "./config/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import googleAuthRoutes from "./routes/googleAuthRoutes.js"
import memberRoutes from "./routes/memberRoutes.js"
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js"
import session from "express-session";
import passport from "passport";
import storage from "memorystore"

//Initialize express for use
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MemoryStore = storage(session);
app.use(session({
          secret: "oie894ksjlie3940jsdlsjfkdalfw",
          resave: false,
          saveUninitialized: false,
          cookie: { maxAge: 86400000 },
          store: new MemoryStore({
                checkPeriod: 86400000
          })
}));

//initialize passport authenticate
app.use(passport.initialize());
app.use(passport.session());

//Initialize dotenv for usage 
dotenv.config();

//Initialize port for server
const port = process.env.PORT || 6000;

//set up cookies
app.use(cookieParser());
//set up cors
app.use(cors({
    credentials: true,
    origin: true
}));

/* Routes */
app.use("/api/user", userRoutes);
app.use("/auth/", googleAuthRoutes);
app.use("/api/member", memberRoutes);
// app.use("/", (req, res) => {
//         res.status(200).send("Welcome to the Agulu App")
// })
//Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening at port ${port}`));

connectToDatabase();