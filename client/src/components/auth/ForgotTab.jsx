import { useContext } from "react";
import { RxArrowLeft } from "react-icons/rx";
import { Link } from "react-router-dom";
import { forgetTabContext } from "../../contexts/forgotTabContext";
import { useForm } from "react-hook-form";
import Spinner from "../common/Spinner";
import { useSubmitEmailForgotPasswordMutation } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { setNotification } from "../../redux/utilsSlice";
import NotificationBar from "../common/NotificationBar"
import { setTempUserDetails } from "../../redux/authSlice";

const ForgotTab = () => {
  const [ activeTabStatus, setActiveTabStatus ] = useContext(forgetTabContext);
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [ validateEmail, { isLoading }] = useSubmitEmailForgotPasswordMutation();

  const dispatch = useDispatch();
  const submitEmail = async (data) => {
          try {
               const res = await validateEmail(data).unwrap();
               if(!res){
                       dispatch(setNotification({ status: true, message: "Internal server error. Please try again later.", type: "error" }));
               }else{
                    dispatch(setNotification({ status: true, message: res.message, type: "success"}));
                    setActiveTabStatus("code");
                    dispatch(setTempUserDetails({...res}))
               }
          } catch (error) {
                dispatch(setNotification({ status: true, message: error.data.message, type: "error" }))
          }
  }
  return (
    <div className={ activeTabStatus === "forgot" ? "forgot-tab active" : "forgot-tab" }>
              <NotificationBar />
             <h2>Forgot your Password?</h2>
             <p>No worries, we'll send you reset instructions to your account email.</p>

            <form onSubmit={handleSubmit(submitEmail)}>
                     <div className="form-row">
                          <label htmlFor="email">Email Address <span>*</span></label>
                          <input type="email" {...register("email", { required: "Your account email is required"})} className="form-control" placeholder="Your Email" />
                          { errors.email ? <span className="error">{errors.email.message}</span> : ""}
                    </div>
                    <div className="form-row">
                           <button type="submit">{ isLoading ? <Spinner /> : "Send Code" }</button>
                    </div>

                     <p className="redirect"> <span><RxArrowLeft /></span><Link to={"/auth/login"}>Back to Login</Link></p>
             </form>
    </div>
  )
}

export default ForgotTab