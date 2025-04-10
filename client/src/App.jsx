import './App.css'
import { Routes, Route } from "react-router-dom"
import Login from './components/auth/Login'
import Home from './pages/Home'
function App() {

  return (
    <Routes>
              <Route path='/' element={<Home />} />
               <Route path='/auth/login' element={<Login />} />
    </Routes>
  )
}

export default App
