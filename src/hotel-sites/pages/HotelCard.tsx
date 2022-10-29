import React from 'react'
type dataType = {
    data:{
    _id: string;
    index: number;
    guid: string;
    isActive: boolean;
    price: string;
    picture: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    registered: string;
    latitude: number;
    longitude: number;
    rating: number;
    reviews: number;
    status: string;
    }
}
const Star = (n:number) =>{
    const arr = new Array(5);
    for(let i=1; i<=5; i++){
    let str = 0
      if (i<=n){
        str = 1
      }
      arr[i] = str;
    }

    return arr;
}
const HotelCard = ({data}:dataType) =>{
  return (
    <div className="flex border-2 border-black-900 rounded-lg mx-auto w-4/5 space-x-4 mt-5">
    <div className="w-1/4">
        <img src = {data.picture} className=""/>
    </div>
    <div className="block w-2/5 space-y-2">
        <p className="text-base md:text-xl">
        {data.name}
        </p>
        <div className="flex text-blue-500 text-sm md:text-base">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:w-6 w-8 md:h-6 h-8 md:pb-0 pb-3"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
        <p className="">
        {data.address}
        </p>
        </div>
        <p className="text-sm md:text-base">
        {data.about}
        </p>
    </div>
    <div className="border-r-2 border-black-900 my-2 "></div>
    <div className="block space-y-2 py-5 md:pl-6 pr-1">
        <div className="flex">
            {
                Star(data.rating).map((s:number,i)=>{
                    return(
                        s?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#EDEA10" viewBox="0 0 24 24" stroke-width="1" stroke="#EDEA10 " className="md:w-8 w-4 md:h-8 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#EDEA10 " className="md:w-8 w-4 md:h-8 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                    )
                })

            }
        </div>
        <div className="text-right text-sm md:text-base">
            {data.reviews} รีวิว
        </div>
        <div>
            promotion space
        </div>
        <div className="text-right text-sm md:text-base">
            ราคาเริ่มต้น (ต่อคืน)
        </div>
        <div className="text-red-600 text-right text-sm md:text-base">
            {data.price}
        </div>
        <div className=" text-center">
            {
                data.status === 'a' ?
                <button className="rounded-lg bg-green-500 p-2 text-white">มีห้องว่าง</button> :
                <button className="rounded-lg bg-red-500 p-2 text-white">ถูกจองครบแล้ว</button>
            }
            
        </div>
    </div>
    </div>
  )
}

export default HotelCard