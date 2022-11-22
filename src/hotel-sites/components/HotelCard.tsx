import React from 'react';
import { Link } from 'react-router-dom';
type dataType = {
  data: {
    id: string;
    isAvailable: boolean;
    name: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    mapURL: string;
    ownerID: string;
    locationType: any;
    picture: Array<string>;
    price: number;
    discount: number;
    rating: number;
    review: number;
    room: Array<any>;
  };
};
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
const HotelCard = ({ data }: dataType) => {
  console.log(data);
  return (
    <div className="flex border-2 border-black-900 rounded-lg w-[100%] space-x-4 mt-5 pr-7">
      <div className="w-1/4 ">
        <img
          src={
            'https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768'
          }
          className="object-cover object-left "
        />
      </div>
      <div className="block w-2/5 md:w-3/5  space-y-2">
        <p className="text-base md:text-xl">{data.name}</p>
        <div className="flex text-blue-500 text-sm md:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="md:w-6 w-8 md:h-6 h-8 md:pb-0 pb-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="">{data.address}</p>
        </div>
        <p className="text-sm md:text-base">{data.about}</p>
      </div>
      <div className="border-r-2 border-black-900 my-2"></div>
      <div className="block space-y-2 py-8 md:pl-6 pr-1 w-auto ">
        <div className="flex ">
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
        <div className="text-right text-sm md:text-base">
          {data.review} รีวิว
        </div>
        <div>
          {data.discount == 0 ? (
            ''
          ) : (
            <div className="bg-red-600 text-white rounded-md text-center  md:text-base text-xs">
              SALE ลด {data.discount}% วันนี้!
            </div>
          )}
        </div>
        <div className="text-right text-sm md:text-base">
          ราคาเริ่มต้น (ต่อคืน)
        </div>
        <div className=" text-right text-sm md:text-base">
          {data.discount == 0 ? (
            <div className="text-red-600">
              {data.price
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
          ) : (
            <div>
              <span className=" text-red-600 line-through mr-1">
                {data.price
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <span className=" text-green-600 ">
                {((data.price * (100 - data.discount)) / 100)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </div>
          )}
        </div>
        <div className=" text-center">
          {data.isAvailable ? (
            <button className="rounded-lg bg-green-500 p-2 text-white">
              มีห้องว่าง
            </button>
          ) : (
            <button className="rounded-lg bg-red-500 p-2 text-white">
              ถูกจองครบแล้ว
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
