import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
import MemberRoutes from "./utils/MemberRoutes"
import Dashboard from './pages/members/Dashboard'
function App() {

  return (
    <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/auth/login' element={<Login />} />
               <Route path='/auth/signup' element={<Signup />} />
               <Route path='/auth/forgot-password' element={<ForgotPassword />} />

               { /* Protected Routes */}
               <Route  element={<MemberRoutes />}>
                             <Route path='/member/:id/dashboard' element={<Dashboard />} />
               </Route>
    </Routes>
  )
}

export default App
