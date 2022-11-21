import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaAngleRight } from 'react-icons/fa';

import apiClient from '../../api/apiClient';
import config from '../../config.json';
import hotel from './Hotel';

function Search() {
  const [searchParams] = useSearchParams();
  let show = 0;
  const searchKey = searchParams.get('key');
  const searchGuest = searchParams.get('guest');
  const checkIn = searchParams.get('checkin');
  const checkOut = searchParams.get('checkout');
  const room = searchParams.get('room');

  const [items, setItems] = useState<any>({
    hotels: [
      {
        id: '637b8bf80d570d6712626f1f',
        isAvailable: true,
        name: 'error',
        email: 'Makasan@gmail.com',
        phone: '0954785214',
        address: '255/90',
        about: 'string',
        mapURL: 'map.url',
        ownerID: '6378ca0a297675a2b1863c5d',
        locationType: {
          isHotel: true,
          isRestaurant: true,
          isTravel: true,
        },
        picture: [],
        price: 9000,
        discount: 0,
        rating: 5,
        review: 0,
        room: ['637b8c2c0d570d6712626f21', '637b8c300d570d6712626f22'],
        comments: [],
      },
    ],
  });

  useEffect(() => {
    const getAll = async () => {
      const res = await apiClient(`${config.api_url.localHost}/Hotel`, {
        method: 'GET',
      });
      show = 0;
      console.log('get', res.data);
      hotelFitter(searchKey, checkIn, checkOut, room, searchGuest, res.data);
    };
    getAll();
  }, []);

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

  const getRoom = async (Roomid: any) => {
    const res = await apiClient(
      `${config.api_url.localHost}/Room/getroom/${Roomid}`,
      {
        method: 'GET',
      },
    );
    // console.log(res.data);
    return res.data;
  };

  const hotelFitter = async (
    searchKey: any,
    checkIn: any,
    checkOut: any,
    room: any,
    guest: any,
    hotelCheck: any,
  ) => {
    for (let i = 0; i < hotelCheck.hotels.length; i++) {
      let isHotelAvalible = false;
      for (let j = 0; j < hotelCheck.hotels[i].room.length; j++) {
        const roomCheck = await getRoom(hotelCheck.hotels[i].room[j]);
        let Checking = false;
        console.log(hotelCheck.hotels[i].name, searchKey);
        if (
          hotelCheck.hotels[i].room[j] != null &&
          roomCheck.guest >= guest &&
          (hotelCheck.hotels[i].name.includes(searchKey) ||
            hotelCheck.hotels[i].about.includes(searchKey) ||
            hotelCheck.hotels[i].address.includes(searchKey))
        ) {
          for (const data of roomCheck.roomCount30Day) {
            if (checkIn.replaceAll('-', '') == data.date.replaceAll('/', '')) {
              Checking = true;
              if (Number(data.count) >= Number(room)) {
                isHotelAvalible = true;
              } else {
                isHotelAvalible = false;
                break;
              }
            } else if (
              checkOut.replaceAll('-', '') == data.date.replaceAll('/', '')
            ) {
              Checking = false;
              if (Number(data.count) >= Number(room)) {
                isHotelAvalible = true;
                break;
              } else {
                isHotelAvalible = false;
                break;
              }
            } else if (Checking == true) {
              //console.log('check:', Number(data.date.replaceAll('/', '')));
              if (Number(data.count) >= Number(room)) {
                isHotelAvalible = true;
              } else {
                isHotelAvalible = false;
                break;
              }
            }
          }
        }
      }
      if (isHotelAvalible == false) {
        delete hotelCheck.hotels[i];
      }
    }
    setItems(hotelCheck);
  };

  return (
    <div className="pt-24">
      <div className="mx-8 md:mx-52 my-6 border-2 rounded-xl shadow-md grid grid-cols-5">
        <div className="w-full py-5">
          <p className="text-center font-kanit">เรียงผลตาม</p>
        </div>
        <button className="w-full py-5 rounded-xl hover:bg-[#AACEDA] focus:bg-[#AACEDA] text-center font-kanit">
          ที่พักแนะนำตรงใจ
        </button>
        <button className="w-full py-5 rounded-xl hover:bg-[#AACEDA] focus:bg-[#AACEDA] text-center font-kanit">
          คะแนนรีวิวดีที่สุด
        </button>
        <button className="w-full py-5 rounded-xl hover:bg-[#AACEDA] focus:bg-[#AACEDA] text-center font-kanit">
          ราคาต่ำที่สุด
        </button>
        <button className="w-full py-5 rounded-xl hover:bg-[#AACEDA] focus:bg-[#AACEDA] text-center font-kanit">
          ระยะทางใกล้ที่สุด
        </button>
      </div>

      <div className="search-post">
        {items.hotels.map((data: any, key: any) => {
          return (
            <div className="mx-8 mb-4 md:mx-52 ">
              <div className="border-2 rounded-xl shadow-md  ">
                <div key={key}>
                  <div className="grid grid-cols-4 grid-flow-row">
                    <img
                      //src={config.api_url.imgHost + data.picture[0]}
                      src="https://img.redbull.com/images/c_crop,x_982,y_0,h_2133,w_1280/c_fill,w_400,h_660/q_auto,f_auto/redbullcom/2022/6/7/ay947dlkelia2kvgkstd/michaela-mimi-lintrup-portrait"
                      className=" w-[390px] h-72 object-cover "
                    />
                    <div className="col-span-2 p-5">
                      <p className="font-kanit text-4xl">{data.name}</p>
                      <div className="flex">
                        <FaMapMarkerAlt className="text-blue-700 min-w-[16px] mr-[5px]" />
                        <p className="font-kanit text-1xl text-blue-700">
                          {data.address}
                        </p>
                      </div>
                      <p className="font-kanit text-1xl text-gray-500">
                        {data.about}
                      </p>
                    </div>
                    <div className="grid grid-flow-rows grid-rows-6 p-5 border-l border-[#D8D8D8]">
                      <div className="flex justify-end">
                        {Star(data.rating).map((s: number, i) => {
                          return s ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#EDEA10"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="#EDEA10 "
                              className="md:w-8 w-4 md:h-8 h-4"
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
                              className="md:w-8 w-4 md:h-8 h-4"
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
                      <div className="font-kanit text-1xl row-span-1 text-right ml-28 text-gray-500">
                        {data.review} รีวิว
                      </div>
                      <div className="font-kanit text-1xl row-span-1  ml-28 bg-red-500 text-center my-auto text-white ">
                        {data.discount > 0 ? (
                          <div>SALE ! ลด {data.discount}% วันนี้</div>
                        ) : (
                          ''
                        )}
                      </div>
                      <div className="font-kanit text-1xl row-span-2 text-right ml-28 ">
                        <div>ราคาเริ่มต้น (ต่อคืน)</div>
                        <div className="text-red-500 text-[30px] font-bold">
                          ฿ {data.price}
                        </div>
                      </div>
                      <button className="font-kanit bg-blue-500 hover:bg-blue-700 row-span-1  text-white font-bold rounded">
                        รายระเอียดเพิ่มเติม
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* {show <= 0 ? (
          <div className="mx-8 md:mx-52 font-kanit text-[100px] text-center my-32 text-gray-600">
            หามะเจอ :C
          </div>
        ) : (
          ''
        )} */}
      </div>
    </div>
  );
}

export default Search;
