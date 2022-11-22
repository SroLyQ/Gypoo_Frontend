import React from 'react';
import { useState, useEffect } from 'react';
import config from '../../config.json';
import apiClient from '../../api/apiClient';
import { stringify } from 'querystring';
import { useNavigate } from 'react-router-dom';
import { createSearchParams } from 'react-router-dom';
function Roomtype(roomId: any) {
  useEffect(() => {
    const getRoom = async () => {
      const res = await apiClient(
        `${config.api_url.localHost}/Room/getroom/${roomId.idRoom}`,
        {
          method: 'GET',
        },
      );
      console.log(res.data);
      setRoomdata(res.data);
    };
    getRoom();
  }, [roomId]);

  const [Roomdata, setRoomdata] = useState<any>(['']);
  const [booking, setBooking] = useState('1');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const navigate = useNavigate();

  const gotoRentHotel = () => {
    const dataRentRoom = {
      idroom: roomId.idRoom,
      booking: booking,
      checkin: checkIn,
      checkout: checkOut,
    };
    navigate({
      pathname: '/renthotel',
      search: `?${createSearchParams(dataRentRoom)}`,
    });
  };
  return (
    <div>
      <div className=" border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px] ">
        <p className="text-[25px]">{Roomdata.roomType}</p>
        <div className="md:hidden">
          <div className="mt-4">
            <div className=" mb-3 ">
              <p className="font-bold   ">ห้องพัก</p>
              <img
                src={
                  'https://cdn.discordapp.com/attachments/1022834305971531798/1043933235933098014/unknown.png'
                }
                className="w-full"
              />
            </div>
            <div className="border p-3 my-3 rounded-md">
              <p className="font-bold">สิทธิประโยชน์ </p>
              {Roomdata.service?.isAnimals ? (
                <div>- นำสัตว์เลี่ยงเข้าพักได้</div>
              ) : (
                <div className="hidden"></div>
              )}
              {Roomdata.service?.isBreakFast ? (
                <div>- มีอาหารเช้า</div>
              ) : (
                <div className="hidden"></div>
              )}
              {Roomdata.service?.isBuffet ? (
                <div>- ปิ้งย่าง ชาบู</div>
              ) : (
                <div className="hidden"></div>
              )}
              {Roomdata.service?.isWifi ? (
                <div>- FREE WI-FI</div>
              ) : (
                <div className="hidden"></div>
              )}
              {Roomdata.service?.isParking ? (
                <div>- ที่จอดรถ</div>
              ) : (
                <div className="hidden"></div>
              )}
              {Roomdata.service?.isOther ? (
                <div>- อื่นๆ</div>
              ) : (
                <div className="hidden"></div>
              )}
            </div>
            <div className="border p-3 my-3 rounded-md">
              <p className="font-bold">ห้องสำหรับ (คน)</p>
              <p>{Roomdata.guest}</p>
            </div>
            <div className="border p-3 my-3 rounded-md  ">
              <p className="font-bold">Checkin</p>
              <div className="mt-2 ">
                <input
                  type="date"
                  className="border"
                  value={checkIn}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                  }}
                />
              </div>
              <p className="font-bold mt-2">Checkout</p>
              <div className="mt-2 ">
                <input
                  type="date"
                  className="border"
                  value={checkOut}
                  onChange={(e) => {
                    setCheckOut(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="border p-3 my-3 rounded-md ">
              <p className="font-bold ">ราคาที่พัก (ต่อคืน)</p>
              {Roomdata.roomPrice}
            </div>
            <div className=" border p-3 my-3 rounded-md ">
              <p className=" font-bold">จำนวนห้อง</p>
              <form className="mt-2">
                <input
                  onChange={(e) => {
                    setBooking(e.target.value);
                  }}
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="5"
                  value={booking}
                  className="text-center bg-gray-200 border-black border-2 "
                />
              </form>
            </div>
            <div className="border p-3 my-3 rounded-md">
              <p className="font-bold  ">🔻 จองเลย 🔻</p>
              <button
                className=" bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 mt-3 rounded-lg "
                onClick={(e) => {
                  console.log(checkIn, checkOut, booking);
                }}
              >
                จองเลย
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-10 max-md:hidden mt-4 text-lg xs:text-sm">
          <div className=" col-span-1 mx-2">
            <p className="font-bold mb-3  ">ห้องพัก</p>
            <img
              src={
                'https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768'
              }
              className="w-full"
            />
          </div>
          <div className=" col-span-2 border-l-2 pl-5 mx-2">
            <p className="font-bold mb-3">สิทธิประโยชน์ </p>
            {Roomdata.service?.isAnimals ? (
              <div>- นำสัตว์เลี่ยงเข้าพักได้</div>
            ) : (
              <div className="hidden"></div>
            )}
            {Roomdata.service?.isBreakFast ? (
              <div>- มีอาหารเช้า</div>
            ) : (
              <div className="hidden"></div>
            )}
            {Roomdata.service?.isBuffet ? (
              <div>- ปิ้งย่าง ชาบู</div>
            ) : (
              <div className="hidden"></div>
            )}
            {Roomdata.service?.isWifi ? (
              <div>- FREE WI-FI</div>
            ) : (
              <div className="hidden"></div>
            )}
            {Roomdata.service?.isParking ? (
              <div>- ที่จอดรถ</div>
            ) : (
              <div className="hidden"></div>
            )}
            {Roomdata.service?.isOther ? (
              <div>- อื่นๆ</div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
          <div className=" col-span-1 border-l-2 text-center ">
            <p className="font-bold mb-3">ห้องสำหรับ(คน)</p>
            {Roomdata.guest}
          </div>
          <div className=" col-span-3 border-l-2 text-center ">
            <p className="font-bold mb-3">Checkin - Checkout</p>
            <div className="flex justify-between mx-8 mt-2">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                }}
              />
              <p>|</p>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => {
                  setCheckOut(e.target.value);
                }}
              />
            </div>
          </div>
          <div className=" col-span-1 border-l-2 text-center mx-1">
            <p className="font-bold mb-3">ราคาห้อง (ต่อคืน)</p>
            {Roomdata.roomPrice}
          </div>
          <div className=" col-span-1 border-l-2  ">
            <p className="font-bold mb-3 text-center">จำนวนห้อง</p>
            <form className="text-center ">
              <input
                onChange={(e) => {
                  setBooking(e.target.value);
                }}
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="5"
                value={booking}
                className="text-center bg-gray-200 border-black border-2 "
              />
            </form>
          </div>
          <div className=" col-span-1 border-l-2">
            <p className="font-bold mb-3 text-center  ">🔻 จองเลย 🔻</p>
            <button
              className=" bg-[#07ffff] py-3 px-4 md:ml-6 mt-3 rounded-xl hover:bg-[#128e8e] "
              onClick={gotoRentHotel}
            >
              จองเลย
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roomtype;
