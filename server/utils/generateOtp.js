import Code from "../models/verificationCode.js";

export const generateOTP = () => {
    const digits = process.env.OTP_STRING;
    const otpLength = 6;
    let otp = '';
    for(let i = 1; i <= otpLength; i++){
           let index = Math.floor(Math.random() * (digits.length));
           otp = otp + digits[index];
    }
    return otp;
} 


export const manuallyExpireOTP = async (id) => {
        await Code.findByIdAndUpdate(id, {
               expired: true
        })
}