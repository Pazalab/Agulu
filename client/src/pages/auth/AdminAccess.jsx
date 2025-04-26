import { Link, useNavigate } from "react-router-dom"
import { RxDotFilled } from "react-icons/rx";
import access from "../../assets/access.png"
import Copyright from "../../components/common/Copyright";

const AdminAccess = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-access-wrap">
              <div className="admin-access-header">
                         <div className="inner-row">
                                    <Link to={"/"} className="logo">
                                                <h2>Agulu</h2>
                                                 <span><RxDotFilled /></span>
                                    </Link>

                                    <Link className="back" to={"/auth/login"}>Back to Login</Link>
                         </div>
              </div>
              <div className="admin-access-content">
                            <div className="admin-access-block">
                                        <h1>403</h1>
                                        <h3>Access Denied</h3>
                                        <p>Sorry, but you don't have permission to access this part of the application. You can go back to the <span onClick={() => navigate("/auth/login")}>login</span> page to access it.</p>

                                        <img src={access} alt="" />
                            </div>
              </div>

              <Copyright />
    </div>
  )
}

export default AdminAccess