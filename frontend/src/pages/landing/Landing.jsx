// src/pages/landing/Landing.js
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar'
import ParticleBg from '../../components/ParticleBg'
// import '../../index.css';

const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div>
      {/* <ParticleBg /> */}
      <Navbar className="z-30"/>
      <div className="bg-white h-[100vh]">
        <div className="hidden md:flex justify-start pl-40 pr-40 flex-col">
          <p className="items-center text-[30px] sm:text-[60px] md:text-[80px] lg:text-[70px] font-bold text-transparent bg-clip-text bg-gray-900 drop-shadow-md tracking-tighter mt-[150px]">Heyo!</p>
          <p className='flex items-center text-[30px] sm:text-[60px] md:text-[80px] lg:text-[70px] font-bold text-transparent bg-clip-text bg-gray-900 drop-shadow-md tracking-tighter mt-[-20px]'>
            Welcome to <span className="pl-4 italic">ChatZone</span>
          </p>
          <p className="text-black mt-7" style={{textAlign: 'justify'}}>Chatzone: A dynamic chat application developed using the MERN stack (MongoDB, Express, React, Node.js). This project enables real-time communication between multiple users in a chat area, featuring an intuitive interface for seamless interaction. The application showcases my proficiency in full-stack development and my ability to integrate various technologies to create a cohesive user experience.</p>
          <ParticleBg />
        </div>

        <div className='flex flex-col justify-center items-center block md:hidden'>
          <p className='text-[80px] sm:text-[50px] md:text-[70px] lg:text-[100px] xl:text-[120px] font-bold text-transparent bg-clip-text bg-gray-900 drop-shadow-md tracking-wide mt-[100px] sm:mt-[150px] md:mt-[200px] px-4 sm:px-10 md:px-20'>
            Welcome
          </p>
          <p className='text-[80px] sm:text-[50px] md:text-[70px] lg:text-[100px] xl:text-[120px] font-bold text-transparent bg-clip-text bg-gray-900 drop-shadow-md tracking-wide sm:mt-[150px] md:mt-[200px] px-4 sm:px-10 md:px-20 mt-[-30px]'>
            to
          </p>
          <p className='text-[80px] sm:text-[50px] md:text-[70px] lg:text-[100px] xl:text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-md tracking-wide sm:mt-[150px] md:mt-[200px] px-4 sm:px-10 md:px-20 mt-[-30px]'>
            ChatZone
          </p>
          <ParticleBg />
        </div>



        {/* <div className="flex justify-center items-center gap-4 mt-4">
          <a href="https://github.com/ShashwatkumarXD" target="_blank" rel="noopener noreferrer">
            <img src="../public/github.svg" className="h-7 w-7" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/shashwat200418/" target="_blank" rel="noopener noreferrer">
            <img src="../public/linkedin.svg" className="h-10 w-10" alt="GitHub" />
          </a>
          <a href="https://github.com/ShashwatkumarXD" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className="h-8 w-8">
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
          </a>
        </div> */}
      </div>

       {/* <div className="flex justify-center items-center mt-24 gap-1 ">
        <button onClick={handleLogin} className="px-6 py-2 bg-blue-500 text-white rounded">
          Login
        </button>
        <button onClick={handleSignup} className="px-6 py-2 bg-green-500 text-white rounded">
          Sign Up
        </button>
      </div> */}
      {/* <div className="flex flex-col justify-center items-center pr-10 pl-10 pt-20 gap-10">
        <div></div>
        <p className="font-bold text-white text-6xl flex justify-start items-start">
          Introduction
        </p>
        <p className="intro text-white pr-[20%] pl-[20%] text-xl" style={{textAlign: 'justify'}}>
        Chatzone: A dynamic chat application developed using the MERN stack (MongoDB, Express, React, Node.js). This project enables real-time communication between multiple users in a chat area, featuring an intuitive interface for seamless interaction. The application showcases my proficiency in full-stack development and my ability to integrate various technologies to create a cohesive user experience.
        </p>

        <div>
          <p className="font-bold text-white text-6xl flex justify-start items-start mt-28">
            Technologies Used
          </p>
          <p className="intro text-white pr-[20%] pl-[20%] text-xl" style={{textAlign: 'justify'}}>
          Role: NoSQL database that stores data in a flexible, JSON-like format.
          Purpose: It handles the database layer, allowing you to store and retrieve data for your application.
          </p>
        </div>
      </div>  */}
    </div>
  );
};

export default Landing;
