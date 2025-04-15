import { useDispatch, useSelector } from "react-redux"
import { useResendResetPasscodeMutation } from "../../redux/userSlice";
import { setNotification } from "../../redux/utilsSlice";
import Spinner from "../common/Spinner";

const ResendPassCode = () => {
    const { tempUser } = useSelector(state => state.auth);
    const [ resendPasswordCode, { isLoading }] = useResendResetPasscodeMutation();
    const dispatch = useDispatch();

    const resendPasswordResetCode = async() => {
           const id = tempUser && tempUser.id;
           try {
                const res = await resendPasswordCode({ id }).unwrap();
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
    <div className="resend">Didn't receive any email? <span onClick={resendPasswordResetCode}>Click to Resend  { isLoading ? <Spinner /> : ""}</span></div>
  )
}

export default ResendPassCode