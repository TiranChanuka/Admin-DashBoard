import { React, useState } from 'react'
import { Link } from 'react-router-dom';

export const SideBar = () => {
    const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard",  link: "/dashboard" },
    { title: "Expanses", link: "/expenses"},
    { title: "Wallets", link: "/dashboard"},
    { title: "Summary ",  link: "/dashboard"},
    { title: "Accounts",  link: "/dashboard"},
    { title: "Settings",  link: "/dashboard"},
  ];
  return (
      <di>
           <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-12 relative duration-300  text-white font-poppins`}
      >
        <img
          src="../Assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
              />
              <div>
              <img
                alt="profile-user"
                width="72px"
                height="72px"
                src="./Assets/profile.png"
                className={`cursor-pointer duration-500 rounded-md ${
              open && "rotate-[360deg]"
            }`}
                />
          </div>
          <div className='flex-1 mt-3'>
              <div className={`text-30px font-semibold ${!open && "scale-0"}`}>Samantha</div>
              <div className={`text-17px ${!open && "scale-0"}`}>samantha@email.com</div>
              <div>
          </div>
          </div>
        <div className="pt-6 mt-8">
          {Menus.map((Menu, index) => (
            <div
              key={index}
              className={`flex text-25px rounded-md cursor-pointer hover:bg-white  text-gray-400 items-start 
              ${Menu.gap ? "mt-9" : "mt-4"} ${
                index === 0 && "bg-light-white"
              } `}
            >
                <Link to={Menu.link}></Link>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
        
          
          
    </di>
  )
} 
