import React from 'react';
import { useState, useEffect } from 'react';

function Roomtype(data: any) {
  const roomtype = [
    {
      name: 'ห้องเชือด',
      price: 2000,
      guest: 2,
      img: 'https://pix8.agoda.net/hotelImages/223/2239454/2239454_17101020200057610834.jpg?ca=6&ce=1&s=208x117&ar=16x9',
      facilities: [
        'ที่จอดรถ',
        'เช็คอินด่วน',
        ' ฟรีอินเทอร์เน็ตไร้สาย (Wi-Fi)',
        'มีค่าธรรมเนียมหากยกเลิกการจอง',
      ],
    },
    {
      name: 'ห้องเชือดหมู่',
      price: 4000,
      guest: 4,
      img: 'https://pix8.agoda.net/hotelImages/223/2239454/2239454_17101020200057610834.jpg?ca=6&ce=1&s=208x117&ar=16x9',
      facilities: [
        'ที่จอดรถ',
        'เช็คอินด่วน',
        ' ฟรีอินเทอร์เน็ตไร้สาย (Wi-Fi)',
        'มีค่าธรรมเนียมหากยกเลิกการจอง',
      ],
    },
    {
      name: 'ห้องเชือดครอบครัว',
      price: 12000,
      guest: 8,
      img: 'https://pix8.agoda.net/hotelImages/223/2239454/2239454_17101020200057610834.jpg?ca=6&ce=1&s=208x117&ar=16x9',
      facilities: [
        'ที่จอดรถ',
        'เช็คอินด่วน',
        ' ฟรีอินเทอร์เน็ตไร้สาย (Wi-Fi)',
        'มีค่าธรรมเนียมหากยกเลิกการจอง',
      ],
    },
  ];

  const [booking, setBooking] = useState('1');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  return (
    <div>
      <p className="mx-8 text-2xl mt-[40px]">
        ห้องพัก {roomtype.length} ประเภท
      </p>
      {roomtype.map((data) => {
        return (
          <div className=" border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px] ">
            <p className="text-[25px]">{data.name}</p>
            <div className="grid grid-cols-10 mt-4">
              <div className=" col-span-1 mx-2">
                <p className="font-bold mb-3  ">ห้องพัก</p>
                <img src={data.img} />
              </div>
              <div className=" col-span-2 border-l-2 pl-5 mx-2">
                <p className="font-bold mb-3">สิทธิประโยชน์ </p>
                {data.facilities.map((data) => {
                  return <div>{data}</div>;
                })}
              </div>
              <div className=" col-span-1 border-l-2 text-center ">
                <p className="font-bold mb-3">ห้องสำหรับ(คน)</p>
                <p>{data.guest}</p>
              </div>
              <div className=" col-span-3 border-l-2 text-center ">
                <p className="font-bold mb-3">Checkin - Checkout</p>
                <div className="flex justify-between mx-5 mt-2">
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
                <p className="font-bold mb-3">ราคา ต่อห้อง ต่อคืน</p>
                <p>{data.price} บาท</p>
              </div>
              <div className=" col-span-1 border-l-2  ">
                <p className="font-bold mb-3 text-center">จำนวนห้อง</p>
                <form className="text-center mt-9">
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
                <p className="font-bold mb-3 text-center ">🔻 จองเลย 🔻</p>
                <button
                  className=" bg-[#07ffff] py-3 px-4 mx-4 mt-3 rounded-xl hover:bg-[#128e8e]"
                  onClick={(e) => {
                    console.log(checkIn, checkOut, booking);
                  }}
                >
                  จองเลย
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Roomtype;
