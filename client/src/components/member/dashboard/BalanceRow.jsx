import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import { Link } from "react-router-dom"
import { PiArrowUpRight } from "react-icons/pi";
import { HiOutlineBolt } from "react-icons/hi2";
import { GiCash } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { getCurrentMonthAndYear } from "../../../data/utils";

const BalanceRow = () => {
  return (
    <div className='balances-row'>
              <div className="agulu-balance-column">
                         <h3>Agulu balance</h3>
                         <div className="money-row">
                                   <div className="money">
                                             <span className="ksh">Ksh.</span>
                                             <h1>214,785.75</h1>
                                   </div>
                                    <div className="comparison-layer">
                                                <div className="rate">
                                                         <span><IoIosArrowRoundUp /></span>
                                                         5.5%
                                                </div>
                                               <p>vs last month</p>
                                    </div>
                         </div>
                            
                            <div className="agulu-actions">
                                     <Link to={"/"}>Take a Loan <span><PiArrowUpRight /></span></Link>
                                     <Link to={"/"}>View Report <span><PiArrowUpRight /></span></Link>
                            </div>
              </div>
              <div className="my-balance-column">
                        <div className="my-balance-header">
                                    <h3>My balance</h3>
                                    <p>{ getCurrentMonthAndYear()}</p>
                        </div>
                        <div className="money-row">
                                 <div className="money mine">
                                             <span className="ksh">Ksh.</span>
                                             <h1>14,115.00</h1>
                                   </div>
                        </div>
                        <p className="credit-limit">Credit Limit: <span className="ksh">Ksh.</span><span className="number">7,057.50</span></p>
                         <p className="interest-earned">Interest Earned: <span className="ksh">Ksh.</span><span className="number">456.50</span></p>
              </div>
              <div className="extra-balances-column">
                        <div className="balance-block">
                                  <div className="block-texts">
                                              <p>Amount collected this month</p>
                                              <h4><span className="ksh">Ksh.</span>9,500.00</h4>
                                  </div>
                                  <span className="icon"><HiOutlineBolt /></span>
                        </div>
                        <div className="balance-block">
                                  <div className="block-texts">
                                              <p>Amount Borrowed</p>
                                              <h4><span className="ksh">Ksh.</span>3,500.00</h4>
                                  </div>
                                  <span className="icon"><GiTakeMyMoney /></span>
                        </div>
              </div>
    </div>
  )
}

export default BalanceRow