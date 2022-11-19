import React from 'react';
import { HomeIcon, PencilSquareIcon, TicketIcon } from '@heroicons/react/20/solid';

function PaymentRoom() {
    const paymentroom = [
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
            day: 1,
            coupon: 50,
        },
    ];
    return (


        <div className='block'>
            <div className='md:hidden'>
            <div className='rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl'>
                <div className="mb-2 flex justify-between">
                    <p className="text-[26px]">
                        ข้อมูลการชำระเงิน
                    </p>

                </div>

                {paymentroom.map((data) => {
                    return (
                        <div className=" border rounded-md border-[#999999] px-5 py-4 mt-5">
                            <div className='flex justify-between mb-2'>
                                <p>ราคาที่พัก (x{data.day} คืน)</p>
                                <p>฿ {data.price}</p>
                            </div>
                            <div className=' bg-green-200 border border-green-500 rounded-md px-3 flex justify-between mb-2'>
                                <div className='flex'>
                                    <TicketIcon className="h-4 w-4  mt-1 mr-2" />
                                    <p >คูปองส่วนลด</p>
                                </div>
                                <p>-฿ {data.coupon}</p>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p>ยอดชำระเงินทั้งหมด</p>
                                <p>฿ {data.price - data.coupon}</p>
                            </div>
                            <div className='flex justify-end'>
                                <button className='bg-sky-500 hover:bg-sky-600  text-white px-4 py-2 rounded-lg mt-3' >
                                    ยืนยันการชำระเงิน
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            </div>
            <div className='mx-48 rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl hidden md:block'>
                <div className="mb-2 flex justify-between">
                    <p className="text-[26px]">
                        ข้อมูลการชำระเงิน
                    </p>

                </div>

                {paymentroom.map((data) => {
                    return (
                        <div className=" border rounded-md border-[#999999] px-5 py-4 mt-5">
                            <div className='flex justify-between mb-2'>
                                <p>ราคาที่พัก (x{data.day} คืน)</p>
                                <p>฿ {data.price}</p>
                            </div>
                            <div className=' bg-green-200 border border-green-500 rounded-md px-3 flex justify-between mb-2'>
                                <div className='flex'>
                                    <TicketIcon className="h-4 w-4  mt-1 mr-2" />
                                    <p >คูปองส่วนลด</p>
                                </div>
                                <p>-฿ {data.coupon}</p>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p>ยอดชำระเงินทั้งหมด</p>
                                <p>฿ {data.price - data.coupon}</p>
                            </div>
                            <div className='flex justify-end'>
                                <button className='bg-sky-500 hover:bg-sky-600  text-white px-4 py-2 rounded-lg mt-3' >
                                    ยืนยันการชำระเงิน
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default PaymentRoom;