import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom";
const AdminRoutes = () => {
    const { userInfo } = useSelector(state => state.auth);

  return (
        userInfo && userInfo.role === "admin" ? <Outlet /> : <Navigate to={"/auth/admin-access-denied"} />
  )
}

export default AdminRoutes