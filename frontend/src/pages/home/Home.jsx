import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import ParticleBg from '../../components/ParticleBg';

const   Home = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <ParticleBg />
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
      <Sidebar />
      <MessageContainer />
    </div>
    </div>
  ) 
}

export default Home
