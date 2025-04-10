import { Link } from "react-router-dom"
import { RxDotFilled, RxArrowLeft } from "react-icons/rx";
import Copyright from "../../components/common/Copyright";
import ForgotTab from "../../components/auth/ForgotTab";
import CodeTab from "../../components/auth/CodeTab";
import ResetTab from "../../components/auth/ResetTab";

const ForgotPassword = () => {
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
                                             {/* <ForgotTab /> */}
                                             {/* <CodeTab /> */}
                                             <ResetTab />
                             </div>
                </div>
    </div>

    <Copyright />
</div>
  )
}

export default ForgotPassword