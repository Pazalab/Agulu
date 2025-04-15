import express from "express";
const router = express.Router();
import { getMemberProfile } from "../controllers/memberController.js";
import { protect } from "../middlewares/authMiddleware.js";

router.get("/get-profile", protect, getMemberProfile );

export default router;

