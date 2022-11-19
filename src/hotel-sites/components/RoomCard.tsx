import React from 'react'
import { FaCheck, FaBed, FaRegCalendar,FaStar } from 'react-icons/fa';
type room ={
    r:{
    _id: string;
    type: string;
    guest: number;
    room: number;
    currentroom: number;
    picture: string;
    price: number;
    discount: number;
    facilities: string[];
    }
}
function RoomCard ({r}:room){
    return (
        <div className='border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px]'>
                            <div className='Block'>
                                    <p className='md:text-[36px] test-2xl'>{r.type}</p>
                            </div>
                            <div className='border-b-2 border-black-900 md:my-8 my-4'></div>
                        <div className="grid grid-flow-col grid-cols-3 ">
                            <div className='block'> 
                            <div >
                                <img className='object-cover object-left' src={r.picture}/>
                            </div>
                            
                            </div>
                            
                            <div className='block space-y-4 ml-2'>
                                {
                                    r.facilities.map((f,i)=>{
                                        return(
                                            <div className='flex'>
                                            <FaCheck className="mr-2"/>
                                            <p className='md:text-lg text:xs'>{f}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                            <div className='block'>
                            <div className='md:ml-[7em]  md:mb-10'>
                            {r.discount == 0 ? (
                                ''
                            ) : (
                                <div className="bg-red-600 text-white rounded-md text-center  md:text-xl text-xs w-4/5">
                                SALE ลด {r.discount}% วันนี้!
                                </div>
                            )}
                            </div>
                           
                            <div className='md:ml-20 my-2'>
                            {r.discount == 0 ? (
                                <div className="text-red-600 text-right pr-[3rem] text-[28px]">
                                {r.price
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </div>
                            ) : (
                                <div className='block text-right pr-[3rem] text-[28px]'>
                                <div className=" text-red-600 line-through mr-1 md:text-xl text:sm">
                                    {r.price
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </div>
                                <div className=" text-green-600 md:text-xl text:sm">
                                    {((r.price * (100 - r.discount)) / 100)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </div>
                                </div>
                            )}
                            <p className='md:text-xl text:xs md:text-right md:pr-[3rem] my-2'>capacity {r.guest} person </p>
                            <p className='md:text-xl text:xs md:text-right md:pr-[3rem] my-2'>have {r.currentroom} room(s) left </p>
                            <p className='md:text-xl text:xs md:text-right md:pr-[3rem] my-2'>from {r.room} room(s)</p>
                            </div>
                            </div>
                            
                        </div>
                        </div>
        )
}
export default RoomCard