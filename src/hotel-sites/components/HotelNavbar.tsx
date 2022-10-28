import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {NavLink,Link} from "react-router-dom";

const  logo ='https://cdn.discordapp.com/attachments/798208544914407465/1034861427472732171/logo.gif'
function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}
function HotelNavbar () {
 
  return (
     <div className="w-screen h-[95px] z-10 bg-gray-100 fixed drop-shadow-md">
        <div className="px-8 flex justify-between items-center w-full h-full">
                <a >
                  <a href ="/hotelhome">
                  <img src = {logo} alt ='logo' className="  border-1   hidden md:flex w-24 "/>
                  </a>
                </a>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
                  <ul className="hidden md:flex space-x-7 pr-12">
                      <li className=' transition delay-150 hover:bg-gray-400'>
                        <a href = "/hotelhotels" className='text-black text-xl'>ที่พักของฉัน</a>
                      </li>
                      <li className=' transition delay-150 hover:bg-gray-400'>
                        <a href="/hotelrestaurants" className='text-black text-xl'>ร้านอาหารของฉัน</a>
                      </li>
                      <li className=' transition delay-150 hover:bg-gray-400'>
                        <a href="/hoteltourisms" className='text-black text-xl'>สถานที่ท่องเที่ยว</a>
                      </li>
                      <li className=' transition delay-150 hover:bg-gray-400'>
                        <a href="/hotelannouncements" className='text-black text-xl'>ลงประกาศ</a>
                      </li>
                  </ul>
                </div>
                <div className="flex items-center md:order-2 ">
                  <Menu as="div" className="relative inline-block text-left ">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transform active:rotate-180 delay-100 visited:rotate-180 ">
                        <ChevronDownIcon className="-mr-1 h-5 w-5 " aria-hidden="true" />
                      </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                      <a href="/hotelprofile" className={classNames(
                        active ? ' bg-gray-100 text-gray-900' : 'text-gray-700','flex px-4 py-2 text-sm'
                        )}
                      >
                      <div className='mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                        โปรไฟล์
                      </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      
                      {({ active }) => (
                      
                      <a href="/hotelhotels" className={classNames(
                        active ? ' bg-gray-100 text-gray-900' : 'text-gray-700','flex px-4 py-2 text-sm'
                        )}
                      >
                      <div className='mr-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                          </svg>
                      </div>  
                          ที่พักของฉัน
                      </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                      <a href="/hotelhistory" className={classNames(
                        active ? ' bg-gray-100 text-gray-900' : 'text-gray-700','flex px-4 py-2 text-sm'
                        )}
                      >
                      <div className='mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                        ประวัติการให้บริการที่พัก
                      </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                      <a href="/hoteldiscount" className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','flex block px-4 py-2 text-sm'
                        )}
                      >
                      <div className='mr-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>
                      </div>
                        คูปองส่วนลด
                      </a>
                      )}
                    </Menu.Item>
                    
                    </div>
                  </Menu.Items>
                  </Transition>
                  </Menu>
                </div>
        </div> 
      </div>
    
  )
  
}
export default HotelNavbar;