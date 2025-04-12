import { RxArrowLeft } from "react-icons/rx"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import NotificationBar from "../common/NotificationBar";
import { useDispatch, useSelector } from "react-redux";
import { useActivateUserMutation } from "../../redux/userSlice";
import Spinner from "../common/Spinner";
import { setNotification } from "../../redux/utilsSlice";
import { setCredentials } from "../../redux/authSlice";
const AccountConfirmTab = ({ func }) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const { tempUser } = useSelector(state => state.auth);
    const [ validateCode, { isLoading }] = useActivateUserMutation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitCode = async(form_data) => {
           const data = {
                  user_id: tempUser && tempUser.id,
                  code: form_data.code
           }

             const res = await validateCode(data).unwrap();
             if(res.error){
                    dispatch(setNotification({ status: true, message: res.error.data.message, type: "error"}))
              }else{
                   dispatch(setCredentials({...res}));
                  navigate(`/${res.role}/${res.id}/dashboard`);
             }
        //    try {
        //           const res = await validateCode(data).unwrap();
        //           if(res.error){
        //                 dispatch(setNotification({ status: true, message: res.error.data.message, type: "error"}))
        //           }else{
        //                 dispatch(setCredentials({...res}));
        //                 navigate(`/${res.role}/${res.id}/dashboard`);
        //           }
        //    } catch (error) {
        //           console.log(error)
        //    }
    }
  return (
    <div className="account-confirm-tab">
               <div className="form-grid-texts">
                          <NotificationBar />
                          <h2>Hi { tempUser && tempUser.name.split(" ")[0]}! Welcome to Agulu.</h2>
                          <p className="top">We have sent an activation code to <span>{ tempUser && tempUser.email }</span> . Kindly enter it below to activate your account.</p>

                          <form onSubmit={handleSubmit(submitCode)}>
                                <div className="form-row">
                                     <label htmlFor="code">Code<span>*</span></label>
                                     <input type="number" {...register("code", { required: "Invalid otp code"})} className="form-control" placeholder="* * * * * *" pattern="+[0, 9]"  />
                                     { errors.code ? <span className="error">{errors.code.message}</span> : ""}
                                </div>
                                <div className="form-row">
                                      <button type="submit">{ isLoading ? <Spinner /> : "Continue" }</button>
                               </div>
                                <p className="resend">Didn't receive any email? <span>Click to Resend</span></p>
                                <p className="redirect"> <span><RxArrowLeft /></span> <span onClick={() => func(false)} className="click">Back to Account Sign up</span></p>
                          </form>
               </div>
    </div>
  )
}

export default AccountConfirmTab