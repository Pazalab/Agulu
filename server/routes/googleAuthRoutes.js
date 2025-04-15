import express from "express";
const router = express.Router();
import passport from "passport";
import dotenv from "dotenv";
import { useGoogleStrategy } from "../config/passport.js";
import { generateTokenForMembers } from "../utils/generateCookieTokens.js";

dotenv.config();

useGoogleStrategy();

router.get("/google", passport.authenticate("google", { scope: ['profile', 'email']}));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "http://localhost:5173/auth/login?error=lkdYOekdi4i4idsfkj24830kdjslajf484kd49448s09dkljfdskl8dslflelydkjekljla&message=An%20error%20occurred%20while%20trying%20to%20authenticate%20with%20google" }), (req, res) => {
       generateTokenForMembers(res, req.user._id);
       res.redirect(`http://localhost:5173/auth/success`)
})
export default router;