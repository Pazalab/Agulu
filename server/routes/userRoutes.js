import express from "express";
const router = express.Router();
import { RegisterUser, verifyActivationCode } from "../controllers/userController.js";

router.post("/register", RegisterUser);
router.post("/account-activation", verifyActivationCode);

export default router;