import React from 'react';
import {
  HomeModernIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid';
import { HomeIcon } from '@heroicons/react/20/solid';
import { BuildingStorefrontIcon } from '@heroicons/react/20/solid';
import { FaceSmileIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import Topotown from '../components/topTown';
import { Menu } from '@headlessui/react';

import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from 'react-router-dom';

// useEffect,
function Main() {
  const [state, setState] = useState(0);

  const navigate = useNavigate();
  const [customOpen, setCustomOpen] = useState(false);

  const [phai, setPhai] = useState('');

  const [dateCheckin, setDateCheckin] = useState('');
  const [dateCheckout, setDateCheckout] = useState('');
  const [roomtype, setRoomtype] = useState({ adult: 1, children: 0, room: 1 });

  function test() {
    console.log('Search : ' + phai);
    console.log('Roomtype : ' + JSON.stringify(roomtype));
    const CheckIn = dateCheckin.split('-');
    const CheckOut = dateCheckout.split('-');
    console.log(
      'CheckIn : ' + CheckIn[2] + '-' + CheckIn[1] + '-' + CheckIn[0],
    );
    console.log(
      'CheckOut : ' + CheckOut[2] + '-' + CheckOut[1] + '-' + CheckOut[0],
    );

    // const guestN = (roomtype.adult + roomtype.children) / roomtype.room;
    // const search = {
    //   key: 'wdad',
    //   guest: guestN.toString(),
    // };
    // navigate({
    //   pathname: '/search',
    //   search: `?${createSearchParams(search)}`,
    // });
  }

  // const test = (e) => {
  //   const keyword = e.target.value;
  //   if (keyword) {
  //     setSearchParams({ keyword });
  //   } else {
  //     setSearchParams({});
  //   }
  // };

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const temp = e.target.value;
    console.log(temp);
    setPhai(temp);
  };

  function handleAdult(x: number) {
    if (x == 1) {
      setRoomtype({ ...roomtype, adult: roomtype.adult + 1 });
    } else {
      if (roomtype.adult > 0) {
        setRoomtype({ ...roomtype, adult: roomtype.adult + -1 });
      } else {
        setRoomtype({ ...roomtype, adult: 0 });
      }
    }
  }
  function handleChildren(x: number) {
    if (x == 1) {
      setRoomtype({ ...roomtype, children: roomtype.children + 1 });
    } else {
      if (roomtype.children > 0) {
        setRoomtype({ ...roomtype, children: roomtype.children - 1 });
      } else {
        setRoomtype({ ...roomtype, children: 0 });
      }
    }
  }

  function handleRoom(x: number) {
    if (x == 1) {
      setRoomtype({ ...roomtype, room: roomtype.room + 1 });
    } else {
      if (roomtype.room > 0) {
        setRoomtype({ ...roomtype, room: roomtype.room - 1 });
      } else {
        setRoomtype({ ...roomtype, room: 0 });
      }
    }
  }

  function buttonClicked() {
    setCustomOpen((prev) => !prev);
  }

  function Menuselect() {
    if (state == 0) {
      return (
        <div className="flex flex-row justify-evenly py-5 shadow-2xl rounded-xl bg-white">
          <button
            className="bg-[#AACEDA] my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]   "
            onClick={() => setState(0)}
          >
            <HomeModernIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ทั้งหมด</p>
          </button>
          <button
            className="bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
            onClick={() => setState(1)}
          >
            <HomeIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ที่พัก</p>
          </button>
          <button
            className="bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
            onClick={() => setState(2)}
          >
            <BuildingStorefrontIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ร้านอาหาร</p>
          </button>
          <button
            className="bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
            onClick={() => setState(3)}
          >
            <FaceSmileIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">กิจกรรม</p>
          </button>
        </div>
      );
    } else if (state == 1) {
      return (
        <div className="flex flex-row justify-evenly py-5 shadow-2xl rounded-xl bg-white">
          <button
            className="bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]   "
            onClick={() => setState(0)}
          >
            <HomeModernIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ทั้งหมด</p>
          </button>
          <button
            className="bg-[#AACEDA]   my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
            onClick={() => setState(1)}
          >
            <HomeIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ที่พัก</p>
          </button>
          <button
            className="bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
            onClick={() => setState(2)}
          >
            <BuildingStorefrontIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ร้านอาหาร</p>
          </button>
          <button
            className="bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
            onClick={() => setState(3)}
          >
            <FaceSmileIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">กิจกรรม</p>
          </button>
        </div>
      );
    } else if (state == 2) {
      return (
        <div className="flex flex-row justify-evenly py-5 shadow-2xl rounded-xl bg-white">
          <button
            className="bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]   "
            onClick={() => setState(0)}
          >
            <HomeModernIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ทั้งหมด</p>
          </button>
          <button
            className="bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
            onClick={() => setState(1)}
          >
            <HomeIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ที่พัก</p>
          </button>
          <button
            className="bg-[#AACEDA] my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
            onClick={() => setState(2)}
          >
            <BuildingStorefrontIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ร้านอาหาร</p>
          </button>
          <button
            className="bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
            onClick={() => setState(3)}
          >
            <FaceSmileIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">กิจกรรม</p>
          </button>
        </div>
      );
    } else if (state == 3) {
      return (
        <div className="flex flex-row justify-evenly py-5 shadow-2xl rounded-xl bg-white">
          <button
            className="bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]   "
            onClick={() => setState(0)}
          >
            <HomeModernIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ทั้งหมด</p>
          </button>
          <button
            className="bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
            onClick={() => setState(1)}
          >
            <HomeIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ที่พัก</p>
          </button>
          <button
            className="bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
            onClick={() => setState(2)}
          >
            <BuildingStorefrontIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ร้านอาหาร</p>
          </button>
          <button
            className="bg-[#AACEDA]   my-auto h-24 w-32 rounded-xl  duration-100 hover:bg-[#AACEDA]"
            onClick={() => setState(3)}
          >
            <FaceSmileIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">กิจกรรม</p>
          </button>
        </div>
      );
    } else {
      return <div>Error. :C</div>;
    }
  }

  function Menuu() {
    if (state == 0) {
      return (
        <div className="py-10 my-10 bg-[#D9D9D9] rounded-xl  shadow-2xl">
          <div className="block">
            <div className="md:hidden">
              <div className="px-8  w-full">
                <div className="bg-white w-full border flex border-slate-300 rounded-lg py-3 shadow-sm sm:text-sm">
                  <MagnifyingGlassIcon className="h-5 w-5 text-[#585858] mx-5 " />
                  <input
                    className="placeholder:italic placeholder:text-[#7e7e7e] text-[15px]  w-full mr-5  focus:outline-none"
                    placeholder="Search for anything..."
                    id="search"
                    type="text"
                    value={phai}
                    onChange={handleText}
                    key={'dwadwadaawdw'}
                  />
                </div>
                <div className=" bg-white flex rounded-md w-full px-3 py-2 my-3 justify-center">
                  <input
                    className="text-[#585858] focus:outline-none text-[15px]  px-2 rounded-md"
                    type="date"
                    id="dayCheckIn"
                    value={dateCheckin}
                    onChange={(event) => setDateCheckin(event.target.value)}
                  />
                  <div className=" border border-[#585858] "></div>
                  <input
                    className="text-[#585858] focus:outline-none text-[15px]  px-2 rounded-md"
                    type="date"
                    id="dayCheckOut"
                    value={dateCheckout}
                    onChange={(event) => setDateCheckout(event.target.value)}
                  ></input>
                </div>

                <div className="bg-white  flex rounded-md w-full justify-center">
                  <Menu>
                    {({ open }) => (
                      <>
                        <div className="flex mx-2">
                          <Menu.Button>
                            <UserIcon className="h-5 w-5 text-[#6D6969] ml-3 mr-3" />
                          </Menu.Button>

                          <div className="flex">
                            <div className="text-[#585858] text-[15px] mr-2  my-2">
                              ผู้ใหญ่ {roomtype.adult} คน
                            </div>
                            <div className=" my-2">,</div>
                            <div className="text-[#585858] text-[15px] mr-3 ml-2 my-2">
                              เด็ก {roomtype.children} คน
                            </div>
                            <div className="border border-[#585858]  mr-3"></div>
                            <div className="text-[#585858] text-[15px]  my-2">
                              {roomtype.room} ห้อง
                            </div>
                          </div>
                        </div>
                        <Menu.Button onClick={buttonClicked}>
                          <ChevronDownIcon className="h-5 w-5 text-[#6D6969] " />
                        </Menu.Button>

                        {customOpen && (
                          <Menu.Items
                            static
                            className="absolute bg-[#4A94AB] rounded-sm py-5 my-[42px] ml-[50px] shadow-slate-600 shadow-2xl text-white"
                          >
                            <div className="flex mx-5 mb-4">
                              <div className="pr-[60px]">ผู้ใหญ่</div>

                              <div className="px-3">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleAdult(0)}
                                    >
                                      <div className="px-2">-</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="bg-[#005A76] rounded-md px-2 ">
                                {roomtype.adult}
                              </div>
                              <div className="px-3 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleAdult(1)}
                                    >
                                      <div className="px-2">+</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>
                            <div className=" border border-[#D9D9D9] mx-5 my-2"></div>
                            <div className="flex bg-[#4A94AB] mx-5 my-4">
                              <div className="pr-[77px]">เด็ก</div>

                              <div className="px-3">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleChildren(0)}
                                    >
                                      <div className="px-2">-</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="bg-[#005A76] rounded-md px-2 ">
                                {roomtype.children}
                              </div>
                              <div className="px-3 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleChildren(1)}
                                    >
                                      <div className="px-2">+</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>
                            <div className=" border border-[#D9D9D9] mx-5 my-4"></div>
                            <div className="flex bg-[#4A94AB] mx-5 ">
                              <div className="pr-[74px]">ห้อง</div>

                              <div className="px-3">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleRoom(0)}
                                    >
                                      <div className="px-2">-</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="bg-[#005A76] rounded-md px-2 ">
                                {roomtype.room}
                              </div>
                              <div className="px-3 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleRoom(1)}
                                    >
                                      <div className="px-2">+</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>

                            <div className="flex justify-center pt-5">
                              <button
                                className="bg-[#005A76] py-2 px-4 rounded-md"
                                onClick={buttonClicked}
                              >
                                ยืนยัน
                              </button>
                            </div>
                          </Menu.Items>
                        )}
                      </>
                    )}
                  </Menu>
                </div>
              </div>
            </div>
            <div className="px-16 hidden md:block">
              <div className="bg-white w-full border flex border-slate-300 rounded-lg py-3  shadow-sm sm:text-sm">
                <MagnifyingGlassIcon className="h-5 w-5 text-[#585858] mx-5 " />
                <input
                  className="placeholder:italic placeholder:text-[#7e7e7e]  w-full mr-5  focus:outline-none"
                  placeholder="Search for anything..."
                  type="text"
                  name="search"
                />
              </div>
              <div className=" my-3 w-full flex justify-between gap-x-5 ">
                <div className=" bg-white flex rounded-md w-full justify-center">
                  <input
                    className="text-[#585858] focus:outline-none   px-2 rounded-md"
                    type="date"
                    id="dayCheckIn"
                    name="dayCheckIn"
                  ></input>
                  <div className=" border border-[#585858] "></div>
                  <input
                    className="text-[#585858] focus:outline-none  px-2 rounded-md"
                    type="date"
                    id="dayCheckIn"
                    name="dayCheckIn"
                  ></input>
                </div>

                <div className="bg-white  flex rounded-md w-full justify-center">
                  <Menu>
                    {({ open }) => (
                      <>
                        <div className="flex">
                          <Menu.Button>
                            <UserIcon className="h-5 w-5 text-[#6D6969]  ml-3 mr-5" />
                          </Menu.Button>

                          <div className="flex ">
                            <div className="text-[#585858]  px-2 my-2">
                              ผู้ใหญ่ {roomtype.adult} คน
                            </div>
                            <div className=" my-2">,</div>
                            <div className="text-[#585858]  pl-2 pr-5 my-2">
                              เด็ก {roomtype.children} คน
                            </div>
                            <div className="border border-[#585858]  "></div>
                            <div className="text-[#585858]  pl-5 my-2">
                              {roomtype.room} ห้อง
                            </div>
                          </div>
                        </div>
                        <Menu.Button onClick={buttonClicked}>
                          <ChevronDownIcon className="h-5 w-5 text-[#6D6969] " />
                        </Menu.Button>

                        {customOpen && (
                          <Menu.Items
                            static
                            className="absolute bg-[#4A94AB] rounded-sm py-5 my-[42px] ml-[112px] shadow-slate-600 shadow-2xl text-white"
                          >
                            <div className="flex mx-5 mb-4">
                              <div className="pr-[60px]">ผู้ใหญ่</div>

                              <div className="px-3">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleAdult(0)}
                                    >
                                      <div className="px-2">-</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="bg-[#005A76] rounded-md px-2 ">
                                {roomtype.adult}
                              </div>
                              <div className="px-3 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleAdult(1)}
                                    >
                                      <div className="px-2">+</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>
                            <div className=" border border-[#D9D9D9] mx-5 my-2"></div>
                            <div className="flex bg-[#4A94AB] mx-5 my-4">
                              <div className="pr-[77px]">เด็ก</div>

                              <div className="px-3">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleChildren(0)}
                                    >
                                      <div className="px-2">-</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="bg-[#005A76] rounded-md px-2 ">
                                {roomtype.children}
                              </div>
                              <div className="px-3 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleChildren(1)}
                                    >
                                      <div className="px-2">+</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>
                            <div className=" border border-[#D9D9D9] mx-5 my-4"></div>
                            <div className="flex bg-[#4A94AB] mx-5 ">
                              <div className="pr-[74px]">ห้อง</div>

                              <div className="px-3">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleRoom(0)}
                                    >
                                      <div className="px-2">-</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="bg-[#005A76] rounded-md px-2 ">
                                {roomtype.room}
                              </div>
                              <div className="px-3 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleRoom(1)}
                                    >
                                      <div className="px-2">+</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>

                            <div className="flex justify-center pt-5">
                              <button
                                className="bg-[#005A76] py-2 px-4 rounded-md"
                                onClick={buttonClicked}
                              >
                                ยืนยัน
                              </button>
                            </div>
                          </Menu.Items>
                        )}
                      </>
                    )}
                  </Menu>
                </div>
              </div>
            </div>
          </div>
          <button
            className="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-10 mt-4    rounded font-kanit  "
            onClick={test}
            type="button"
          >
            ค้นหา
          </button>
        </div>
      );
    } else if (state == 1) {
      return (
        <div className="py-10 my-10 bg-[#D9D9D9] rounded-xl  shadow-2xl">
          <div className="block">
            <div className="md:hidden">
              <div className="px-8  w-full">
                <div className="bg-white w-full border flex border-slate-300 rounded-lg py-3 shadow-sm sm:text-sm">
                  <MagnifyingGlassIcon className="h-5 w-5 text-[#585858] mx-5 " />
                  <input
                    className="placeholder:italic placeholder:text-[#7e7e7e] text-[15px]  w-full mr-5  focus:outline-none"
                    placeholder="Search for anything..."
                    type="text"
                    name="search"
                  />
                </div>
                <div className=" bg-white flex rounded-md w-full px-3 py-2 my-3 justify-center">
                  <input
                    className="text-[#585858] focus:outline-none text-[15px]  px-2 rounded-md"
                    type="date"
                    id="dayCheckIn"
                    name="dayCheckIn"
                  ></input>
                  <div className=" border border-[#585858] "></div>
                  <input
                    className="text-[#585858] focus:outline-none text-[15px]  px-2 rounded-md"
                    type="date"
                    id="dayCheckIn"
                    name="dayCheckIn"
                  ></input>
                </div>

                <div className="bg-white  flex rounded-md w-full justify-center">
                  <Menu>
                    {({ open }) => (
                      <>
                        <div className="flex mx-2">
                          <Menu.Button>
                            <UserIcon className="h-5 w-5 text-[#6D6969] ml-3 mr-3" />
                          </Menu.Button>

                          <div className="flex">
                            <div className="text-[#585858] text-[15px] mr-2  my-2">
                              ผู้ใหญ่ {roomtype.adult} คน
                            </div>
                            <div className=" my-2">,</div>
                            <div className="text-[#585858] text-[15px] mr-3 ml-2 my-2">
                              เด็ก {roomtype.children} คน
                            </div>
                            <div className="border border-[#585858]  mr-3"></div>
                            <div className="text-[#585858] text-[15px]  my-2">
                              {roomtype.room} ห้อง
                            </div>
                          </div>
                        </div>
                        <Menu.Button onClick={buttonClicked}>
                          <ChevronDownIcon className="h-5 w-5 text-[#6D6969]" />
                        </Menu.Button>

                        {customOpen && (
                          <Menu.Items
                            static
                            className="absolute bg-[#4A94AB] rounded-sm py-5 my-[42px] ml-[50px] shadow-slate-600 shadow-2xl text-white"
                          >
                            <div className="flex mx-5 mb-4">
                              <div className="pr-[60px]">ผู้ใหญ่</div>

                              <div className="px-3">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleAdult(0)}
                                    >
                                      <div className="px-2">-</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="bg-[#005A76] rounded-md px-2 ">
                                {roomtype.adult}
                              </div>
                              <div className="px-3 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleAdult(1)}
                                    >
                                      <div className="px-2">+</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>
                            <div className=" border border-[#D9D9D9] mx-5 my-2"></div>
                            <div className="flex bg-[#4A94AB] mx-5 my-4">
                              <div className="pr-[77px]">เด็ก</div>

                              <div className="px-3">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleChildren(0)}
                                    >
                                      <div className="px-2">-</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="bg-[#005A76] rounded-md px-2 ">
                                {roomtype.children}
                              </div>
                              <div className="px-3 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleChildren(1)}
                                    >
                                      <div className="px-2">+</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>
                            <div className=" border border-[#D9D9D9] mx-5 my-4"></div>
                            <div className="flex bg-[#4A94AB] mx-5 ">
                              <div className="pr-[74px]">ห้อง</div>

                              <div className="px-3">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleRoom(0)}
                                    >
                                      <div className="px-2">-</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="bg-[#005A76] rounded-md px-2 ">
                                {roomtype.room}
                              </div>
                              <div className="px-3 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleRoom(1)}
                                    >
                                      <div className="px-2">+</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>

                            <div className="flex justify-center pt-5">
                              <button
                                className="bg-[#005A76] py-2 px-4 rounded-md"
                                onClick={buttonClicked}
                              >
                                ยืนยัน
                              </button>
                            </div>
                          </Menu.Items>
                        )}
                      </>
                    )}
                  </Menu>
                </div>
              </div>
            </div>
            <div className="px-16 hidden md:block">
              <div className="bg-white w-full border flex border-slate-300 rounded-lg py-3  shadow-sm sm:text-sm">
                <MagnifyingGlassIcon className="h-5 w-5 text-[#585858] mx-5 " />
                <input
                  className="placeholder:italic placeholder:text-[#7e7e7e]  w-full mr-5  focus:outline-none"
                  placeholder="Search for anything..."
                  type="text"
                  name="search"
                />
              </div>
              <div className=" my-3 w-full flex justify-between gap-x-5 ">
                <div className=" bg-white flex rounded-md w-full justify-center">
                  <input
                    className="text-[#585858] focus:outline-none   px-2 rounded-md"
                    type="date"
                    id="dayCheckIn"
                    name="dayCheckIn"
                  ></input>
                  <div className=" border border-[#585858] "></div>
                  <input
                    className="text-[#585858] focus:outline-none  px-2 rounded-md"
                    type="date"
                    id="dayCheckIn"
                    name="dayCheckIn"
                  ></input>
                </div>

                <div className="bg-white  flex rounded-md w-full justify-center">
                  <Menu>
                    {({ open }) => (
                      <>
                        <div className="flex">
                          <Menu.Button>
                            <UserIcon className="h-5 w-5 text-[#6D6969]  ml-3 mr-5" />
                          </Menu.Button>

                          <div className="flex ">
                            <div className="text-[#585858]  px-2 my-2">
                              ผู้ใหญ่ {roomtype.adult} คน
                            </div>
                            <div className=" my-2">,</div>
                            <div className="text-[#585858]  pl-2 pr-5 my-2">
                              เด็ก {roomtype.children} คน
                            </div>
                            <div className="border border-[#585858]  "></div>
                            <div className="text-[#585858]  pl-5 my-2">
                              {roomtype.room} ห้อง
                            </div>
                          </div>
                        </div>
                        <Menu.Button onClick={buttonClicked}>
                          <ChevronDownIcon className="h-5 w-5 text-[#6D6969] " />
                        </Menu.Button>

                        {customOpen && (
                          <Menu.Items
                            static
                            className="absolute bg-[#4A94AB] rounded-sm py-5 my-[42px] ml-[112px] shadow-slate-600 shadow-2xl text-white"
                          >
                            <div className="flex mx-5 mb-4">
                              <div className="pr-[60px]">ผู้ใหญ่</div>

                              <div className="px-3">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleAdult(0)}
                                    >
                                      <div className="px-2">-</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="bg-[#005A76] rounded-md px-2 ">
                                {roomtype.adult}
                              </div>
                              <div className="px-3 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleAdult(1)}
                                    >
                                      <div className="px-2">+</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>
                            <div className=" border border-[#D9D9D9] mx-5 my-2"></div>
                            <div className="flex bg-[#4A94AB] mx-5 my-4">
                              <div className="pr-[77px]">เด็ก</div>

                              <div className="px-3">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleChildren(0)}
                                    >
                                      <div className="px-2">-</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="bg-[#005A76] rounded-md px-2 ">
                                {roomtype.children}
                              </div>
                              <div className="px-3 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleChildren(1)}
                                    >
                                      <div className="px-2">+</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>
                            <div className=" border border-[#D9D9D9] mx-5 my-4"></div>
                            <div className="flex bg-[#4A94AB] mx-5 ">
                              <div className="pr-[74px]">ห้อง</div>

                              <div className="px-3">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleRoom(0)}
                                    >
                                      <div className="px-2">-</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="bg-[#005A76] rounded-md px-2 ">
                                {roomtype.room}
                              </div>
                              <div className="px-3 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active && 'bg-[#005A76] rounded-md'
                                      }`}
                                      onClick={() => handleRoom(1)}
                                    >
                                      <div className="px-2">+</div>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>

                            <div className="flex justify-center pt-5">
                              <button
                                className="bg-[#005A76] py-2 px-4 rounded-md"
                                onClick={buttonClicked}
                              >
                                ยืนยัน
                              </button>
                            </div>
                          </Menu.Items>
                        )}
                      </>
                    )}
                  </Menu>
                </div>
              </div>
            </div>
          </div>
          <button
            className="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-10 mt-4    rounded font-kanit  "
            onClick={test}
            type="button"
          >
            ค้นหา
          </button>
        </div>
      );
    } else if (state == 2) {
      return (
        <div className="py-10 my-10 bg-[#D9D9D9] mx-auto  rounded-xl shadow-2xl">
          <form className="px-16">
            <div className="bg-white w-full border flex border-slate-300 rounded-lg py-3 shadow-sm sm:text-sm">
              <MagnifyingGlassIcon className="h-5 w-5 text-[#585858] mx-5 " />
              <input
                className="placeholder:italic placeholder:text-[#7e7e7e]  w-full mr-5  focus:outline-none"
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
            </div>

            <button
              className="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-10 mt-4  rounded font-kanit  "
              onClick={test}
              type="button"
            >
              ค้นหาร้านอาหาร
            </button>
          </form>
        </div>
      );
    } else if (state == 3) {
      return (
        <div className="py-10 my-10 bg-[#D9D9D9] mx-auto  rounded-xl shadow-2xl">
          <form className="px-16">
            <div className="bg-white w-full border flex border-slate-300 rounded-lg py-3 shadow-sm sm:text-sm">
              <MagnifyingGlassIcon className="h-5 w-5 text-[#585858] mx-5 " />
              <input
                className="placeholder:italic placeholder:text-[#7e7e7e]  w-full mr-5  focus:outline-none"
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
            </div>

            <button
              className="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-10 mt-4  rounded font-kanit  "
              onClick={test}
              type="button"
            >
              ค้นหากิจกรรม
            </button>
          </form>
        </div>
      );
    } else {
      return <div className=" text-center mt-32">Error. :C</div>;
    }
  }
  return (
    <div className="pt-[120px] md:mx-[300px] xs:mx-8 ">
      <div>
        <img
          className="object-cover mx-auto w-full px-0 md:px-20"
          src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>

      <div className="mt-10">
        <Menuselect />
      </div>
      <Menuu />
      <Topotown />
    </div>
  );
}

export default Main;
