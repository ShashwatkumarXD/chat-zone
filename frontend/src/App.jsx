import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Landing from './pages/landing/Landing';
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
  const { authUser } = useAuthContext();

  return (
    // className='p-4 h-screen flex items-center justify-start'
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path='/login' element={authUser ? <Navigate to='/home' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/home' /> : <SignUp />} />
        {/* <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} /> */}
        {/* <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} /> */}
        {/* <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} /> */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App


