import { useDispatch } from "react-redux";
import { useLogoutMemberOutMutation } from "../../redux/userSlice"
import { clearCredentials, clearTempUserDetails } from "../../redux/authSlice";
import { setNotification } from "../../redux/utilsSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [ logoutUser ] = useLogoutMemberOutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutMember = async() =>{
         const res = await logoutUser().unwrap();

         if(res){
                dispatch(clearCredentials());
                dispatch(clearTempUserDetails());
                dispatch(setNotification({ status: true, message: res.message, type: "success"}));
                navigate("/auth/login")
         }
  }
  return (
    <div>Dashboard

             <button onClick={logoutMember}>Logout</button>
    </div>
  )
}

export default Dashboard