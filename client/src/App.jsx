import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
import MemberRoutes from "./utils/MemberRoutes"
import Dashboard from './pages/members/Dashboard'
import Success from './pages/auth/Success'
function App() {

  return (
    <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/auth/login' element={<Login />} />
               <Route path='/auth/signup' element={<Signup />} />
               <Route path='/auth/forgot-password' element={<ForgotPassword />} />
               <Route path='/auth/success' element={<Success />} />
               { /* Protected Routes */}
               <Route  element={<MemberRoutes />}>
                             <Route path='/member/:id' element={<Dashboard />} />
               </Route>
    </Routes>
  )
}

export default App
