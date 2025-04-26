import { Link, useNavigate } from "react-router-dom"
import { RxDotFilled } from "react-icons/rx"
import { IoNotificationsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { TbCaretDownFilled } from "react-icons/tb";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { useLogoutMemberOutMutation } from "../../../redux/userSlice";
import { setNotification, setSidebarStatus } from "../../../redux/utilsSlice";
import { clearTempUserDetails, clearCredentials } from "../../../redux/authSlice";
import { clearMemberProfile } from "../../../redux/profileActionsSlice";
import { useCallback, useEffect, useRef, useState } from "react";
const Topbar = () => {
    const { member } = useSelector(state => state.profile);
    const [ logoutUser ] = useLogoutMemberOutMutation();
    const [ profilePop, setProfilePop ] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const popRef = useRef();
    const profileRef = useRef();

    const logoutMember = async() =>{
      const res = await logoutUser().unwrap();

      if(res){
             dispatch(clearCredentials());
             dispatch(clearTempUserDetails());
             dispatch(clearMemberProfile());
             dispatch(setNotification({ status: true, message: res.message, type: "success"}));
             navigate("/auth/login")
       }
   }

   const handleClickOutsideProfilePopup = useCallback((e) => {
           if(popRef.current && !popRef.current.contains(e.target)){
                 setProfilePop(false);
           }else{
                setProfilePop(true)
           }
   }, [])

   useEffect(() => {
       document.addEventListener("click", handleClickOutsideProfilePopup, true)

       return () =>  document.removeEventListener("click", handleClickOutsideProfilePopup, true)
    
   }, [handleClickOutsideProfilePopup])
  
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
                        <div ref={profileRef} className="topbar-profile">
                                   <div className="topbar-default" onClick={() => setProfilePop(true)}>
                                              <div className="profile-image">
                                                        <img src={ member && member.profilePicture} alt="" />
                                              </div>
                                              <div className="name-email">
                                                       <div className="name-email-texts">
                                                                <h5>{ member && member.name}</h5>
                                                                <p>{member && member.email}</p>
                                                       </div>
                                                       <span><TbCaretDownFilled /></span>
                                              </div>
                                   </div>

                                   <div ref={popRef} className={profilePop ? "profile-pop active" : "profile-pop"}>
                                             <div className="profile-box">
                                                      <span onClick={() => setProfilePop(false)}><CgClose /></span>
                                                      <img src={member && member.profilePicture} alt="" referrerPolicy="no-referrer" />
                                                      <h3>{member && member.name}</h3>
                                             </div>
                                             <ul>
                                                     <li><Link to={"/"}>My profile</Link></li>
                                                     <li><Link to={"/"}>Billing</Link></li>
                                                     <li><Link to={"/"}>Password & Security</Link></li>
                                             </ul>
                                             <button onClick={logoutMember}>Logout</button>
                                   </div>
                         </div>
                         <span className="sidebar-btn" onClick={() => dispatch(setSidebarStatus())}><CgMenuRight /></span>
              </div>
    </div>
  )
}

export default Topbar