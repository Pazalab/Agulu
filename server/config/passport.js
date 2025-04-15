import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import User from "../models/userModel.js";
import { sendWelcomeMessageToMember } from "../mail/sendMemberWelcomeMail.js";

const GoogleStrategy = passportGoogle.Strategy;

export function useGoogleStrategy() {
        passport.use(new GoogleStrategy({
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "/auth/google/callback"
        }, async(accessToken, refreshToken, profile, done) => {
                     try {
                            const userExists = await User.findOne({ email: profile.emails[0].value });
                            if(userExists){
                                //     console.log("This block is run if user exists")
                                //check if the user is verified, if not, verify them
                                   if(!userExists.verified){
                                           await User.findByIdAndUpdate(userExists._id, {
                                                  verified: true,
                                                  googleId: profile.id
                                           })
                                   }
                                    done(null, userExists);
                            }else{
                                // console.log("This block will run if the user doesn't exist")
                                const user = await User.create({
                                        googleId: profile.id,
                                        name: profile.displayName,
                                        email: profile.emails[0].value,
                                        password: profile.id,
                                        verified: profile.emails[0].verified,
                                        profilePicture: profile.photos[0].value
                               })
                               //send the welcome message
                               sendWelcomeMessageToMember(user);
                               done(null, user);
                            }
                     } catch (error) {
                           done(error)
                     }
        }))

        passport.serializeUser(function(user, done) {
               done(null, user);
        })

        passport.deserializeUser(function(user, done) {
                done(null, user)
        })
}