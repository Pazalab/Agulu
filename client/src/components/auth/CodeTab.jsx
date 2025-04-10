import { RxArrowLeft } from "react-icons/rx";
import { Link } from "react-router-dom";

const CodeTab = () => {
  return (
    <div className='code-tab'>
             <h2>Password Reset Code</h2>
             <p>We have a code to <span>okundistar2030@gmail.com</span></p>

            <form>
                     <div className="form-row">
                          <label htmlFor="code">Code<span>*</span></label>
                          <input type="number" className="form-control" placeholder="* * * * * *" pattern="+[0, 9]" />
                    </div>
                    <div className="form-row">
                           <button type="submit">Continue</button>
                    </div>
                     <p className="resend">Didn't receive any email? <span>Click to Resend</span></p>
                     <p className="redirect"> <span><RxArrowLeft /></span><Link to={"/auth/login"}>Back to Login</Link></p>
             </form>
    </div>
  )
}

export default CodeTab