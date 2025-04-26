import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { BsBank2 } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import temp1 from "../../../assets/portrait3.jpg"
import temp2 from "../../../assets/portrait4.jpg"
import mpesa from "../../../assets/mpesa.png"

const TransactionRow = () => {
    const [ transactionType, setTransactionType ] = useState("All transactions");
    const [ isOptionsActive, setIsOptionsActive ] = useState(false);

    const handleChangeOfTransactionType = (val) => {
             setIsOptionsActive(false);
             setTransactionType(val)
    }
  return (
    <div className="transaction-row">
             <div className="transaction-row-header">
                        <h3>Transaction history</h3>
                        <div className="transaction-data-switch">
                                   <div className="active-transaction-data" onClick={() => setIsOptionsActive(!isOptionsActive)}>
                                              <h4>{transactionType}</h4>
                                              <span><IoChevronDownOutline /></span>
                                   </div>
                                   { isOptionsActive &&
                                           <div className="data-options-block">
                                                 <ul>
                                                     <li onClick={() => handleChangeOfTransactionType("All transactions")} className={ transactionType === "All transactions" ? "active" : ""}>All transactions</li>
                                                     <li onClick={() => handleChangeOfTransactionType("This year")} className={transactionType === "This year" ? "active" : ""}>This year</li>
                                                     <li onClick={() =>handleChangeOfTransactionType("This month")} className={ transactionType === "This month" ? "active" : ""}>This month</li>
                                                </ul>
                                        </div>
                                   }
                        </div>
             </div>
             <div className="transaction-table-grid">
                       <div className="table-grid-header">
                                 <span>Name</span>
                                 <span>Date</span>
                                 <span>Transaction</span>
                                 <span>Amount</span>
                                 <span>Status</span>
                                 <span>Action</span>
                       </div>
                       <div className="table-content-row">
                       <div className="table-content-grid">
                                 <div className="name-cell">
                                           <div className="name-image">
                                                     <img src={temp1} alt="" />
                                           </div>
                                           <h4>Ludwig Krapf</h4>
                                 </div>
                                 <div className="date-cell">
                                            <p>Aug 02,2024 - 11:00 AM</p>
                                 </div>
                                 <div className="transaction-cell">
                                            <span><BsBank2 /></span>
                                            <h4>Bank transfer</h4>
                                 </div>
                                 <div className="amount-cell">
                                          <span className="ksh">Ksh.</span>
                                          <h4>3,200</h4>
                                 </div>
                                 <div className="status-cell">
                                             <span className="completed">
                                                       Completed
                                             </span>
                                 </div>
                                 <div className="action-cell">
                                            <span><FiMoreHorizontal /></span>
                                 </div>
                       </div>
                       <div className="table-content-grid">
                                 <div className="name-cell">
                                           <div className="name-image">
                                                     <img src={temp2} alt="" />
                                           </div>
                                           <h4>James Livingstone</h4>
                                 </div>
                                 <div className="date-cell">
                                            <p>Sept 14,2024 - 14:31 AM</p>
                                 </div>
                                 <div className="transaction-cell">
                                             <img src={mpesa} alt="" className="mpesa" />
                                            <h4>Mpesa transfer</h4>
                                 </div>
                                 <div className="amount-cell">
                                          <span className="ksh">Ksh.</span>
                                          <h4>1,200</h4>
                                 </div>
                                 <div className="status-cell">
                                             <span className="pending">
                                                       Pending
                                             </span>
                                 </div>
                                 <div className="action-cell">
                                            <span><FiMoreHorizontal /></span>
                                 </div>
                       </div>
                       <div className="table-content-grid">
                                 <div className="name-cell">
                                           <div className="name-image">
                                                     <img src={temp1} alt="" />
                                           </div>
                                           <h4>Ludwig Krapf</h4>
                                 </div>
                                 <div className="date-cell">
                                            <p>Aug 02,2024 - 11:00 AM</p>
                                 </div>
                                 <div className="transaction-cell">
                                            <span><BsBank2 /></span>
                                            <h4>Bank transfer</h4>
                                 </div>
                                 <div className="amount-cell">
                                          <span className="ksh">Ksh.</span>
                                          <h4>3,200</h4>
                                 </div>
                                 <div className="status-cell">
                                             <span className="completed">
                                                       Completed
                                             </span>
                                 </div>
                                 <div className="action-cell">
                                            <span><FiMoreHorizontal /></span>
                                 </div>
                       </div>
                       <div className="table-content-grid">
                                 <div className="name-cell">
                                           <div className="name-image">
                                                     <img src={temp2} alt="" />
                                           </div>
                                           <h4>James Livingstone</h4>
                                 </div>
                                 <div className="date-cell">
                                            <p>Sept 14,2024 - 14:31 AM</p>
                                 </div>
                                 <div className="transaction-cell">
                                             <img src={mpesa} alt="" className="mpesa" />
                                            <h4>Mpesa transfer</h4>
                                 </div>
                                 <div className="amount-cell">
                                          <span className="ksh">Ksh.</span>
                                          <h4>1,200</h4>
                                 </div>
                                 <div className="status-cell">
                                             <span className="pending">
                                                       Pending
                                             </span>
                                 </div>
                                 <div className="action-cell">
                                            <span><FiMoreHorizontal /></span>
                                 </div>
                       </div>
                       </div>
             </div>
    </div>
  )
}

export default TransactionRow