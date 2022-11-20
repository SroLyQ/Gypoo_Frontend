import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaAngleRight } from 'react-icons/fa';

import apiClient from '../../api/apiClient';
import config from '../../config.json';

function Search() {
  const [searchParams] = useSearchParams();

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
        price: 500,
        discount: 0,
        rating: 0,
        review: 0,
        room: [
          {
            idRoom: '637a470d1a451ba0de2dd739',
            roomType: 'L',
            guest: 4,
            roomCount: 0,
            currentRoom: 0,
            picture: ['kRoomPic'],
            roomPrice: 500,
            roomCount30Day: [
              {
                date: '20/11/2022',
                count: 0,
              },
              {
                date: '21/11/2022',
                count: 0,
              },
              {
                date: '22/11/2022',
                count: 0,
              },
              {
                date: '23/11/2022',
                count: 0,
              },
              {
                date: '24/11/2022',
                count: 0,
              },
              {
                date: '25/11/2022',
                count: 0,
              },
              {
                date: '26/11/2022',
                count: 0,
              },
              {
                date: '27/11/2022',
                count: 0,
              },
              {
                date: '28/11/2022',
                count: 0,
              },
              {
                date: '29/11/2022',
                count: 0,
              },
              {
                date: '30/11/2022',
                count: 0,
              },
              {
                date: '01/12/2022',
                count: 0,
              },
              {
                date: '02/12/2022',
                count: 0,
              },
              {
                date: '03/12/2022',
                count: 0,
              },
              {
                date: '04/12/2022',
                count: 0,
              },
              {
                date: '05/12/2022',
                count: 0,
              },
              {
                date: '06/12/2022',
                count: 0,
              },
              {
                date: '07/12/2022',
                count: 0,
              },
              {
                date: '08/12/2022',
                count: 0,
              },
              {
                date: '09/12/2022',
                count: 0,
              },
              {
                date: '10/12/2022',
                count: 0,
              },
              {
                date: '11/12/2022',
                count: 0,
              },
              {
                date: '12/12/2022',
                count: 0,
              },
              {
                date: '13/12/2022',
                count: 0,
              },
              {
                date: '14/12/2022',
                count: 0,
              },
              {
                date: '15/12/2022',
                count: 0,
              },
              {
                date: '16/12/2022',
                count: 0,
              },
              {
                date: '17/12/2022',
                count: 0,
              },
              {
                date: '18/12/2022',
                count: 0,
              },
              {
                date: '19/12/2022',
                count: 0,
              },
            ],
            service: {
              isWifi: true,
              isParking: true,
              isAnimals: true,
              isBreakFast: true,
              isBuffet: true,
              isOther: true,
            },
          },
        ],
        comments: [],
      },
    ],
  });

  useEffect(() => {
    const getAll = async () => {
      const res = await apiClient(`${config.api_url.localHost}/Hotel`, {
        method: 'GET',
      });
      console.log(res.data);
      setItems(res.data);
      console.log(items.hotels[0].id);
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

  const hotelCheck = (checkIn: string, checkOut: string) => {
    console.log('checkIn:');
    console.log('checkOut:');
    return true;
  };

  const searchKey = searchParams.get('key');
  const searchGuest = searchParams.get('guest');
  const checkIn = searchParams.get('checkin');
  const checkOut = searchParams.get('checkout');

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

      <div className="mx-52">
        key : {searchKey} <br />
        guest : {searchGuest} <br />
        checkin : {checkIn?.split('-')} <br />
        checkout : {checkOut?.split('-')}
      </div>

      <div className="search-post">
        {items.hotels.map((data, key) => {
          return (
            <div className="mx-8 mb-4 md:mx-52 ">
              <div className="border-2 rounded-xl shadow-md  ">
                <div key={key}>
                  <div className="grid grid-cols-4 grid-flow-row">
                    <img
                      src={data.picture[0]}
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
                        {/* {data.room[0].roomCount30Day.map((data) => {
                          return (
                            <div>
                              {data.date?.split('/')} {data.count}
                            </div>
                          );
                        })} */}
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
                      <button className="font-kanit bg-blue-500 hover:bg-blue-700 row-span-1 text-white font-bold rounded">
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

export default Search;
