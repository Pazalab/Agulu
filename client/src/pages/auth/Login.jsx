import { Link } from "react-router-dom"
import { RxDotFilled } from "react-icons/rx";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Copyright from "../../components/common/Copyright";

const Login = () => {
    const [ eyeStatus, setEyeStatus ] = useState(false)
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
                                           <div className="form-grid-texts">
                                                     <h2>Welcome Back Amigo</h2>
                                                     <p>Sign in to manage your Agulu account.</p>

                                                     <form>
                                                               <div className="form-row">
                                                                    <label htmlFor="email">Email Address <span>*</span></label>
                                                                    <input type="email" className="form-control" placeholder="Your Email" />
                                                              </div>
                                                              <div className="form-row">
                                                                       <label htmlFor="password">Password <span>*</span></label>
                                                                        <div className="form-input-password">
                                                                                 <input type={ eyeStatus ? "text" : "password"} placeholder="Your Password"/>
                                                                                 <div className="input-switch" onClick={() => setEyeStatus(!eyeStatus)}>
                                                                                            { eyeStatus ? <span className="open"><VscEyeClosed/></span> :
                                                                                                    <span className="closed"><VscEye/></span>
                                                                                            }
                                                                                 </div>
                                                                      </div>
                                                                      <Link to={"/auth/forgot-password"} className="forgot-password">Forgot your password?</Link>
                                                            </div>
                                                            <div className="form-row">
                                                                    <button type="submit">Login</button>
                                                            </div>

                                                            <div className="form-row">
                                                                      <div className="alternative">
                                                                                 <div className="line"></div>
                                                                                 <p>Or register with</p>
                                                                                 <div className="line"></div>
                                                                       </div>
                                                            </div>

                                                             <div className="google-option">
                                                                         <button><span><FcGoogle /></span> Login with Google</button>
                                                             </div>

                                                              <p className="redirect">Don't have an account yet? <Link to={"/auth/signup"}>Sign up</Link></p>
                                                     </form>
                                           </div>
                              </div>
                  </div>

                  <Copyright />
    </div>
  )
}

export default Login