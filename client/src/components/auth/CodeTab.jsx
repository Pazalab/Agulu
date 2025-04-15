import { useContext } from "react";
import { RxArrowLeft } from "react-icons/rx";
import { forgetTabContext } from "../../contexts/forgotTabContext";
import NotificationBar from "../common/NotificationBar";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useValidateForgetPasscodeMutation } from "../../redux/userSlice";
import { setNotification } from "../../redux/utilsSlice";
import Spinner from "../common/Spinner";
import ResendPassCode from "./ResendPassCode";

const CodeTab = () => {
  const [ activeTabStatus, setActiveTabStatus ] = useContext(forgetTabContext);
  const { tempUser } = useSelector(state => state.auth);
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [ validatePasscode, { isLoading }] = useValidateForgetPasscodeMutation();
  const dispatch = useDispatch();

  const confirmPasswordRequest = async (form_data) => {
          const data = {
                  code: form_data.code,
                  user_id: tempUser && tempUser.id
          }
          try {
               const res = await validatePasscode(data).unwrap()
               if(!res){
                     dispatch(setNotification({ status: true, message: "Internal server error. Please try again later.", type: "error"}))
               }else{
                     setActiveTabStatus("reset");
                     dispatch(setNotification({ status: true, message: res.message, type: "success"}))
               }
          } catch (error) {
                dispatch(setNotification({ status: true, message: error.data.message, type: "error" }))
          }
  }
  return (
    <div className={ activeTabStatus === "code" ? "code-tab active": "code-tab"}>
              <NotificationBar />
             <h2>Password Reset Code</h2>
             <p>We have sent you a code to <span>{ tempUser && tempUser.email }</span></p>

            <form onSubmit={handleSubmit(confirmPasswordRequest)}>
                     <div className="form-row">
                          <label htmlFor="code">Code<span>*</span></label>
                          <input type="number" {...register("code", { required: "Code input is required"})} className="form-control" placeholder="* * * * * *" pattern="+[0, 9]" />
                          { errors.code ? <span className="error">{errors.code}</span> : ""}
                    </div>
                    <div className="form-row">
                           <button type="submit">{isLoading ? <Spinner /> : "Continue"}</button>
                    </div>
                     <ResendPassCode />
                     <p className="redirect" onClick={() => setActiveTabStatus("forgot")}> <span><RxArrowLeft /></span><span className="click">Go back</span></p>
             </form>
    </div>
  )
}

export default CodeTab