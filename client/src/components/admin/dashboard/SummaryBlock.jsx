import { RxQuestionMarkCircled } from "react-icons/rx";
import { SlWallet } from "react-icons/sl";
import { CiMoneyCheck1 } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";

const SummaryBlock = () => {
  return (
    <div className="summary-block">
            <div className="simple-block-moja">
                      <div className="block-moja-item">
                              <div className="block-moja-inner">
                                       <h3>Agulu Balance <span><RxQuestionMarkCircled /></span></h3>
                                       <h5>1 Jan, 2024 - Present</h5>
                              </div>
                              <span className="icon"><SlWallet /></span>
                      </div>
                      <div className="block-moja-money">
                              <h2><span className="ksh">Ksh.</span>240,000</h2>
                              <p><span>+17%</span> last year</p>
                      </div>
            </div>
            <div className="simple-block-moja">
                      <div className="block-moja-item">
                              <div className="block-moja-inner">
                                       <h3>Monthly Inflow <span><RxQuestionMarkCircled /></span></h3>
                                       <h5>11 June, 2025 - Present</h5>
                              </div>
                              <span className="icon"><CiMoneyCheck1 /></span>
                      </div>
                      <div className="block-moja-money">
                              <h2><span className="ksh">Ksh.</span>11,500</h2>
                              <p><span>+7%</span> last year</p>
                      </div>
            </div>
                        <div className="simple-block-moja">
                      <div className="block-moja-item">
                              <div className="block-moja-inner">
                                       <h3>Credit Taken<span><RxQuestionMarkCircled /></span></h3>
                                       <h5>1 Jan, 2025 - Present</h5>
                              </div>
                              <span className="icon"><CiMoneyCheck1 /></span>
                      </div>
                      <div className="block-moja-money">
                              <h2><span className="ksh">Ksh.</span>24,500</h2>
                              <p><span>+10%</span> last year</p>
                      </div>
            </div>
    </div>
  )
}

export default SummaryBlock