import { Link } from "react-router-dom"
import { RxDotFilled } from "react-icons/rx"
import { IoCloseOutline, IoHomeOutline, IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { GrTransaction } from "react-icons/gr";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SlSettings } from "react-icons/sl";
import { RiSecurePaymentFill } from "react-icons/ri";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useState } from "react";

const Sidebar = () => {
  const [transactBar, setTransactBar] = useState(false);

  return (
    <div className="sidebar-block">
              <div className="sidebar-header">
                      <Link to={'/member/id'} className="dashboard-logo-item">
                                   <h2>Agulu</h2>
                                   <span><RxDotFilled /></span>
                      </Link>
                      <span className="mobile-close-btn"><IoCloseOutline /></span>
              </div>
              <div className="sidebar-content">
                          <div className="main-navigation">
                                     <ul>
                                                <li><Link to={"/"} className="active"><span><IoHomeOutline /></span>Dashboard</Link></li>
                                                <li><Link to={"/"}><span><HiOutlinePresentationChartLine /></span>Analytics</Link></li>
                                                <li><Link to="#" onClick={() => setTransactBar(!transactBar)}><span><GrTransaction /></span>Transactions <span className={ transactBar ? "down active" : "down"}><HiOutlineChevronDown /></span></Link>
                                                       <div className={ transactBar ? "sidebar-dropdown active" : "sidebar-dropdown"}>
                                                                  <p>Debit</p>
                                                                  <p>Credit</p>
                                                                  <p>Loans</p>
                                                       </div>
                                                </li>
                                                <li><Link to={"/"}><span><CiMoneyCheck1 /></span>Take Loan</Link></li>
                                                {/* <li><Link to={"/"}><span><IoDocumentTextOutline /></span>Billing</Link></li> */}
                                                <li><Link to={"/"}><span><SlSettings /></span>Settings</Link></li>
                                                <li><Link to={"/"}><span><TfiHeadphoneAlt /></span>Help Center</Link></li>
                                     </ul>
                          </div>
                          <div className="extra-navigation">
                                   <div className="subscription-alert">
                                                <span><RiSecurePaymentFill /></span>
                                                <h3>Subscription</h3>
                                                <p>Enable reminders, deeper analytics and more.</p>
                                                <Link to={"/"}>Upgrade now</Link>
                                   </div>
                          </div>
              </div>
    </div>
  )
}

export default Sidebar