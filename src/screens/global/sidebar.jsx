import React from 'react'

export const SideBar = () => {
  return (
      <div className='flex flex-col text-white p-14 w-100 bg-slate-800 font-poppins'>
          <div>
              <img
                alt="profile-user"
                width="72px"
                height="72px"
                src="./Assets/profile.png"
                className="rounded-lg"
                />
          </div>
          <div className='flex-1 mt-3'>
              <div className='text-30px font-semibold'>Samantha</div>
              <div className='text-17px'>samantha@email.com</div>
          </div>
          
    </div>
  )
} 
