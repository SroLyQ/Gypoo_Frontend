import React from 'react'
import { FaCheck, FaBed, FaRegCalendar,FaStar } from 'react-icons/fa';

type history ={
    h:{
        _id: string,
        index: number,
        idHotel: string,
        idRoom: string,
        idUser: string,
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        payment: string,
        roomBooking: any,
        dateBooking: Array<string>,
        price: number
      }
}
function HistoryCard ({h}:history){
    return (
        <div className='border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px]'>
                            <div className='Block'>
                                    <p className='md:text-[32px] test-2xl'>{h.firstName} {h.lastName}</p>
                            </div>
                            <div className='border-b-2 border-black-900 md:my-8 my-4'></div>
                        <div className="grid grid-flow-col grid-cols-3  ">
                            <div className='block'> 
                            <div >
                                <img className='object-cover object-left' src={"https://media.cntraveler.com/photos/63372da99ae3f06709fbea5a/1:1/w_1280%2Ch_1280%2Cc_limit/Rome_ichele-bitetto-2y6ojwauKJI-unsplash.jpg"}/>
                            </div>
                            
                            </div>
                            
                            <div className='w-1/2'> 
                            
                            </div>
                            
                            <div className='block'>
                            <div className='text-right'>
                    
                            <div className="text-red-600  md:text-[28px] text-[24px]">
                                {h.price
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            </div>
                            
                            <p className='md:text-xl text-[12px] md:text-right '>Checkin at {h.dateBooking[0]} </p>
                            <p className='md:text-xl text-[12px] md:text-right '>Checkout at {h.dateBooking[h.dateBooking.length-1]}</p>
                            </div>
                            </div>
                            
                        </div>
                        </div>
        )
}
export default HistoryCard