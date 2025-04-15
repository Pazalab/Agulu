import express from "express";
const router = express.Router();
import { LoginUser, logoutUser, RegisterUser, resendActivationCode, resendForgotPasswordCode, resetMemberPassword, validateForgetPasswordCode, validateForgetPasswordEmail, verifyActivationCode } from "../controllers/userController.js";

router.post("/register", RegisterUser);
router.post("/account-activation", verifyActivationCode);
router.post("/resend-activation-code", resendActivationCode);
router.post("/login", LoginUser);
router.post("/logout", logoutUser);
router.post("/forgot-password", validateForgetPasswordEmail);
router.post("/verify-forgot-password-code", validateForgetPasswordCode);
router.post("/resend-reset-password-code", resendForgotPasswordCode);
router.put("/reset-member-password", resetMemberPassword);

export default router;