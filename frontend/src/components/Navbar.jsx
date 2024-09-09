import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// 


const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      // Perform search action
      console.log(`Searching for: ${searchTerm}`);
    } else {
      console.log('Search term is empty');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };


  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className='shadow-[0_0.1px_3px_0_rgba(0,0,0,1)]'>
      <div className="navbar bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 h-20">
        <div className="navbar-start p-0 w-[50px]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="flex btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-start">
          <a className="btn btn-ghost text-2xl text-black ml-3">ChatZone</a>
        </div>
        <div className="navbar-end">
          <div className='flex gap-1'>
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-white border-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <button className="btn btn-ghost btn-circle"
              onClick={handleSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          {/* <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button> */}
          {/* <button onClick={handleLogin} className="">
            Login
          </button> */}

          {/* <p className='items-center'>Login</p> */}
          <button onClick={handleLogin} className="btn btn-ghost btn-circle mr-2 ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

