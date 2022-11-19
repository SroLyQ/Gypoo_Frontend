import React from 'react'
import { FaCheck, FaBed, FaRegCalendar,FaStar } from 'react-icons/fa';

type history ={
    h:{
    _id: string;
    index: number;
    price: number;
    picture: string;
    name: string;
    type : string;
    checkin: string;
    checkout: string;
    }
}
function HistoryCard ({h}:history){
    return (
        <div className='border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px]'>
                            <div className='Block'>
                                    <p className='md:text-[32px] test-2xl'>{h.name}</p>
                            </div>
                            <div className='border-b-2 border-black-900 md:my-8 my-4'></div>
                        <div className="grid grid-flow-col grid-cols-3  ">
                            <div className='block'> 
                            <div >
                                <img className='object-cover object-left' src={h.picture}/>
                            </div>
                            
                            </div>
                            
                            <div className='w-1/2'> 
                            
                            </div>
                            
                            <div className='block'>
                            <div className='text-right'>
                    
                            <div className="text-red-600  text-[28px]">
                                {h.price
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            </div>
                            
                            <p className='md:text-xl text:xs md:text-right '>Checkin at {h.checkin} </p>
                            <p className='md:text-xl text:xs md:text-right '>Checkout at {h.checkout}</p>
                            </div>
                            </div>
                            
                        </div>
                        </div>
        )
}
export default HistoryCard