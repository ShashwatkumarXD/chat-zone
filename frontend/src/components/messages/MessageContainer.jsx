import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';

const MessageContainer = () => {
  // const nochatSelected = true; //false to select chat

  const {selectedConversation , setSelectedConversation } =useConversation();

  useEffect(()=>{

    //cleanup function when we log back in it would clean up last selected person.
    return () =>{
      setSelectedConversation(null)
    }
  },[setSelectedConversation])


  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? <NoChatSelected/> : (
        <>
        {/* Header */}
        <div className='bg-pink-500 px-4 py-2 mb-2'>
          <span className='label-text '>To: </span>
          <span className='text-gray-900 font-bold'>{selectedConversation.fullName  }</span>
        </div>

        <Messages />
        <MessageInput />
      </>
      )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
	// const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 Jaspreet Kaur ❄</p>
				<p>Welcome to our <span className='text-pink-500'>M</span>otherhood <span className='text-pink-500'>M</span>ade <span className='text-pink-500'>E</span>asy</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
