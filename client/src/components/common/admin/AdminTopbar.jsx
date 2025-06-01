import { RxDotFilled } from "react-icons/rx"
import { Link, NavLink } from "react-router-dom"
import { HiOutlineBell } from "react-icons/hi2";
import { useSelector } from "react-redux"

const AdminTopbar = () => {
    const { userInfo } = useSelector(state => state.auth)
    const { member } = useSelector(state => state.profile)
  return (
    <div className="admin-topbar">
            <div className="admin-topbar-column">
                   <Link to={"/"} className="dashboard-logo-item">
                        <h2>Agulu</h2>
                        <span><RxDotFilled /></span>
                  </Link>
                   <nav>
                              <ul>
                                       <li><NavLink to={`/admin/${userInfo.id}`}>Dashboard</NavLink></li>
                                       <li><NavLink to={`/admin/${userInfo.id}/finance`}>Finance</NavLink></li>
                                       <li><NavLink to={`/admin/${userInfo.id}/analytics`}>Analytics</NavLink></li>
                                       <li><NavLink to={`/admin/${userInfo.id}/members`}>Members</NavLink></li>
                                       <li><NavLink to={`/admin/${userInfo.id}/settings`}>Settings</NavLink></li>
                              </ul>
                   </nav>
            </div>
              <div className="admin-topbar-actions">
                       <div className="admin-notification">
                              <span className="icon"><HiOutlineBell /></span>
                       </div>
                       <div className="admin-profile">
                                 <div className="admin-profile-image">
                                          <img src={ member && member.profilePicture} alt="admin-profile-image" />
                                 </div>
                       </div>
              </div>
    </div>
  )
}

export default AdminTopbar