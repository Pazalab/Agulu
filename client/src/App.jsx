import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
function App() {

  return (
    <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/auth/login' element={<Login />} />
               <Route path='/auth/signup' element={<Signup />} />
               <Route path='/auth/forgot-password' element={<ForgotPassword />} />
    </Routes>
  )
}

export default App
