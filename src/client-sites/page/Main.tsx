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

import { useNavigate, createSearchParams } from 'react-router-dom';

// useEffect,
function Main() {
  const [state, setState] = useState(0);
  const [roomtype, setRoomtype] = useState({ adult: 1, children: 0, room: 1 });
  const navigate = useNavigate();
  const [customOpen, setCustomOpen] = useState(false);
  const [value, setValue] = useState('');

  function test() {
    const guestN = (roomtype.adult + roomtype.children) / roomtype.room;
    const search = {
      key: value,
      guest: guestN.toString(),
    };
    navigate({
      pathname: '/search',
      search: `?${createSearchParams(search)}`,
    });
    // navigate('/search', { state: { id: 1, name: 'sabaoon' } });
  }

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
            className="bg-[#AACEDA]  my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]   "
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
        <div className="py-10 my-10 bg-[#D9D9D9] mx-auto w-[900px] rounded-xl shadow-2xl">
          <form className="px-16">
            <div className="bg-white w-full border flex border-slate-300 rounded-lg py-3 shadow-sm sm:text-sm">
              <MagnifyingGlassIcon className="h-5 w-5 text-[#585858] mx-5 " />
              <input
                className="placeholder:italic placeholder:text-[#7e7e7e]  w-full mr-5  focus:outline-none"
                placeholder="Search for anything..."
                type="text"
                name="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <div className="flex flex-row my-3 justify-between">
              <div className="bg-white px-5 my-3 flex rounded-md">
                <div className="mt-[9px]">
                  <input
                    className="text-[#585858] focus:outline-none"
                    type="date"
                    id="dayCheckIn"
                    name="dayCheckIn"
                  ></input>
                </div>

                <div className=" border border-[#585858] mx-5 my-2"></div>
                <div className="mt-[9px]">
                  <input
                    className="text-[#585858] focus:outline-none"
                    type="date"
                    id="dayCheckOut"
                    name="dayCheckOut"
                  ></input>
                </div>
              </div>
              <div className="bg-white px-5 my-3 flex rounded-md">
                <Menu>
                  {({ open }) => (
                    <>
                      <div className="flex py-2">
                        <UserIcon className="h-5 w-5 text-[#6D6969] mx-2 my-1" />
                        <div className="flex mt-[2px]">
                          <div className="text-[#585858] ml-8 mr-2">
                            ผู้ใหญ่ {roomtype.adult} คน
                          </div>
                          <div>,</div>
                          <div className="text-[#585858] ml-2 mr-5">
                            เด็ก {roomtype.children} คน
                          </div>
                          <div className="border border-[#585858]"></div>
                          <div className="text-[#585858] mx-5">
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
            <button
              className="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-10 mt-4    rounded font-kanit  "
              onClick={test}
              type="button"
            >
              ค้นหา
            </button>
          </form>
        </div>
      );
    } else if (state == 1) {
      return (
        <div className="py-10 my-10 bg-[#D9D9D9] mx-auto w-[900px] rounded-xl shadow-2xl">
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

            <div className="flex flex-row my-3 justify-between">
              <div className="bg-white px-5 my-3 flex rounded-md">
                <div className="mt-[9px]">
                  <input
                    className="text-[#585858] focus:outline-none"
                    type="date"
                    id="dayCheckIn"
                    name="dayCheckIn"
                  ></input>
                </div>

                <div className=" border border-[#585858] mx-5 my-2"></div>
                <div className="mt-[9px]">
                  <input
                    className="text-[#585858] focus:outline-none"
                    type="date"
                    id="dayCheckOut"
                    name="dayCheckOut"
                  ></input>
                </div>
              </div>
              <div className="bg-white px-5 my-3 flex rounded-md">
                <Menu>
                  {({ open }) => (
                    <>
                      <div className="flex py-2">
                        <UserIcon className="h-5 w-5 text-[#6D6969] mx-2 my-1" />
                        <div className="flex mt-[2px]">
                          <div className="text-[#585858] ml-8 mr-2">
                            ผู้ใหญ่ {roomtype.adult} คน
                          </div>
                          <div>,</div>
                          <div className="text-[#585858] ml-2 mr-5">
                            เด็ก {roomtype.children} คน
                          </div>
                          <div className="border border-[#585858]"></div>
                          <div className="text-[#585858] mx-5">
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
                              type="button"
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

            <button
              className="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-10 mt-4  rounded font-kanit  "
              onClick={test}
              type="button"
            >
              ค้นหา
            </button>
          </form>
        </div>
      );
    } else if (state == 2) {
      return (
        <div className="py-10 my-10 bg-[#D9D9D9] mx-auto w-[900px] rounded-xl shadow-2xl">
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
        <div className="py-10 my-10 bg-[#D9D9D9] mx-auto w-[900px] rounded-xl shadow-2xl">
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
    <div className="pt-24 ">
      <div className="pt-12  ">
        <img
          className="object-cover object-left-top h-[350px] mx-auto w-[900px] "
          src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="mx-auto w-[900px] ">
          <Menuselect />
        </div>
      </div>
      <Menuu />
      <Topotown />
    </div>
  );
}

export default Main;
