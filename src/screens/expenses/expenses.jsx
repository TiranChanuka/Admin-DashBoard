import React from 'react'
import TransactionChart from '../../components/barChart'
import { BsThreeDots } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import { MdDirectionsBusFilled } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { IoMdPlayCircle } from "react-icons/io";
import { GiRiceCooker } from "react-icons/gi";
import { FiPlusCircle } from "react-icons/fi";
import { ProgressBar } from '../../components/progressBar';

export const Expenses = () => {
  return (
    <div className="bg-white rounded-3xl font-poppins w-auto">
      <div className="lg:grid grid-cols-12 gap-4">
        {/* Left section star */}
        <div className="col-span-8 text-black  grid grid-cols-3 p-5 sm:p-14">
          <div className=' col-span-2'>
            <div className=' text-30px sm:text-40px font-semibold'>Expenses</div>
            <div className=' text-14px sm:text-16px text-gray-400'>01 - 25 March, 2020</div>
          </div>
          {/* three images and plus button */}
          <div className='col-span-1 flex justify-end flex-wrap pt-4'>
            <img src="./Assets/girl.png" alt="girl1" className=' rounded-full object-cover w-[25px] h-[25px] sm:w-[32px] sm:h-[32px] hidden sm:block' />
            <img src="./Assets/boy.png" alt="boy" className=' rounded-full object-cover w-[25px] h-[25px] sm:w-[32px] sm:h-[32px] hidden sm:block' />
            <img src="./Assets/girl2.png" alt="girl2" className=' rounded-full object-cover w-[25px] h-[25px] sm:w-[32px] sm:h-[32px] hidden sm:block' />
            <div className='text-25px sm:text-32px ms-3 text-[#D2DCE8]'><FiPlusCircle /></div>
          </div>
          {/*end three images and plus button */}

          {/* Bar chart */}
          <div className='col-span-3'>
            <div className='text-40px font-semibold'>
              <div className=' '>
                <TransactionChart />
              </div>
            </div>
          </div>

          {/* Today Section */}
          <div className='col-span-3'>
            <div className='mt-4 flex justify-between'>
              <div className='text-16px sm:text-18px font-semibold'>Today</div>
              <div className='text-16px sm:text-18px font-semibold'><BsThreeDots />
              </div>
            </div>
            <hr className='mt-3 mb-3' />
            <div className='mt-4 flex justify-between'>
              <div className='flex'>
                <div className='text-18x sm:text-20px font-semibold bg-iconBlue rounded-full p-2 sm:p-4 text-white'><IoMdCart /></div>
                <div className='ms-5'>
                  <div className='text-12px sm:text-16px font-medium'>Grocery</div>
                  <div className='text-10px sm:text-14px text-gray-400'>5:12 pm  •  Belanja di pasa</div>
                </div>

              </div>
              <div className='text-12px sm:text-16px font-semibold text-iconColor'>-326.800
              </div>
            </div>
            <div className='mt-4 flex justify-between'>
              <div className='flex'>
                <div className='text-18x sm:text-20px font-semibold bg-iconPurple rounded-full p-2 sm:p-4 text-white'><MdDirectionsBusFilled /></div>
                <div className='ms-5'>
                  <div className='text-12px sm:text-16px font-medium'>Transportation</div>
                  <div className='text-10px sm:text-14px text-gray-400'>5:12 pm  •  Naik bus umum</div>
                </div>

              </div>
              <div className='text-12px sm:text-16px font-semibold text-iconColor'>-15.000
              </div>
            </div>
            <div className='mt-4 flex justify-between'>
              <div className='flex'>
                <div className='text-18x sm:text-20px font-semibold bg-iconOrange rounded-full p-2 sm:p-4 text-white'><MdHome /></div>
                <div className='ms-5'>
                  <div className='text-12px sm:text-16px font-medium'>Housing</div>
                  <div className='text-10px sm:text-14px text-gray-400'>5:12 pm  •  Bayar Listrik</div>
                </div>

              </div>
              <div className='text-12px sm:text-16px font-semibold text-iconColor'>-185.750
              </div>
            </div>
          </div>

          {/* Monday, 23 March 2020 Section */}
          <div className='col-span-3 mt-10'>
            <div className='mt-4 flex justify-between'>
              <div className='text-16px sm:text-18px font-semibold'>Monday, 23 March 2020</div>
              <div className='text-16px sm:text-18px font-semibold text-gray-400'><BsThreeDots />
              </div>
            </div>
            <hr className='mt-3 mb-3' />
            <div className='mt-4 flex justify-between'>
              <div className='flex'>
                <div className='text-18x sm:text-20px font-semibold bg-iconRed rounded-full p-2 sm:p-4 text-white'><GiRiceCooker /></div>
                <div className='ms-5'>
                  <div className='text-12px sm:text-16px font-medium'>Food and Drink</div>
                  <div className='text-10px sm:text-14px text-gray-400'>5:12 pm  •  Makan Steak</div>
                </div>

              </div>
              <div className='text-12px sm:text-16px font-semibold text-iconColor'>-156.000
              </div>
            </div>
            <div className='mt-4 flex justify-between'>
              <div className='flex'>
                <div className=' text-18x sm:text-20px font-semibold bg-iconGreen rounded-full p-2 sm:p-4 text-white'><IoMdPlayCircle /></div>
                <div className='ms-5'>
                  <div className='text-12px sm:text-16px font-medium'>Entertainment</div>
                  <div className='text-10px sm:text-14px text-gray-400'>5:12 pm  •  Nonton Bioskop</div>
                </div>

              </div>
              <div className='text-12px sm:text-16px font-semibold text-iconColor'>-35.200
              </div>
            </div>
          </div>
        </div>

        {/* Right section start */}
        <div className="lg:col-span-4 bg-sidebarColor text-black p-5 sm:p-14 rounded-r-3xl rounded-l-3xl font-poppins">
          <div className=' text-18px md:text-20px font-medium'>Where your money go?</div>
          {/* Progress Bars */}

          <div>
            <ProgressBar />
          </div>
          {/* end Progress Bars */}
          {/* Side Box */}
          <div class="bg-sideBox w-100% h-[258px] mt-24 ps-6 pe-6 rounded-xl">
            <div class="flex justify-between">
              <div class="transform -translate-y-1/4">
                <img
                  alt="box"
                  width="85px"
                  height="73px"
                  src="./Assets/box.png"
                />
              </div>
              <div class="transform -translate-y-1/2 items-end">
                <img
                  alt="box"
                  width="53px"
                  height="91px"
                  src="./Assets/plant.png"
                />
              </div>
            </div>
            <div class="font-poppins sm:text-center lg:text-left">
              <div class="font-semibold text-16px">Save more money</div>
              <div class="text-12px font-regular mt-1">eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
            </div>
            <div class="flex justify-center sm:items-center lg:justify-start lg:items-start">  <button class="bg-black text-white text-13px rounded-lg mt-6 py-2.5 px-12 sm:px-16">VIEW TIPS</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
