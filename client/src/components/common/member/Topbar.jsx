import { Link } from "react-router-dom"
import { RxDotFilled } from "react-icons/rx"
import { IoNotificationsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { TbCaretDownFilled } from "react-icons/tb";
import { CgMenuRight } from "react-icons/cg";

const Topbar = () => {
    const { member } = useSelector(state => state.profile);
    console.log(member)
  return (
    <div className="topbar">
              <div className="mobile-logo">
                        <Link to={"/"}  className="dashboard-logo-item">
                                   <h2>Agulu</h2>
                                   <span><RxDotFilled /></span>
                        </Link>
              </div>

              <div className="topbar-column">
                        <div className="notification-wrap">
                                  <span><IoNotificationsOutline /></span>
                        </div>
                        <div className="topbar-profile">
                                   <div className="topbar-default">
                                              <div className="profile-image">
                                                        <img src={ member && member.profilePicture} alt="profile-image" />
                                              </div>
                                              <div className="name-email">
                                                       <div className="name-email-texts">
                                                                <h5>{ member && member.name}</h5>
                                                                <p>{member && member.email}</p>
                                                       </div>
                                                       <span><TbCaretDownFilled /></span>
                                              </div>
                                   </div>
                         </div>
                         <span className="sidebar-btn"><CgMenuRight /></span>
              </div>
    </div>
  )
}

export default Topbar