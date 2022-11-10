import React from 'react';
import { HomeModernIcon } from '@heroicons/react/20/solid';
import { HomeIcon } from '@heroicons/react/20/solid';
import { BuildingStorefrontIcon } from '@heroicons/react/20/solid';
import { FaceSmileIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';

function Main() {
  const [state, setState] = useState(0);

  function Menu() {
    if (state == 0) {
      return (
        <div className="flex flex-row justify-evenly py-7 shadow-2xl bg-white">
          <button
            className="bg-blue-500  my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500   "
            onClick={() => setState(0)}
          >
            <HomeModernIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ทั้งหมด</p>
          </button>
          <button
            className="bg-[#AACEDA] my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500"
            onClick={() => setState(1)}
          >
            <HomeIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ที่พัก</p>
          </button>
          <button
            className="bg-[#AACEDA] my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500"
            onClick={() => setState(2)}
          >
            <BuildingStorefrontIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ร้านอาหาร</p>
          </button>
          <button
            className="bg-[#AACEDA] my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500"
            onClick={() => setState(3)}
          >
            <FaceSmileIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">กิจกรรม</p>
          </button>
        </div>
      );
    } else if (state == 1) {
      return (
        <div className="flex flex-row justify-evenly py-7 shadow-2xl bg-white">
          <button
            className="bg-[#AACEDA] my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500   "
            onClick={() => setState(0)}
          >
            <HomeModernIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ทั้งหมด</p>
          </button>
          <button
            className="bg-blue-500  my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500"
            onClick={() => setState(1)}
          >
            <HomeIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ที่พัก</p>
          </button>
          <button
            className="bg-[#AACEDA] my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500"
            onClick={() => setState(2)}
          >
            <BuildingStorefrontIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ร้านอาหาร</p>
          </button>
          <button
            className="bg-[#AACEDA] my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500"
            onClick={() => setState(3)}
          >
            <FaceSmileIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">กิจกรรม</p>
          </button>
        </div>
      );
    } else if (state == 2) {
      return (
        <div className="flex flex-row justify-evenly py-7 shadow-2xl bg-white">
          <button
            className="bg-[#AACEDA] my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500   "
            onClick={() => setState(0)}
          >
            <HomeModernIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ทั้งหมด</p>
          </button>
          <button
            className="bg-[#AACEDA] my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500"
            onClick={() => setState(1)}
          >
            <HomeIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ที่พัก</p>
          </button>
          <button
            className="bg-blue-500 my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500"
            onClick={() => setState(2)}
          >
            <BuildingStorefrontIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ร้านอาหาร</p>
          </button>
          <button
            className="bg-[#AACEDA] my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500"
            onClick={() => setState(3)}
          >
            <FaceSmileIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">กิจกรรม</p>
          </button>
        </div>
      );
    } else if (state == 3) {
      return (
        <div className="flex flex-row justify-evenly py-7 shadow-2xl bg-white">
          <button
            className="bg-[#AACEDA] my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500   "
            onClick={() => setState(0)}
          >
            <HomeModernIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ทั้งหมด</p>
          </button>
          <button
            className="bg-[#AACEDA] my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500"
            onClick={() => setState(1)}
          >
            <HomeIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ที่พัก</p>
          </button>
          <button
            className="bg-[#AACEDA] my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500"
            onClick={() => setState(2)}
          >
            <BuildingStorefrontIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ร้านอาหาร</p>
          </button>
          <button
            className="bg-blue-500  my-auto h-24 w-28 rounded-xl duration-100 hover:bg-blue-500"
            onClick={() => setState(3)}
          >
            <FaceSmileIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">กิจกรรม</p>
          </button>
        </div>
      );
    } else {
      return <div>Menu error</div>;
    }
  }

  return (
    <div className="pt-24 ">
      <div className="pt-12  ">
        <img
          className="object-cover object-left-top h-[350px] mx-auto w-[900px] "
          src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="mx-auto w-[900px] ">
          <Menu />
        </div>
      </div>
      
      <div className="pt-10 pb-4 mb-4 mt-8 bg-gray-300 mx-auto w-[900px] rounded-xl ">
        <form className="px-16">
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border  border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
          <div className="flex flex-row mt-4 ">
            <input type="date" id="dayCheckIn" name="dayCheckIn"></input>
            <div className="px-2">|</div>
            <input type="date" id="dayCheckOut" name="dayCheckOut"></input>
          </div>
        </form>
        <button className="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-4  rounded font-kanit ">
          ค้นหาโรงแรม
        </button>
      </div>
      {/* ********************************************************** */}
      {/* <div className=" bg-black mx-32 pt-10"></div> */}
    </div>
  );
}

export default Main;
