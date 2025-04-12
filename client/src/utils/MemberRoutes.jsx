import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const MemberRoutes = () => {
       const { userInfo } = useSelector(state => state.auth);

       return (
              userInfo ? <Outlet /> : <Navigate to={"/auth/login"} />
       )
}

export default MemberRoutes;