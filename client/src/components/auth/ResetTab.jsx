import { useContext, useState } from "react"
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link } from "react-router-dom"
import { RxArrowLeft } from "react-icons/rx";
import { forgetTabContext } from "../../contexts/forgotTabContext";

const ResetTab = () => {
    const [ eyeStatus, setEyeStatus ] = useState(false);
    const [ eyeStatus2, setEyeStatus2 ] = useState(false);
    const [ activeTabStatus, setActiveTabStatus ] = useContext(forgetTabContext);
  return (
    <div className={ activeTabStatus === "reset" ? "reset-tab active" : "reset-tab"}>
            <h2>Set new password</h2>
            <p>Must be atleast 8 characters.</p>

            <form>
                    <div className="form-row">
                            <label htmlFor="password">New Password <span>*</span></label>
                            <div className="form-input-password">
                                     <input type={ eyeStatus ? "text" : "password"} placeholder="New Password"/>
                                        <div className="input-switch" onClick={() => setEyeStatus(!eyeStatus)}>
                                                 { eyeStatus ? <span className="open"><VscEyeClosed/></span> :
                                                          <span className="closed"><VscEye/></span>
                                                   }
                                      </div>
                            </div>
                    </div>
                     <div className="form-row">
                             <label htmlFor="password">Confirm Password <span>*</span></label>
                             <div className="form-input-password">
                                    <input type={ eyeStatus2 ? "text" : "password"} placeholder="Confirm Password"/>
                                    <div className="input-switch" onClick={() => setEyeStatus2(!eyeStatus2)}>
                                            { eyeStatus2 ? <span className="open"><VscEyeClosed/></span> :
                                                     <span className="closed"><VscEye/></span>
                                            }
                                     </div>
                            </div>
                    </div>     
                    <div className="form-row">
                              <button type="submit">Reset Password</button>
                    </div>
                    <p className="redirect" onClick={() => setActiveTabStatus("code")}> <span><RxArrowLeft /></span><span className="click">Go back</span></p>                            
            </form>
    </div>
  )
}

export default ResetTab