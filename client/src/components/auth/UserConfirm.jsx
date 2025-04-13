import { useDispatch, useSelector } from "react-redux"
import NotificationBar from "../common/NotificationBar"
import { useNavigate } from "react-router-dom";
import ResendActivation from "./ResendActivation";
import { useForm } from "react-hook-form";
import { useActivateUserMutation } from "../../redux/userSlice";
import { setNotification } from "../../redux/utilsSlice";
import { setCredentials } from "../../redux/authSlice";
import  {RxArrowLeft } from "react-icons/rx"
import Spinner from "../common/Spinner";

const UserConfirm = ({ func }) => {
    const { tempUser} = useSelector(state => state.auth);
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [ validateCode, { isLoading }] = useActivateUserMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const sendActivationCode = async (form_data) => {
          const data = {
               user_id: tempUser && tempUser.id,
              code: form_data.code
          }

         try {
                 const res = await validateCode(data).unwrap();
                if(!res){
                          dispatch(setNotification({ status: true, message: "Internal server error. Please try again later.", type: "error"}))
                  }else{
                        dispatch(setCredentials({...res}));
                        navigate(`/${res.role}/${res.id}/dashboard`);
                  }
          } catch (error) {
                dispatch(setNotification({ status: true, message: error.data.message, type: "error"}))
           }
    }        
  return (
    <div className="userconfirm-tab">
               <div className="form-grid-texts">
                         <NotificationBar />
                          <h2>Hi { tempUser && tempUser.name.split(" ")[0]}! Please activate your Account.</h2>
                          <p className="top">We have sent an activation code to <span>{ tempUser && tempUser.email }</span> . Kindly enter it below to activate your account.</p>

                          <form onSubmit={handleSubmit(sendActivationCode)}>
                              <div className="form-row">
                                     <label htmlFor="code">Code<span>*</span></label>
                                     <input type="number" {...register("code", { required: "Invalid otp code"})} className="form-control" placeholder="* * * * * *" pattern="+[0, 9]"  />
                                     { errors.code ? <span className="error">{errors.code.message}</span> : ""}
                                </div>
                                <div className="form-row">
                                      <button type="submit">{ isLoading ? <Spinner /> : "Continue" }</button>
                               </div>
                                <ResendActivation />
                                <p className="redirect"> <span><RxArrowLeft /></span> <span onClick={() => func(false)} className="click">Back to account login</span></p>
                     </form>
               </div>
    </div>
  )
}

export default UserConfirm