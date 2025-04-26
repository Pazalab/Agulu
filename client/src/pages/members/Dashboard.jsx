import {  useSelector } from "react-redux";
import "../../css/member/member_dashboard.css"
import Sidebar from "../../components/common/member/Sidebar";
import Topbar from "../../components/common/member/Topbar";
import { useEffect, useState } from "react";
import BalanceRow from "../../components/member/dashboard/BalanceRow";
import ChartPlusMembersRow from "../../components/member/dashboard/ChartPlusMembersRow";
import TransactionRow from "../../components/member/dashboard/TransactionRow";
const Dashboard = () => {
  const { userInfo } = useSelector(state => state.auth)
  const [ greeting, setGreeting ] = useState("Hi")

  useEffect(() => {
         const time = new Date().getHours();

         time >= 6 && time < 12 ? setGreeting("Good Morning") :
         time >= 12 && time < 17 ? setGreeting("Good Afternoon") :
         time >= 17 && time < 22 ? setGreeting("Good Evening") :
         setGreeting('Hi');
  }, [])
  return (
    <div className="member-dashboard">
             <Sidebar />
             <div className="member-dashboard-container">
                         <Topbar />
                         {/* <button onClick={logoutMember}>Log Out</button> */}
                          <div className="welcome-wrap">
                                    <h2>{`${greeting},${userInfo && userInfo.name.split(" ")[0]}`}</h2>
                                    <p>Track your finances in real time, access credit with ease, and take charge of your future with confidence. </p>
                          </div>
                          <BalanceRow />
                          <ChartPlusMembersRow />
                          <TransactionRow />
             </div>
    </div>
  )
}

export default Dashboard