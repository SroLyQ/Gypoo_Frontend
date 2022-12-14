import React from 'react';
import { useState, useEffect } from 'react';
import config from '../../config.json';
import apiClient from '../../api/apiClient';

interface room {
  idRoom: string;
  idHotel: string;
  roomType: string;
  guest: number;
  roomCount: number;
  currentRoom: number;
  picture: string[];
  roomPrice: number;
  discount: number;
  roomCount30Day: string[];
  service: {
    isWifi: boolean;
    isParking: boolean;
    isAnimals: boolean;
    isBreakFast: boolean;
    isBuffet: boolean;
    isOther: boolean;
  };
}

function Rentroom(dataRent: any) {
  useEffect(() => {
    const getRoomData = async () => {
      const res = await apiClient(
        `${config.api_url.localHost}/Room/getroom/${dataRent.idRoom}`,
        {
          method: 'GET',
        },
      );
      setRentroom(res.data);
    };
    getRoomData();
  }, []);

  const [rentroom, setRentroom] = useState<room>();
  return (
    <div className="block">
      <div className="md:hidden">
        <div className="rounded-md border-[#999999] mt-[25px] pt-5 pb-10 shadow-2xl ">
          <div className="rounded-md px-5 ">
            <p className="text-[25px]">{rentroom?.roomType}</p>
            <div className="mt-3">
              <p className="font-bold ">ห้องพัก</p>
              <img src={rentroom?.picture[0]} className="w-full" />
            </div>

            <div className="border p-3 my-3 rounded-md">
              <p className="font-bold ">สิทธิประโยชน์</p>
              {rentroom?.service.isAnimals ? (
                <div>- นำสัตว์เลี่ยงเข้าพักได้</div>
              ) : (
                <div className="hidden"></div>
              )}
              {rentroom?.service.isBreakFast ? (
                <div>- มีอาหารเช้า</div>
              ) : (
                <div className="hidden"></div>
              )}
              {rentroom?.service.isBuffet ? (
                <div>- ปิ้งย่าง ชาบู</div>
              ) : (
                <div className="hidden"></div>
              )}
              {rentroom?.service.isWifi ? (
                <div>- FREE WI-FI</div>
              ) : (
                <div className="hidden"></div>
              )}
              {rentroom?.service.isParking ? (
                <div>- ที่จอดรถ</div>
              ) : (
                <div className="hidden"></div>
              )}
              {rentroom?.service.isOther ? (
                <div>- อื่นๆ</div>
              ) : (
                <div className="hidden"></div>
              )}
            </div>

            <div className="border p-3 my-3 rounded-md ">
              <p className="font-bold ">ผู้เข้าพัก</p>
              <p className="font-bold ">(คน)</p>
              <p>{rentroom?.guest}</p>
            </div>
            <div className="border p-3 my-3 rounded-md ">
              <p className="font-bold ">ราคาที่พัก</p>
              <p className="font-bold ">(ต่อคืน)</p>
              <p>฿ {rentroom?.roomPrice}</p>
            </div>
            <div className="border p-3 my-3 rounded-md">
              <p className=" font-bold  ">วันที่เข้าพัก</p>
              <p className=" font-bold  ">(คืน)</p>
              <p>
                {dataRent.checkIn} - {dataRent.checkOut}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-48 rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl hidden md:block">
        <div className="mb-2 flex justify-between">
          <p className="text-[26px]">ข้อมูลที่พัก</p>
        </div>

        <div className=" border rounded-md border-[#999999] px-5 py-3 mt-5">
          <p className="text-[25px]">{rentroom?.roomType}</p>

          <div className="grid grid-cols-7 ">
            <div className=" col-span-2 mr-2">
              <p className="font-bold ">ห้องพัก</p>
              <img
                src={
                  'https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768'
                }
                className="w-full"
              />
            </div>
            <div className=" col-span-2 border-l-2 px-3 flex justify-center">
              <div>
                <p className="font-bold ">สิทธิประโยชน์</p>
                {rentroom?.service.isAnimals ? (
                  <div>- นำสัตว์เลี่ยงเข้าพักได้</div>
                ) : (
                  <div className="hidden"></div>
                )}
                {rentroom?.service.isBreakFast ? (
                  <div>- มีอาหารเช้า</div>
                ) : (
                  <div className="hidden"></div>
                )}
                {rentroom?.service.isBuffet ? (
                  <div>- ปิ้งย่าง ชาบู</div>
                ) : (
                  <div className="hidden"></div>
                )}
                {rentroom?.service.isWifi ? (
                  <div>- FREE WI-FI</div>
                ) : (
                  <div className="hidden"></div>
                )}
                {rentroom?.service.isParking ? (
                  <div>- ที่จอดรถ</div>
                ) : (
                  <div className="hidden"></div>
                )}
                {rentroom?.service.isOther ? (
                  <div>- อื่นๆ</div>
                ) : (
                  <div className="hidden"></div>
                )}
              </div>
            </div>
            <div className=" col-span-1 border-l-2 text-center">
              <p className="font-bold ">ผู้เข้าพัก </p>
              <p className="font-bold mb-6">(คน)</p>
              <p>{rentroom?.guest}</p>
            </div>
            <div className=" col-span-1 border-l-2 text-center">
              <p className="font-bold ">ราคาที่พัก</p>
              <p className="font-bold mb-6">(ต่อคืน)</p>
              <p>฿ {rentroom?.roomPrice}</p>
            </div>
            <div className=" col-span-1 border-l-2 text-center px-2 ">
              <p className=" font-bold  ">วันที่เข้าพัก</p>
              {/* <p className=" font-bold  mb-6">(คืน)</p> */}
              <p>
                {dataRent.checkIn} - {dataRent.checkOut}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rentroom;
