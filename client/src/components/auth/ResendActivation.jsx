import { useDispatch, useSelector } from "react-redux";
import { useResendAccountCodeMutation } from "../../redux/userSlice";
import { setNotification } from "../../redux/utilsSlice";
import Spinner from "../common/Spinner";

const ResendActivation = () => {
    const { tempUser } = useSelector(state => state.auth);
    const [ resendCode, { isLoading }] = useResendAccountCodeMutation();
    const dispatch = useDispatch();

    const resendActivationCode = async() => {
        const id = tempUser && tempUser.id
         try {
               const res = await resendCode({ id }).unwrap();
               if(!res){
                       dispatch(setNotification({ status: true, message: "Internal server error. Please try again later.", type: "error"}))
               }else{
                      dispatch(setNotification({ status: true, message: res.message, type: "success"}))
               }
         } catch (error) {
                 dispatch(setNotification({ status: true, message: error.data.message, type: "error"}))
         }
}
  return (
          <p className="resend">Didn't receive any email? <span onClick={resendActivationCode}>Resend Code { isLoading ? <Spinner /> : ""}</span></p>
  )
}

export default ResendActivation