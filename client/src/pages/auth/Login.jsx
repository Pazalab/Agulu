import { Link, useNavigate } from "react-router-dom"
import { RxDotFilled } from "react-icons/rx";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Copyright from "../../components/common/Copyright";
import NotificationBar from "../../components/common/NotificationBar";
import { useLoginUserMutation } from "../../redux/userSlice";
import { useForm } from "react-hook-form";
import Spinner from "../../components/common/Spinner";
import { useDispatch } from "react-redux";
import { setNotification } from "../../redux/utilsSlice";
import { setCredentials, setTempUserDetails } from "../../redux/authSlice";
import UserConfirm from "../../components/auth/UserConfirm";

const Login = () => {
    const [ eyeStatus, setEyeStatus ] = useState(false);
    const [ login, { isLoading }] = useLoginUserMutation();
    const { register, handleSubmit, formState: { errors }} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ userConfirm, setUserConfirm ] = useState(false);
    const BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_PROD_GOOGLE_URL : import.meta.env.VITE_DEV_GOOGLE_URL;

    const loginMember = async(data) => {
          try {
                const res = await login(data).unwrap();
                if(!res){
                           dispatch(setNotification({ status: true, message: "Internal Server Error. Please try again later.", type: "error"}))
                }else{
                        if(res.verified){
                              dispatch(setCredentials({...res}))
                              //navigate(`/${res.role}/${res.id}/dashboard`);
                              navigate("/auth/success")
                        }else{
                              dispatch(setTempUserDetails({...res}));
                              dispatch(setNotification({ status: true, message: res.message, type: "success"}));
                              setUserConfirm(true)
                        }
                 }
          } catch (error) {
               // console.log(error)
                dispatch(setNotification({ status: true, message: error.data.message, type: "error"}))
          }
    }
  return (
    <div className="auth-container">
                  <div className="auth-wrapper">
                              <div className="auth-wrapper-image-grid login">
                                        <div className="image-grid-items">
                                                 <Link to={"/"} className="logo">
                                                          <h2>Agulu</h2>
                                                          <span><RxDotFilled /></span>
                                                  </Link>
                                                   <div className="image-grid-texts">
                                                             <h3>Take control of your finances effortlessly with smart, intuitive tools—freeing up your time to focus on what truly matters.</h3>
                                                   </div>
                                        </div>
                              </div>
                              <div className="auth-wrapper-form-grid">
                                           <div className="form-grid-texts">
                                                 <Link to={"/"} className="logo">
                                                       <h2>Agulu</h2>
                                                       <span><RxDotFilled /></span>
                                                  </Link>
                                           </div>
                                           <div className="form-tab-container">
                                                       { userConfirm ?
                                                              <UserConfirm func={setUserConfirm} />
                                                        :
                                                        <div className="login-tab">
                                                                  <div className="form-grid-texts">
                                                                          <h2>Welcome Back Amigo</h2>
                                                                          <p>Sign in to manage your Agulu account.</p>

                                                                         <form onSubmit={handleSubmit(loginMember)}>
                                                                                <div className="form-row">
                                                                                     <label htmlFor="email">Email Address <span>*</span></label>
                                                                                     <input type="email" {...register("email", { required: "Your email is required."})} className="form-control" placeholder="Your Email" />
                                                                                     { errors.email ? <span className="error">{errors.email.message}</span> : ""}
                                                                               </div>
                                                                               <div className="form-row">
                                                                                        <label htmlFor="password">Password <span>*</span></label>
                                                                                         <div className="form-input-password">
                                                                                                  <input type={ eyeStatus ? "text" : "password"} placeholder="Your Password" {...register("password", { required: "Your password is required."})} />
                                                                                                  <div className="input-switch" onClick={() => setEyeStatus(!eyeStatus)}>
                                                                                                             { eyeStatus ? <span className="open"><VscEyeClosed/></span> :
                                                                                                                     <span className="closed"><VscEye/></span>
                                                                                                             }
                                                                                                  </div>
                                                                                       </div>
                                                                                       { errors.password ? <span className="error">{errors.password.message}</span> : ''}
                                                                                       <Link to={"/auth/forgot-password"} className="forgot-password">Forgot your password?</Link>
                                                                             </div>
                                                                             <div className="form-row">
                                                                                     <button type="submit">{ isLoading ? <Spinner /> : "Login" }</button>
                                                                             </div>

                                                                             <div className="form-row">
                                                                                          <NotificationBar />
                                                                             </div>
                                                                             <div className="form-row">
                                                                                       <div className="alternative">
                                                                                                 <div className="line"></div>
                                                                                                  <p>Or login with</p>
                                                                                                  <div className="line"></div>
                                                                                        </div>
                                                                             </div>

                                                                              <div className="google-option">
                                                                                          <Link className="google-btn" to={`${BASE_URL}google`}><span><FcGoogle /></span> Login with Google</Link>
                                                                              </div>

                                                                               <p className="redirect">Don't have an account yet? <Link to={"/auth/signup"}>Sign up</Link></p>
                                                                      </form>
                                                            </div>
                                                  </div>
                                                }
                                           </div>
                              </div>
                  </div>

                  <Copyright />
    </div>
  )
}

export default Login