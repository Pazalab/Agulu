import { useContext, useState } from "react"
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useNavigate } from "react-router-dom"
import { RxArrowLeft } from "react-icons/rx";
import { forgetTabContext } from "../../contexts/forgotTabContext";
import NotificationBar from "../common/NotificationBar";
import { useForm } from "react-hook-form";
import { useResetMemberPasswordMutation } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../../redux/utilsSlice";
import { clearTempUserDetails } from "../../redux/authSlice";
import Spinner from "../common/Spinner";

const ResetTab = () => {
    const [ eyeStatus, setEyeStatus ] = useState(false);
    const [ eyeStatus2, setEyeStatus2 ] = useState(false);
    const [ activeTabStatus, setActiveTabStatus ] = useContext(forgetTabContext);
    const { register, handleSubmit, formState: { errors}, reset, watch } = useForm();
    const { tempUser } = useSelector(state => state.auth)
    const [ resetPassword, { isLoading }] = useResetMemberPasswordMutation();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitNewPassword = async (form_data) => {
         const data = {
                 user_id: tempUser && tempUser.id,
                 password: form_data.password,
         }
           try {
                 const res = await resetPassword(data).unwrap();
                 if(!res){
                        dispatch(setNotification({ status: true, message: "Internal server error. Please try again later.", type: "error"}))
                }else{
                        dispatch(setNotification({ status: true, message: res.message, type: "success"}));
                        reset();
                        dispatch(clearTempUserDetails());
                        navigate("/auth/login")
                }
           } catch (error) {
                  dispatch(setNotification({ status: true, message: error.data.message, type: "error" }))
           }
    }
  return (
    <div className={ activeTabStatus === "reset" ? "reset-tab active" : "reset-tab"}>
             <NotificationBar />
            <h2>Set new password</h2>
            <p>Must be atleast 8 characters.</p>

            <form onSubmit={handleSubmit(submitNewPassword)}>
                    <div className="form-row">
                            <label htmlFor="password">New Password <span>*</span></label>
                            <div className="form-input-password">
                                     <input type={ eyeStatus ? "text" : "password"} {...register("password", { required: "Enter a valid strong password", minLength: 8 })} placeholder="New Password"/>
                                        <div className="input-switch" onClick={() => setEyeStatus(!eyeStatus)}>
                                                 { eyeStatus ? <span className="open"><VscEyeClosed/></span> :
                                                          <span className="closed"><VscEye/></span>
                                                   }
                                      </div>
                            </div>
                            { errors.password ? <span className="error">{errors.password.message}</span> : ""}
                    </div>
                     <div className="form-row">
                             <label htmlFor="password">Confirm Password <span>*</span></label>
                             <div className="form-input-password">
                                    <input type={ eyeStatus2 ? "text" : "password"} {...register("confirmPassword", { 
                                             required: true,
                                             minLength: 8,
                                             validate: val => {
                                                   if(watch("password") !== val){
                                                          return "Passwords do not match."
                                                   }
                                             }
                                    })} placeholder="Confirm Password"/>
                                    <div className="input-switch" onClick={() => setEyeStatus2(!eyeStatus2)}>
                                            { eyeStatus2 ? <span className="open"><VscEyeClosed/></span> :
                                                     <span className="closed"><VscEye/></span>
                                            }
                                     </div>
                            </div>
                            { errors.confirmPassword ? <span className="error">{errors.confirmPassword.message}</span> : ""}
                    </div>     
                    <div className="form-row">
                              <button type="submit">{ isLoading ? <Spinner /> : "Reset Password"}</button>
                    </div>
                    <p className="redirect" onClick={() => setActiveTabStatus("code")}> <span><RxArrowLeft /></span><span className="click">Go back</span></p>                            
            </form>
    </div>
  )
}

export default ResetTab