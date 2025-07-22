import { MdOutlineMoreHoriz } from "react-icons/md";

const AguluMembers = () => {
  return (
    <div className="agulu-members">
             <h3>Active Agulu members</h3>
             <div className="agulu-member-list">
                      <div className="member-moja">
                               <div className="member-profile-column">
                                         <div className="profile-image">
                                                <img src="" alt="" />
                                         </div>
                                         <div className="profile-texts">
                                                    <h4>Mohammed Salah</h4>
                                                    <p>mohammed@liverpool.com</p>
                                         </div>
                               </div>
                               <span><MdOutlineMoreHoriz /></span>
                      </div>
             </div>
    </div>
  )
}

export default AguluMembers