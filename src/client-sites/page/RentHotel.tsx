import React, { useState } from 'react';
import { FaCheck, FaBed, FaRegCalendar } from 'react-icons/fa';
import { HomeIcon, PencilSquareIcon, XMarkIcon } from '@heroicons/react/20/solid';
import StarRating from '../components/StarRating';
import { Listbox } from '@headlessui/react';
import RentRoom from '../components/RentRoom';
import PaymentRoom from '../components/PaymentRoom';
import 'tw-elements';

function RentHotel() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModel = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className='pt-[95px] font-kanit'>
            <div className="container mx-auto flex-wrap">
                <div className='block'>
                    <div className='md:hidden'>
                        <div className="rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl">
                            <div className="mb-2 flex justify-between">
                                <p className="text-[26px]">
                                    ข้อมูลผู้จอง
                                </p>
                                <button>
                                    <PencilSquareIcon className="h-8 w-8 text-[#585858] mx-auto " onClick={toggleModel} />
                                </button>
                                {isOpen && (
                                    <div className="w-screen  h-screen   flex justify-center items-center absolute top-0 left-0">
                                        <div
                                            className="w-screen h-screen bg-black/50 fixed top-0 left-0 "
                                            onClick={toggleModel}
                                        ></div>
                                        <div className="bg-white rounded fixed top-32 shadow-lg ">
                                            <div className="rounded-md border-[#999999]  pt-5 pb-5 px-10  shadow-2xl ">
                                                <div className="mb-2  flex justify-between">
                                                    <p className="text-[26px]">
                                                        แก้ไขข้อมูล
                                                    </p>
                                                    <button>
                                                        <XMarkIcon className="h-8 w-8 text-[#585858] mx-auto " onClick={toggleModel} />
                                                    </button>
                                                </div>
                                                <div className="border border-[#D8D8D8] "></div>
                                                <div className=' py-2 '>
                                                    <div className=' w-full '>
                                                        <div className="mb-3">
                                                            <p className="text-[20px]">ชื่อ : </p>
                                                        </div>
                                                        <form className=' border border-[#D8D8D8] rounded-md '>
                                                            <input
                                                                className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36 focus:outline-none"
                                                                placeholder="ชื่อ"
                                                            />
                                                        </form>
                                                    </div>
                                                    <div className=' w-full'>
                                                        <div className="mb-2 mt-2">
                                                            <p className="text-[20px]">นามสกุล :</p>

                                                        </div>
                                                        <form className=' border border-[#D8D8D8] rounded-md'>
                                                            <input
                                                                className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36  focus:outline-none"
                                                                placeholder="นามสกุล"
                                                            />
                                                        </form>
                                                    </div>
                                                </div>
                                            
                                                    <div className='w-full '>
                                                        <div className="mb-2">
                                                            <p className="text-[20px]">Email : </p>
                                                        </div>
                                                        <form className=' border border-[#D8D8D8] rounded-md'>
                                                            <input
                                                                className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36 focus:outline-none"
                                                                placeholder="Email"
                                                            />
                                                        </form>
                                                    </div>
                                                    <div className='w-full'>
                                                        <div className="mb-2 mt-2">
                                                            <p className="text-[20px]">เบอร์โทรศัพท์ :</p>

                                                        </div>
                                                        <form className=' border border-[#D8D8D8] rounded-md'>
                                                            <input
                                                                className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36 focus:outline-none"
                                                                placeholder="เบอร์โทรศัพท์"
                                                            />
                                                        </form>
                                                    </div>

                                                
                                                <div className='flex justify-end'>
                                                    <button className='bg-sky-500 hover:bg-sky-600 text-white rounded-md px-3 py-2 mt-5 '>
                                                        ยืนยัน
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                            <div className="border border-[#D8D8D8]"></div>
                            <div className='flex flex-wrap justify-between gap-x-4 py-4'>
                                <div className=' mt-4 w-full '>
                                    <div className="mb-3">
                                        <p className="text-[18px]">ชื่อ : </p>
                                    </div>
                                    <div className='rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]'>
                                        Boom
                                    </div>
                                </div>
                                <div className='mt-4 w-full'>
                                    <div className="mb-3">
                                        <p className="text-[18px]">นามสกุล :</p>

                                    </div>
                                    <div className='rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]'>
                                        Buraphee
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='w-full '>
                                    <div className="mb-3">
                                        <p className="text-[18px]">Email : </p>
                                    </div>
                                    <div className='rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]'>
                                        gypoo123@gmail.com
                                    </div>
                                </div>
                                <div className='w-full pt-3'>
                                    <div className="mb-3">
                                        <p className="text-[18px]">เบอร์โทรศัพท์ :</p>

                                    </div>
                                    <div className='rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]'>
                                        0123456789
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mx-48 rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl hidden md:block">
                        <div className="mb-2 flex justify-between">
                            <p className="text-[26px]">
                                ข้อมูลผู้จอง
                            </p>
                            <button>
                                <PencilSquareIcon className="h-8 w-8 text-[#585858] mx-auto " onClick={toggleModel} />
                            </button>
                            {isOpen && (
                                <div className="w-screen  h-screen   flex justify-center items-center absolute top-0 left-0">
                                    <div
                                        className="w-screen h-screen bg-black/50 fixed top-0 left-0 "
                                        onClick={toggleModel}
                                    ></div>
                                    <div className="bg-white  rounded fixed shadow-lg">
                                        <div className="rounded-md border-[#999999]  pt-5 pb-5 px-10  shadow-2xl hidden md:block">
                                            <div className="mb-2  flex justify-between">
                                                <p className="text-[26px]">
                                                แก้ไขข้อมูล
                                                </p>
                                                <button>
                                                    <XMarkIcon className="h-8 w-8 text-[#585858] mx-auto " onClick={toggleModel} />
                                                </button>
                                            </div>
                                            <div className="border border-[#D8D8D8]"></div>
                                            <div className='flex justify-between gap-x-10 py-4 '>
                                                <div className=' mt-4 w-full '>
                                                    <div className="mb-3">
                                                        <p className="text-[20px]">ชื่อ : </p>
                                                    </div>
                                                    <form className=' border border-[#D8D8D8]  '>
                                                        <input
                                                            className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36 focus:outline-none"
                                                            placeholder="ชื่อ"
                                                        />
                                                    </form>
                                                </div>
                                                <div className='mt-4 w-full'>
                                                    <div className="mb-3">
                                                        <p className="text-[20px]">นามสกุล :</p>

                                                    </div>
                                                    <form className=' border border-[#D8D8D8] '>
                                                        <input
                                                            className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36  focus:outline-none"
                                                            placeholder="นามสกุล"
                                                        />
                                                    </form>
                                                </div>
                                            </div>
                                            <div className='flex justify-between gap-x-8'>
                                                <div className='w-full '>
                                                    <div className="mb-3">
                                                        <p className="text-[20px]">Email : </p>
                                                    </div>
                                                    <form className=' border border-[#D8D8D8] '>
                                                        <input
                                                            className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36 focus:outline-none"
                                                            placeholder="Email"
                                                        />
                                                    </form>
                                                </div>
                                                <div className='w-full'>
                                                    <div className="mb-3">
                                                        <p className="text-[20px]">เบอร์โทรศัพท์ :</p>

                                                    </div>
                                                    <form className=' border border-[#D8D8D8] '>
                                                        <input
                                                            className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36 focus:outline-none"
                                                            placeholder="เบอร์โทรศัพท์"
                                                        />
                                                    </form>
                                                </div>

                                            </div>
                                            <div className='flex justify-end'>
                                                <button className='bg-sky-500 hover:bg-sky-600 text-white rounded-md px-3 py-2 mt-5 '>
                                                    ยืนยัน
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="border border-[#D8D8D8]"></div>
                        <div className='flex justify-between gap-x-8 py-4'>
                            <div className=' mt-4 w-full '>
                                <div className="mb-3">
                                    <p className="text-[20px]">ชื่อ : </p>
                                </div>
                                <div className='rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]'>
                                    Boom
                                </div>
                            </div>
                            <div className='mt-4 w-full'>
                                <div className="mb-3">
                                    <p className="text-[20px]">นามสกุล :</p>

                                </div>
                                <div className='rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]'>
                                    Buraphee
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between gap-x-8'>
                            <div className='w-full '>
                                <div className="mb-3">
                                    <p className="text-[20px]">Email : </p>
                                </div>
                                <div className='rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]'>
                                    gypoo123@gmail.com
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className="mb-3">
                                    <p className="text-[20px]">เบอร์โทรศัพท์ :</p>

                                </div>
                                <div className='rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]'>
                                    0123456789
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RentRoom />

                <div className='block'>
                    <div className='md:hidden'>
                        <div className="rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl">
                            <div className="mb-2 flex justify-between">
                                <p className="text-[26px]">
                                    วิธีการชำระเงิน
                                </p>

                            </div>
                            <div className="border border-[#D8D8D8]"></div>
                            <div className='border p-5 mt-5 rounded-md flex-wrap'>
                                <button className='bg-slate-300 p-2 rounded-lg mr-10 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                    QR Promptpay
                                </button>
                                <button className='bg-slate-300 p-2 rounded-lg mr-10 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                    Debit / Credit Card
                                </button>
                                <button className='bg-slate-300 p-2 rounded-lg mr-10 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                    Mobile Banking
                                </button>
                                <button className='bg-slate-300 p-2 rounded-lg mr-10 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                    โอน / ชำระผ่านบัญชีธนาคาร
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" mx-48 rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl hidden md:block">
                        <div className="mb-2 flex justify-between">
                            <p className="text-[26px]">
                                วิธีการชำระเงิน
                            </p>

                        </div>
                        <div className="border border-[#D8D8D8]"></div>
                        <div className='border p-5 mt-5 rounded-md flex-wrap'>
                            <button className='bg-slate-300 p-2 rounded-lg mr-8 mt-2 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                QR Promptpay
                            </button>
                            <button className='bg-slate-300 p-2 rounded-lg mr-8 mt-2 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                Debit / Credit Card
                            </button>
                            <button className='bg-slate-300 p-2 rounded-lg mr-8 mt-2 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                Mobile Banking
                            </button>
                            <button className='bg-slate-300 p-2 rounded-lg mr-8 mt-2 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                โอน / ชำระผ่านบัญชีธนาคาร
                            </button>
                        </div>
                    </div>
                </div>

                <PaymentRoom />

                {/* maybe edit popup */}
                {/* <div className=" mx-48 rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl hidden md:block">
                        <div className="mb-2 flex justify-between">
                            <p className="text-[26px]">
                                ข้อมูลผู้จอง
                            </p>
                            <button>
                                <PencilSquareIcon className="h-8 w-8 text-[#585858] mx-auto " />
                            </button>
                        </div>
                        <div className="border border-[#D8D8D8]"></div>
                        <div className='flex justify-between gap-x-8 py-4'>
                            <div className=' mt-4 w-full '>
                                <div className="mb-3">
                                    <p className="text-[20px]">ชื่อ : </p>
                                </div>
                                <form className=' border border-[#D8D8D8] '>
                                    <input
                                        className=" placeholder:text-[#7e7e7e] w-full my-2 mx-3 focus:outline-none"
                                        placeholder="ชื่อ"
                                    />
                                </form>
                            </div>
                            <div className='mt-4 w-full'>
                                <div className="mb-3">
                                    <p className="text-[20px]">นามสกุล :</p>

                                </div>
                                <form className=' border border-[#D8D8D8] '>
                                    <input
                                        className=" placeholder:text-[#7e7e7e] w-full my-2 mx-3 focus:outline-none"
                                        placeholder="นามสกุล"
                                    />
                                </form>
                            </div>
                        </div>
                        <div className='flex justify-between gap-x-8'>
                            <div className='w-full '>
                                <div className="mb-3">
                                    <p className="text-[20px]">Email : </p>
                                </div>
                                <form className=' border border-[#D8D8D8] '>
                                    <input
                                        className=" placeholder:text-[#7e7e7e] w-full my-2 mx-3 focus:outline-none"
                                        placeholder="Email"
                                    />
                                </form>
                            </div>
                            <div className='w-full'>
                                <div className="mb-3">
                                    <p className="text-[20px]">เบอร์โทรศัพท์ :</p>

                                </div>
                                <form className=' border border-[#D8D8D8] '>
                                    <input
                                        className=" placeholder:text-[#7e7e7e] w-full my-2 mx-3 focus:outline-none"
                                        placeholder="เบอร์โทรศัพท์"
                                    />
                                </form>
                            </div>
                        </div>
                    </div> */}


            </div>

        </div>
    );

}

export default RentHotel;