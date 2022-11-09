import React from 'react';
import { HomeModernIcon } from '@heroicons/react/20/solid';
function Main() {
  return (
    <div className="pt-24 ">
      <div className="pt-12  ">
        <img
          className="mx-auto object-cover object-left-top h-[350px] w-[1200px] "
          src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="flex flex-row justify-evenly px-[200px] shadow-2xl mx-auto bg-white h-[150px] w-[1200px] ">
          <button className="bg-blue-300 my-auto h-24 w-32 rounded-xl duration-100 hover:bg-blue-500">
            <HomeModernIcon className="h-10 w-10 text-gray-800 mx-auto " />
            <p className="font-kanit">ที่พักทั้งหมด</p>
          </button>
          <button className="bg-blue-300 my-auto h-24 w-32 rounded-xl duration-100 hover:bg-blue-500">
            <HomeModernIcon className="h-10 w-10 text-gray-800 mx-auto " />
            <p className="font-kanit">ที่พักทั้งหมด</p>
          </button>
          <button className="bg-blue-300 my-auto h-24 w-32 rounded-xl duration-100 hover:bg-blue-500">
            <HomeModernIcon className="h-10 w-10 text-gray-800 mx-auto " />
            <p className="font-kanit">ที่พักทั้งหมด</p>
          </button>
          <button className="bg-blue-300 my-auto h-24 w-32 rounded-xl duration-100 hover:bg-blue-500">
            <HomeModernIcon className="h-10 w-10 text-gray-800 mx-auto " />
            <p className="font-kanit">ที่พักทั้งหมด</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
