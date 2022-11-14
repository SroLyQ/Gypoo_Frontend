import React from 'react';

function Roomtype() {
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
      price: 1200,
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
  return (
    <div>
      <p className="mx-8 text-2xl mt-[40px]">
        ห้องพัก {roomtype.length} ประเภท
      </p>
      {roomtype.map((data) => {
        return (
          <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px] ">
            <p className="text-[25px]">{data.name}</p>
            <div className="grid grid-cols-7 mt-4">
              <div className=" col-span-1">
                <p className="font-bold mb-3">ห้องพัก</p>
                <img src={data.img} />
              </div>
              <div className=" col-span-2 border-l-2 pl-5">
                <p className="font-bold mb-3">สิทธิประโยชน์</p>
                {data.facilities.map((data) => {
                  return <div>{data}</div>;
                })}
              </div>
              <div className=" col-span-1 border-l-2 text-center ">
                <p className="font-bold mb-3">ผู้เข้าพัก</p>
                <p>{data.guest}</p>
              </div>
              <div className=" col-span-1 border-l-2 text-center">
                <p className="font-bold mb-3">ราคา ต่อห้อง ต่อคืน</p>
                <p>{data.price} บาท</p>
              </div>
              <div className=" col-span-2 border-l-2  ">
                <p className="text-center font-bold mb-3 ">🔻 จองเลย 🔻</p>
                <div className="grid grid-cols-2 text-center  ">
                  <div className="col-span-1  py-3 px-2 ">1</div>
                  <div className="col-span-1 ">
                    <button className=" bg-[#07ffff] py-3 px-4 rounded-xl hover:bg-[#128e8e]">
                      จองเลย
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Roomtype;
