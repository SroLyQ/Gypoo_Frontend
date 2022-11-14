import React from 'react';
import { FaCheck, FaBed, FaRegCalendar } from 'react-icons/fa';
import { HomeIcon, PencilSquareIcon } from '@heroicons/react/20/solid';
import StarRating from '../components/StarRating';
import { Listbox } from '@headlessui/react';
import 'tw-elements';

function RentHotel() {
    return (
        <div className='p-32 font-kanit'>
            <div className="container mx-auto flex-wrap">
                <div className='block'>
                    <div className='md:hidden'>
                        <div className=" mx-10 rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl ">
                            <div className="mb-2 flex justify-between">
                                <p className="text-[26px]">
                                    ข้อมูลผู้จอง
                                </p>
                                <button>
                                    <PencilSquareIcon className="h-8 w-8 text-[#585858] mx-auto " />
                                </button>
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
                    <div className=" mx-40 rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl hidden md:block">
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
                <div className=" mx-40 rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl ">
                            <div className="mb-2 flex justify-between">
                                <p className="text-[26px]">
                                    ข้อมูลที่พัก
                                </p>
                                <button>
                                    <PencilSquareIcon className="h-8 w-8 text-[#585858] mx-auto " />
                                </button>
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

                {/* maybe edit popup */}
                {/* <div className=" border rounded-md border-[#999999] mt-[25px] p-5">
                    <div className="">
                        <div className="">
                            <p className="text-[26px]">
                                ข้อมูลผู้จอง
                            </p>
                        </div>
                    </div>
                    <div className="border border-[#D8D8D8]"></div>
                    <div className='my-8'>
                        <div className="mb-3">
                            <p className="text-[20px]">ชื่อ</p>
                        </div>
                        <form className=' border border-[#D8D8D8] '>
                            <input
                                className=" placeholder:text-[#7e7e7e] w-full my-2 mx-3 focus:outline-none"
                                placeholder="ชื่อ"
                            />
                        </form>
                    </div>
                    <div className='my-8'>
                        <div className="mb-3">
                            <p className="text-[20px]">นามสกุล</p>

                        </div>
                        <form className=' border border-[#D8D8D8] '>
                            <input
                                className=" placeholder:text-[#7e7e7e] w-full my-2 mx-3 focus:outline-none"
                                placeholder="นามสกุล"
                            />
                        </form>
                    </div>
                    <div className='my-8'>
                        <div className="mb-3">
                            <p className="text-[20px]">Email</p>

                        </div>
                        <form className=' border border-[#D8D8D8] '>
                            <input
                                className=" placeholder:text-[#7e7e7e] w-full my-2 mx-3 focus:outline-none"
                                placeholder="Email"
                            />
                        </form>
                    </div>
                    <div className='my-8'>
                        <div className="mb-3">
                            <p className="text-[20px]">เบอร์โทรศัพท์</p>
                        </div>
                        <form className=' border border-[#D8D8D8] '>
                            <input
                                className=" placeholder:text-[#7e7e7e] w-full my-2 mx-3 focus:outline-none"
                                placeholder="เบอร์โทรศัพท์"
                            />
                        </form>
                    </div>
                </div> */}
            </div>

        </div>
    );

}

export default RentHotel;