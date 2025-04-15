import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

export const getMemberProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id).select("-password");
    if(!user){
           res.status(403);
           throw new Error("Mmh...We could not retrieve your account. Contact support for help.")
    }

    res.status(200).json({
           userInfo: { 
                  message: "Login Successful",
                  verified: true,
                  role: user.role.toLowerCase(),
                  name: user.name,
                  id: user._id
           },
           profile: user
    })
})