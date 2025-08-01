import { Link } from "react-router-dom";
import AdminTopbar from "../../components/common/admin/AdminTopbar"
import "../../css/admin/admin_dashboard.css"
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdAddchart } from "react-icons/md";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SummaryBlock from "../../components/admin/dashboard/SummaryBlock";
import ChartFinance from "../../components/admin/dashboard/ChartFinance";
import AguluGains from "../../components/member/dashboard/AguluGains";
import AguluMembers from "../../components/member/dashboard/AguluMembers";

const AdminDashboard = () => {
  const [ greeting, setGreeting ] = useState("Welcome Back")
  const { userInfo } = useSelector(state => state.auth)
    useEffect(() => {
           const time = new Date().getHours();
  
           time >= 6 && time < 12 ? setGreeting("Good Morning") :
           time >= 12 && time < 17 ? setGreeting("Good Afternoon") :
           time >= 17 && time < 22 ? setGreeting("Good Evening") :
           setGreeting('Welcome Back');
    }, [])

  return (
    <div className="admin-dashboard-wrapper">
              <div className="wrapper-inner">
                       <AdminTopbar />

                       <div className="admin-dashboard-strip">
                               <h2>{`${greeting}, ${userInfo && userInfo.name.split(" ")[0]}.`}</h2>

                               <div className="strip-actions">
                                        <span className="download"><IoCloudDownloadOutline /></span>
                                        <Link to={"/"}><span><MdAddchart /></span>Add Transaction</Link>
                               </div>
                       </div>

                       <div className="admin-dashboard-row">
                                 <div className="admin-dashboard-row-large">
                                            <SummaryBlock />
                                            <div className="admin-chart">
                                                     <ChartFinance />
                                            </div>
                                 </div>
                                 <div className="admin-dashboard-row-small">
                                           <AguluGains />
                                           <AguluMembers />
                                 </div>
                       </div>
              </div>
    </div>
  )
}

export default AdminDashboard