import { useContext } from "react";
import { RxArrowLeft } from "react-icons/rx";
import { forgetTabContext } from "../../contexts/forgotTabContext";
import NotificationBar from "../common/NotificationBar";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const CodeTab = () => {
  const [ activeTabStatus, setActiveTabStatus ] = useContext(forgetTabContext);
  const { tempUser } = useSelector(state => state.auth);
  const { register, handleSubmit, formState: { errors }} = useForm();

  const confirmPasswordRequest = async (form_data) => {
        
  }
  return (
    <div className={ activeTabStatus === "code" ? "code-tab active": "code-tab"}>
              <NotificationBar />
             <h2>Password Reset Code</h2>
             <p>We have sent you a code to <span>{ tempUser && tempUser.email }</span></p>

            <form>
                     <div className="form-row">
                          <label htmlFor="code">Code<span>*</span></label>
                          <input type="number" className="form-control" placeholder="* * * * * *" pattern="+[0, 9]" />
                    </div>
                    <div className="form-row">
                           <button type="submit">Continue</button>
                    </div>
                     <p className="resend">Didn't receive any email? <span>Click to Resend</span></p>
                     <p className="redirect" onClick={() => setActiveTabStatus("forgot")}> <span><RxArrowLeft /></span><span className="click">Go back</span></p>
             </form>
    </div>
  )
}

export default CodeTab