import { RxArrowLeft } from "react-icons/rx";
import { Link } from "react-router-dom";
const ForgotTab = () => {
  return (
    <div className="forgot-tab">
             <h2>Forgot your Password?</h2>
             <p>No worries, we'll send you reset instructions to your account email.</p>

            <form>
                     <div className="form-row">
                          <label htmlFor="email">Email Address <span>*</span></label>
                          <input type="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="form-row">
                           <button type="submit">Send Code</button>
                    </div>

                     <p className="redirect"> <span><RxArrowLeft /></span><Link to={"/auth/login"}>Back to Login</Link></p>
             </form>
    </div>
  )
}

export default ForgotTab