import "../../css/auth.css"
import { Link } from "react-router-dom"
import { RxDotFilled } from "react-icons/rx";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Copyright from "../../components/common/Copyright";

const Signup = () => {
    const [ eyeStatus, setEyeStatus ] = useState(false)
  return (
        <div className="auth-container">
            <div className="auth-wrapper">
              <div className="auth-wrapper-image-grid">
                          <div className="image-grid-items">
                                 <Link to={"/"} className="logo">
                                          <h2>Agulu</h2>
                                          <span><RxDotFilled /></span>
                                   </Link>

                                 <div className="image-grid-texts">
                                           <h3>Streamline your finances with powerful, easy-to-use tools—so you spend less time managing money and more time living life to the fullest.</h3>
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
                                      <h2>Get Started with Agulu</h2>
                                      <p>Sign up in minutes and unlock a smarter way to manage your finances, credit, and reports—all in one place.</p>

                                    <form>
                                                <div className="form-row">
                                                           <label htmlFor="name">Name <span>*</span></label>
                                                           <input type="text" className="form-control" placeholder="Your Name"  />
                                                </div>
                                                <div className="form-row">
                                                           <label htmlFor="email">Email Address <span>*</span></label>
                                                           <input type="email" className="form-control" placeholder="Your Email" />
                                                </div>
                                                <div className="form-row">
                                                             <label htmlFor="password">Password <span>*</span></label>
                                                             <div className="form-input-password">
                                                                         <input type={ eyeStatus ? "text" : "password"} placeholder="Your Password"/>
                                                                         <div className="input-switch" onClick={() => setEyeStatus(!eyeStatus)}>
                                                                                    { eyeStatus ? <span className="open"><VscEyeClosed /></span> :
                                                                                            <span className="closed"><VscEye /></span>
                                                                                    }
                                                                         </div>
                                                             </div>
                                                </div>
                                                <div className="form-row">
                                                            <button type="submit">Create Account</button>
                                                </div>

                                               <div className="form-row">
                                                         <div className="alternative">
                                                                    <div className="line"></div>
                                                                    <p>Or register with</p>
                                                                    <div className="line"></div>
                                                          </div>
                                               </div>

                                                <div className="google-option">
                                                            <button><span><FcGoogle /></span> Sign up with Google</button>
                                                </div>

                                                <p className="redirect">Already have an account? <Link to={"/auth/login"}>Login</Link></p>
                                     </form>
                           </div>
              </div>
    </div>
    <Copyright />
 </div>
  )
}

export default Signup