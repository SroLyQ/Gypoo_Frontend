import React from 'react';
type dataType = {
  rentroom:{
    name: string
    price: number
    guest: number
    img: string
    facilities: string[]
    day: number
    coupon: number
  }[]
};

function Rentroom({rentroom}:dataType) {
  
  return (

    
    <div className='block'>
      <div className='md:hidden'>
      <div className='rounded-md border-[#999999] mt-[25px] pt-5 pb-10 shadow-2xl '>
      

      {rentroom.map((data) => {
        return (
          <div className="rounded-md px-5 ">
            <p className="text-[25px]">{data.name}</p>

            
              <div className="mt-3">
                <p className="font-bold ">ห้องพัก</p>
                <img src={data.img} className="w-full" />
              </div>
              
              <div className="border p-3 my-3 rounded-md">
                <p className="font-bold ">สิทธิประโยชน์</p>
                {data.facilities.map((data) => {
                  return <div>- {data}</div>;
                })}
              </div>
              <div className="border p-3 my-3 rounded-md ">
                <p className="font-bold ">ผู้เข้าพัก</p>
                <p className="font-bold ">(คน)</p>
                <p>{data.guest}</p>
              </div>
              <div className="border p-3 my-3 rounded-md ">
                <p className="font-bold ">ราคาที่พัก</p>
                <p className="font-bold ">(ต่อคืน)</p>
                <p>฿ {data.price}</p>
              </div>
              <div className="border p-3 my-3 rounded-md">
                <p className=" font-bold  ">วันที่เข้าพัก</p>
                <p className=" font-bold  ">(คืน)</p>
                <p>{data.day}</p>
              </div>
            </div>
          
        );
      })}
    </div>

      </div>
      <div className='mx-48 rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl hidden md:block'>
      <div className="mb-2 flex justify-between">
        <p className="text-[26px]">
          ข้อมูลที่พัก
        </p>

      </div>

      {rentroom.map((data) => {
        return (
          <div className=" border rounded-md border-[#999999] px-5 py-3 mt-5">
            <p className="text-[25px]">{data.name}</p>

            <div className="grid grid-cols-7 ">
              <div className=" col-span-2 mr-2">
                <p className="font-bold ">ห้องพัก</p>
                <img src={data.img} className="w-full" />
              </div>
              <div className=" col-span-2 border-l-2 px-3 flex justify-center">
                <div>
                <p className="font-bold ">สิทธิประโยชน์</p>
                {data.facilities.map((data) => {
                  return <div>- {data}</div>;
                })}
                </div>
              </div>
              <div className=" col-span-1 border-l-2 text-center">
                <p className="font-bold ">ผู้เข้าพัก </p>
                <p className="font-bold mb-6">(คน)</p>
                <p>{data.guest}</p>
              </div>
              <div className=" col-span-1 border-l-2 text-center">
                <p className="font-bold ">ราคาที่พัก</p>
                <p className="font-bold mb-6">(ต่อคืน)</p>
                <p>฿ {data.price}</p>
              </div>
              <div className=" col-span-1 border-l-2 text-center px-2 ">
                <p className=" font-bold  ">วันที่เข้าพัก</p>
                <p className=" font-bold  mb-6">(คืน)</p>
                <p>{data.day}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    </div>
  );
}

export default Rentroom;