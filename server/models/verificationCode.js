import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const codesSchema = mongoose.Schema({
       code: {
            type: String,
            required: true
       },
       expired: {
            type: Boolean,
            default: false
       },
       user: {
            type: Schema.Types.ObjectId,
            required: true  
       },
       owner: {
             type: String
       }
}, { timestamps: true })

//Hash code
codesSchema.pre("save", async function(next) {
       const salt = await bcrypt.genSalt(10);

       this.code = await bcrypt.hash(this.code, salt);
})

//Compare hashed otp code
codesSchema.methods.matchCodes = async function(enteredCode) {
     return await bcrypt.compare(enteredCode, this.code);
}

const Code = mongoose.model("Code", codesSchema);

export default Code;