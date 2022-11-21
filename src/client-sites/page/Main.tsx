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
import { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react';
import apiClient from '../../api/apiClient';
import config from '../../config.json';
import { useNavigate, createSearchParams } from 'react-router-dom';

function Main() {
  const [state, setState] = useState(0);

  const navigate = useNavigate();
  const [customOpen, setCustomOpen] = useState(false);

  const [search, setSearch] = useState('');

  const [dateCheckin, setDateCheckin] = useState('');
  const [dateCheckout, setDateCheckout] = useState('');
  const [roomtype, setRoomtype] = useState({ adult: 1, children: 0, room: 1 });

  const Star = (n: number) => {
    const arr = new Array(5);
    for (let i = 1; i <= 5; i++) {
      let str = 0;
      if (i <= n) {
        str = 1;
      }
      arr[i] = str;
    }
    return arr;
  };

  function test() {
    console.log('Search : ' + search);
    console.log('Roomtype : ' + JSON.stringify(roomtype));
    const tempIn = dateCheckin.split('-');
    const tempOut = dateCheckout.split('-');

    const guestN = (roomtype.adult + roomtype.children) / roomtype.room;
    const Search = {
      key: search,
      guest: guestN.toString(),
      room: roomtype.room.toString(),
      checkin: tempIn[2] + '-' + tempIn[1] + '-' + tempIn[0],
      checkout: tempOut[2] + '-' + tempOut[1] + '-' + tempOut[0],
    };
    navigate({
      pathname: '/search',
      search: `?${createSearchParams(Search)}`,
    });
  }
  const [items, setItems] = useState({
    hotels: [
      {
        id: '637a46251a451ba0de2dd734',
        isAvailable: true,
        name: 'Test1 Hotel',
        email: 'test1@gmail.com',
        phone: '0111111111',
        address: '11/11 11 Bankok Kanbob 21111',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem elit, iaculis sit amet semper id, feugiat id lectus. Maecenas mattis vestibulum lacinia. Integer sollicitudin justo eu venenatis viverra. Nunc sed urna sagittis metus laoreet sodales eu et odio. Cras posuere feugiat orci, nec pretium nisl ultricies sit amet. Aenean facilisis laoreet diam vitae fermentum. Phasellus vitae ipsum sit amet lectus volutpat ullamcorper vel at lectus. Integer tincidunt ultrices est, quis vulputate ante iaculis eu. Praesent consectetur elit id sem hendrerit porta. Ut id placerat arcu.',
        mapURL: 'https://somethingMap.com',
        ownerID: '6378ca0a297675a2b1863c5d',
        locationType: {
          isHotel: true,
          isRestaurant: true,
          isTravel: true,
        },
        picture: ['string'],
        rating: 0,
        review: 0,
        comments: [],
      },
    ],
  });

  useEffect(() => {
    const getAll = async () => {
      const res = await apiClient(`${config.api_url.localHost}/Hotel`, {
        method: 'GET',
      });
      console.log(res.data.hotels);
      setItems(res.data);
    };
    getAll();
  }, []);

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = e.target.value;
    // console.log(temp);
    setSearch(temp);
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
                    value={search}
                    autoFocus
                    onChange={handleText}
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
                  id="search"
                  type="text"
                  value={search}
                  autoFocus
                  onChange={handleText}
                />
              </div>
              <div className=" my-3 w-full flex justify-between gap-x-5 ">
                <div className=" bg-white flex rounded-md w-full justify-center">
                  <input
                    className="text-[#585858] focus:outline-none   px-2 rounded-md"
                    type="date"
                    id="dayCheckIn"
                    value={dateCheckin}
                    onChange={(event) => setDateCheckin(event.target.value)}
                  ></input>
                  <div className=" border border-[#585858] "></div>
                  <input
                    className="text-[#585858] focus:outline-none  px-2 rounded-md"
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
                    id="search"
                    type="text"
                    value={search}
                    autoFocus
                    onChange={handleText}
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
                  id="search"
                  type="text"
                  value={search}
                  autoFocus
                  onChange={handleText}
                />
              </div>
              <div className=" my-3 w-full flex justify-between gap-x-5 ">
                <div className=" bg-white flex rounded-md w-full justify-center">
                  <input
                    className="text-[#585858] focus:outline-none   px-2 rounded-md"
                    type="date"
                    id="dayCheckIn"
                    value={dateCheckin}
                    onChange={(event) => setDateCheckin(event.target.value)}
                  ></input>
                  <div className=" border border-[#585858] "></div>
                  <input
                    className="text-[#585858] focus:outline-none  px-2 rounded-md"
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
                value={search}
                autoFocus
                onChange={handleText}
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
                value={search}
                autoFocus
                onChange={handleText}
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
    <div className="pt-[120px]  md:mx-[15%]">
      <div>
        <img
          className="object-cover mx-auto w-full px-0 m"
          src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>

      <div className="mt-10">
        <Menuselect />
      </div>
      <Menuu />
      <div>
        {items.hotels.map((data) => {
          return (
            <div className="mb-4">
              <div className="border-2 rounded-xl shadow-md">
                <div>
                  <div className="grid grid-cols-4 grid-flow-row">
                    <img
                      // src={config.api_url.imgHost + data.picture[0]}
                      src="https://img.redbull.com/images/c_crop,x_982,y_0,h_2133,w_1280/c_fill,w_400,h_660/q_auto,f_auto/redbullcom/2022/6/7/ay947dlkelia2kvgkstd/michaela-mimi-lintrup-portrait"
                      className=" w-[390px] object-cover rounded-l-xl"
                    />
                    <div className="col-span-2 p-2 md:p-5 lg:p-5 xl:p-5">
                      <p className="font-kanit md:text-4xl">{data.name}</p>
                      <div className="flex">
                        <p className="font-kanit text-sm md:text-lg lg:text-lg xl:text-lg text-blue-700">
                          {data.address}
                        </p>
                      </div>
                      <p className="font-kanit text-sm md:text-lg lg:text-lg xl:text-lg text-gray-500 truncate">
                        {data.about}
                      </p>
                    </div>
                    <div className="grid grid-flow-rows md:grid-rows-6 lg:grid-rows-6 xl:grid-rows-6 p-2 md:p-5 lg:p-5 xl:p-5 border-l border-[#D8D8D8]">
                      <div className="flex justify-end">
                        {Star(data.rating).map((s: number, i) => {
                          return s ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#EDEA10"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="#EDEA10 "
                              className=""
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="#EDEA10 "
                              className=""
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          );
                        })}
                      </div>
                      <div className="font-kanit text-sm md:text-lg lg:text-lg xl:text-lg md:row-span-1 lg:row-span-1 xl:row-span-1 text-right">
                        {data.review} รีวิว
                      </div>
                      <div className="font-kanit text-sm md:text-lg lg:text-lg xl:text-lg md:row-span-1 lg:row-span-1 xl:row-span-1  md:ml-28 bg-red-500 text-right my-auto text-white ">
                        {/* {data.discount > 0 ? (
                          <div>SALE ! ลด {data.discount}% วันนี้</div>
                        ) : (
                          ''
                        )} */}
                      </div>
                      <div className="font-kanit text-sm md:text-lg lg:text-lg xl:text-lg md:row-span-2 lg:row-span-12 xl:row-span-2 text-right">
                        <div>ราคาเริ่มต้น (ต่อคืน)</div>
                        <div className="text-red-500 md:text-[30px] lg:text-[30px] xl:text-[30px] font-bold">
                          ฿ 2000
                        </div>
                      </div>
                      <button className="font-kanit bg-blue-500 hover:bg-blue-700 text-sm md:row-span-1 lg:row-span-1 xl:row-span-1 md:text-lg lg:text-lg xl:text-lg text-white font-bold rounded">
                        รายระเอียดเพิ่มเติม
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
