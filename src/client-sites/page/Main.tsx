import React from 'react';
import { HomeModernIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { HomeIcon } from '@heroicons/react/20/solid';
import { BuildingStorefrontIcon } from '@heroicons/react/20/solid';
import { FaceSmileIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import Topotown from '../components/topTown';
import { Menu } from '@headlessui/react';
// useEffect,
function Main() {
  const [state, setState] = useState(0);
  const [roomtype, setRoomtype] = useState({ adult: 0, children: 0, room: 0 });

  const [customOpen, setCustomOpen] = useState(false);

  function test() {
    console.log(roomtype);
    setRoomtype({ adult: 0, children: 0, room: 0 });
  }

  function handleAdultplus() {
    setRoomtype({ ...roomtype, adult: roomtype.adult + 1 });
  }
  function handleChildrenplus() {
    setRoomtype({ ...roomtype, children: roomtype.children + 1 });
  }
  function handleRoomplus() {
    setRoomtype({ ...roomtype, room: roomtype.room + 1 });
  }
  function buttonClicked() {
    setCustomOpen((prev) => !prev);
  }
  function Menuselect() {
    if (state == 0) {
      return (
        <div className="flex flex-row justify-evenly py-5 shadow-2xl rounded-xl bg-white">
          <button
            className="bg-white  my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]   "
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
            className="bg-bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]   "
            onClick={() => setState(0)}
          >
            <HomeModernIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ทั้งหมด</p>
          </button>
          <button
            className="bg-bg-white  my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
            onClick={() => setState(1)}
          >
            <HomeIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ที่พัก</p>
          </button>
          <button
            className="bg-bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
            onClick={() => setState(2)}
          >
            <BuildingStorefrontIcon className="h-9 w-9 text-gray-800 mx-auto " />
            <p className="font-kanit">ร้านอาหาร</p>
          </button>
          <button
            className="bg-bg-white my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
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
            className="bg-white  my-auto h-24 w-32 rounded-xl duration-100 hover:bg-[#AACEDA]"
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
                className="placeholder:italic placeholder:text-slate-400  w-full mr-5  focus:outline-none"
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
            </div>

            <div className="flex flex-row my-5 ">
              <div className="bg-white py-2 px-5 flex rounded-md">
                <div>
                  <input
                    className="text-[#585858]"
                    type="date"
                    id="dayCheckIn"
                    name="dayCheckIn"
                  ></input>
                </div>

                <div className="px-5 text-[#585858]">|</div>
                <div className="bg-[#585858]">
                  <input
                    className="text-[#585858]"
                    type="date"
                    id="dayCheckOut"
                    name="dayCheckOut"
                  ></input>
                </div>
              </div>
              <div>
                <Menu>
                  {({ open }) => (
                    <>
                      <Menu.Button onClick={buttonClicked}>
                        adult{roomtype.adult}
                        children{roomtype.children}
                        room{roomtype.room}
                      </Menu.Button>
                      {customOpen && (
                        <Menu.Items static className="flex flex-col absolute ">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${active && 'bg-blue-500'}`}
                                onClick={handleAdultplus}
                              >
                                adult{roomtype.adult}+
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${active && 'bg-blue-500'} `}
                                onClick={handleChildrenplus}
                              >
                                children{roomtype.children}+
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${active && 'bg-blue-500'}`}
                                onClick={handleRoomplus}
                              >
                                room{roomtype.room}+
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      )}
                    </>
                  )}
                </Menu>
              </div>
            </div>

            <button
              className="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mt-4  rounded font-kanit  "
              onClick={test}
            >
              ค้นหา
            </button>
          </form>
        </div>
      );
    } else if (state == 1) {
      return (
        <div className="pt-10 pb-4 mb-4 mt-8 bg-gray-300 mx-auto w-[900px] rounded-xl shadow-2xl">
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
            <button className="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-4  rounded font-kanit ">
              ค้นหาโรงแรม
            </button>
          </form>
        </div>
      );
    } else if (state == 2) {
      return (
        <div className="pt-10 pb-4 mb-4 mt-8 bg-gray-300 mx-auto w-[900px] rounded-xl shadow-2xl">
          <form className="px-16">
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border  border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
            <button className="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-4  rounded font-kanit ">
              ค้นหาร้านอาหาร
            </button>
          </form>
        </div>
      );
    } else if (state == 3) {
      return (
        <div className="pt-10 pb-4 mb-4 mt-8 bg-gray-300 mx-auto w-[900px] rounded-xl shadow-2xl">
          <form className="px-16">
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border  border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
            <button className="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-4  rounded font-kanit ">
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
