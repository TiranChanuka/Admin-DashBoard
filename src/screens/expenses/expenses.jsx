import React from 'react'
import TransactionChart from '../../components/barChart'
import { BsThreeDots } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import { MdDirectionsBusFilled } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { IoMdPlayCircle } from "react-icons/io";
import { GiRiceCooker } from "react-icons/gi";

export const Expenses = () => {
  return (
    <div className="bg-white rounded-3xl font-poppins">
      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-8 text-black grid grid-cols-3 p-14">
          <div className=' col-span-2'>
            <div className='text text-40px font-semibold'>Expenses</div>
            <div className='text-16px'>01 - 25 March, 2020</div>
          </div>
          <div >Images</div>
          <div className='col-span-3'>
            <div className='text-40px font-semibold'>
              <div>
                <TransactionChart />
              </div>
            </div>
          </div>
          <div className='col-span-3'>
            <div className='mt-4 flex justify-between'>
              <div className='text-18px font-semibold'>Today</div>
              <div className='text-18px font-semibold text-gray-400'><BsThreeDots />
              </div>
            </div>
            <hr className='mt-3 mb-3' />
            <div className='mt-4 flex justify-between'>
              <div className='flex'>
                <div className='text-20px font-semibold bg-iconBlue rounded-full p-4 text-white'><IoMdCart /></div>
                <div className='ms-5'>
                  <div className='text-16px font-medium'>Grocery</div>
                  <div className='text-14px text-gray-400'>5:12 pm  •  Belanja di pasar</div>
                </div>

              </div>
              <div className='text-16px font-semibold text-iconColor'>-326.800
              </div>
            </div>
            <div className='mt-4 flex justify-between'>
              <div className='flex'>
                <div className='text-20px font-semibold bg-iconPurple rounded-full p-4 text-white'><MdDirectionsBusFilled /></div>
                <div className='ms-5'>
                  <div className='text-16px font-medium'>Transportation</div>
                  <div className='text-14px text-gray-400'>5:12 pm  •  Naik bus umum</div>
                </div>

              </div>
              <div className='text-16px font-semibold text-iconColor'>-15.000
              </div>
            </div>
            <div className='mt-4 flex justify-between'>
              <div className='flex'>
                <div className='text-20px font-semibold bg-iconOrange rounded-full p-4 text-white'><MdHome /></div>
                <div className='ms-5'>
                  <div className='text-16px font-medium'>Housing</div>
                  <div className='text-14px text-gray-400'>5:12 pm  •  Bayar Listrik</div>
                </div>

              </div>
              <div className='text-16px font-semibold text-iconColor'>-185.750
              </div>
            </div>
          </div>
          {/* Monday, 23 March 2020 Section */}
          <div className='col-span-3 mt-10'>
            <div className='mt-4 flex justify-between'>
              <div className='text-18px font-semibold'>Monday, 23 March 2020</div>
              <div className='text-18px font-semibold text-gray-400'><BsThreeDots />
              </div>
            </div>
            <hr className='mt-3 mb-3' />
            <div className='mt-4 flex justify-between'>
              <div className='flex'>
                <div className='text-20px font-semibold bg-iconRed rounded-full p-4 text-white'><GiRiceCooker /></div>
                <div className='ms-5'>
                  <div className='text-16px font-medium'>Food and Drink</div>
                  <div className='text-14px text-gray-400'>5:12 pm  •  Makan Steak</div>
                </div>

              </div>
              <div className='text-16px font-semibold text-iconColor'>-156.000
              </div>
            </div>
            <div className='mt-4 flex justify-between'>
              <div className='flex'>
                <div className='text-20px font-semibold bg-iconGreen rounded-full p-4 text-white'><IoMdPlayCircle /></div>
                <div className='ms-5'>
                  <div className='text-16px font-medium'>Entertainment</div>
                  <div className='text-14px text-gray-400'>5:12 pm  •  Nonton Bioskop</div>
                </div>

              </div>
              <div className='text-16px font-semibold text-iconColor'>-35.200
              </div>
            </div>
          </div>

        </div>
        <div className="md:col-span-4 bg-red-300 text-white p-14">
          <div>SideChart</div>
        </div>
      </div>
    </div>
  )
}
