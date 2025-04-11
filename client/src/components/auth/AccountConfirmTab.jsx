import { RxArrowLeft } from "react-icons/rx"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
const AccountConfirmTab = ({ func }) => {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const submitCode = async(data) => {

    }
  return (
    <div className="account-confirm-tab">
               <div className="form-grid-texts">
                          <h2>Hi! Welcome to Agulu #Name</h2>
                          <p>We have sent a confirmation code to <span>#email</span> . Kindly enter it below to activate your account.</p>

                          <form onSubmit={handleSubmit(submitCode)}>
                                <div className="form-row">
                                     <label htmlFor="code">Code<span>*</span></label>
                                     <input type="number"  {...register("code", { required: "Invalid otp code", minLength: 6})} className="form-control" placeholder="* * * * * *" pattern="+[0, 9]" />
                                     { errors.code ? <span className="error">{errors.code.message}</span> : ""}
                                </div>
                                <div className="form-row">
                                      <button type="submit">Continue</button>
                               </div>
                                <p className="resend">Didn't receive any email? <span>Click to Resend</span></p>
                                <p className="redirect"> <span><RxArrowLeft /></span> <span onClick={() => func(false)} className="click">Back to Account Sign up</span></p>
                          </form>
               </div>
    </div>
  )
}

export default AccountConfirmTab