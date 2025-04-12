import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearNotification } from "../../redux/utilsSlice";

const NotificationBar = () => {
   const { notification } = useSelector(state => state.utils);
   const dispatch = useDispatch();

   useEffect(() => {
        setTimeout(() => {
                 dispatch(clearNotification());
         }, 5000)
   })
  return (
    <div className={notification.status ? `notification-bar active ${notification.type}` : "notification-bar"}>
              <p>{notification.message}</p>
    </div>
  )
}

export default NotificationBar