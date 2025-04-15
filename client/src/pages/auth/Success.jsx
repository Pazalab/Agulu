import { useDispatch, useSelector } from "react-redux"
import { useGetMemberProfileQuery } from "../../redux/profileApiSlice";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { setMemberProfile } from "../../redux/profileActionsSlice";
import { setCredentials } from "../../redux/authSlice";

const Success = () => {
    const { tempUser } = useSelector(state => state.auth);
    const [ errorBar, setErrorBar ] = useState(false);
    const { data, isLoading } = useGetMemberProfileQuery({ refetchOnMountOrArgChange: true })

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
            if(!data && !isLoading){
                  setErrorBar(true)
            }
            if(data){
                  dispatch(setMemberProfile({...data.profile}));
                  dispatch(setCredentials({...data.userInfo}));
                  navigate(`/${data.userInfo.role}/${data.userInfo.id}`)
            }

    }, [data, isLoading, dispatch, navigate])
  return (
    <div className="success-wrapper">
                { isLoading  ?
                         <div className="success-container">
                                <div className="success-loader"></div>
                                <div className="success-texts">
                                           <h3>{ tempUser ? tempUser.name.split(" ")[0] : ""} just a moment...</h3>
                          </div>
                     </div> : ""
                 }
               
               { errorBar && 
                     <div className="member-error">
                               <p>Mmh...It seems you are not using the correct authentication procedure.</p>
                               <Link to={"/auth/login"}>Back to Login</Link>
                    </div>
                }
    </div>
  )
}

export default Success