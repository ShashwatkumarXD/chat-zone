import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';
import '/PROJECTS/MME/NEW/frontend/src/index.css';
import ParticleBg from '../../components/ParticleBg';
const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }

  return (
    <div>
      {/* <div className='whitebg'>
        <p>Welcome to chatzone!</p>
      </div> */}
      
      {/* 'text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-md tracking-wide' */}
      <div className='whitebg flex justify-center items-center h-screen'>
        <p className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-md tracking-wide'>
          Welcome to ChatZone!
        </p>
      </div>

      <ParticleBg />
      <div className='p-4 h-screen flex items-center justify-end mr-[10%]'>
        <div className='flex flex-col items-center justify-start min-w-96 max-auto'>
          <div className='w-full py-16 px-10 rounded-lg shadow-[10px_10px_15px_rgba(0,0,0,0.5)] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <div className='flex justify-center mb-2'>
              <img src="../public/man-svgrepo-com.svg" alt="logo" className="w-12 h-12" />
            </div>
            <h1 className='text-3xl font-semibold text-center text-gray-300 mb-5'>Login</h1>

            <form onSubmit={handleSubmit}>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text'>Username</span>
                </label>
                <input
                  type='text'
                  placeholder='Enter your username here'
                  className='border-gray-300 w-full input input-bordered h-10  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className='label'>
                  <span className='text-base label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='Enter Password'
                  className='w-full input input-bordered h-10 bg-white'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
                {"Don't"} have an account?
              </Link>

              <div>
                <button className='btn btn-block btn-sm mt-2 bg-cyan-800 border-none rounded-full mt-10' disabled={loading}>
                  {loading ? <span className='loading loading-spinner '></span> : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login