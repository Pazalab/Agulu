import { useDispatch, useSelector } from "react-redux";
import { useLogoutMemberOutMutation } from "../../redux/userSlice"
import { clearCredentials, clearTempUserDetails } from "../../redux/authSlice";
import { setNotification } from "../../redux/utilsSlice";
import { useNavigate } from "react-router-dom";
import { clearMemberProfile } from "../../redux/profileActionsSlice";

const Dashboard = () => {
  const [ logoutUser ] = useLogoutMemberOutMutation();
  const { userInfo } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutMember = async() =>{
         const res = await logoutUser().unwrap();

         if(res){
                dispatch(clearCredentials());
                dispatch(clearTempUserDetails());
                dispatch(clearMemberProfile());
                dispatch(setNotification({ status: true, message: res.message, type: "success"}));
                navigate("/auth/login")
         }
  }
  return (
    <div>Dashboard
              <h1>Hi { userInfo.name}</h1>
             <button onClick={logoutMember}>Logout</button>
    </div>
  )
}

export default Dashboard