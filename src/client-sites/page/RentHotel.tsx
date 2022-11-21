import React, { useState } from 'react';
import { FaCheck, FaBed, FaRegCalendar } from 'react-icons/fa';
import { HomeIcon, PencilSquareIcon, XMarkIcon ,TicketIcon} from '@heroicons/react/20/solid';
import StarRating from '../components/StarRating';
import { Listbox } from '@headlessui/react';
import RentRoom from '../components/RentRoom';
import config from '../../config.json';
import apiClient from '../../api/apiClient';
import 'tw-elements';

function RentHotel() {
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

    const [isOpen, setIsOpen] = useState(true);
    const [useGuest,setUseGuest] = useState({
        firstName : "โปรกใสข้อมูล",
        lastName : "โปรกใสข้อมูล",
        email : "โปรกใสข้อมูล",
        phone : "โปรกใสข้อมูล"
    });
    const [useGuestForm,setUseGuestForm] = useState({
        firstName : "",
        lastName : "",
        email : "",
        phone : ""
    });
    const [payment,setPayment] = useState('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUseGuestForm({ ...useGuestForm, [event.currentTarget.name]: event.currentTarget.value });
    };
    const useGuestHandler = () => {
        console.log(useGuestForm)
        if(useGuestForm.firstName == ''){
            alert("โปรดใสชื่อ")
        } else if(useGuestForm.lastName == '') {
            alert("โปรดใสนามสกุล")
        } else if(useGuestForm.email == '') {
            alert("โปรดใส Email")
        } else if(useGuestForm.phone == '') {
            alert("โปรดใสเบอร์โทรศัพท์")
        } else if(useGuestForm.phone.length != 10) {
            alert("หมายเลขโทรศัพท์ไม่ถูกต้อง")
        } else {
            setUseGuest(useGuestForm)
            setIsOpen(!isOpen);
        } 
    }
    const toggleModel = () => {
        setIsOpen(!isOpen);
    };

    const sendForm = async () => 
    {
        console.log()
        const jason = JSON.stringify({
            idHotel: "",
            idRoom: "",
            idUser: "",
            firstName : useGuest.firstName,
            lastName : useGuest.lastName,
            email : useGuest.email,
            phone : useGuest.phone,
            payment : payment,
            dateIn : "",
            dateOut : "",
            roomcount : 0,
            roomprice : 0,
        });

        const res = await apiClient(`${config.api_url.localHost}/renthotel `,{method : 'POST',headers :{"Content-Type" : "application/json"} ,data : jason})
        console.log(res.data);
    }

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
                                                                name = "firstName"
                                                                onChange={changeHandler}
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
                                                                name = "lastName"
                                                                onChange={changeHandler}
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
                                                                name = "email"
                                                                onChange={changeHandler}
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
                                                                name = "phone"
                                                                onChange={changeHandler}
                                                                className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36 focus:outline-none"
                                                                placeholder="เบอร์โทรศัพท์"
                                                            />
                                                        </form>
                                                    </div>

                                                
                                                <div className='flex justify-end'>
                                                    <button className='bg-sky-500 hover:bg-sky-600 text-white rounded-md px-3 py-2 mt-5 '
                                                    onClick={useGuestHandler}>
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
                                        {useGuest.firstName}
                                    </div>
                                </div>
                                <div className='mt-4 w-full'>
                                    <div className="mb-3">
                                        <p className="text-[18px]">นามสกุล :</p>

                                    </div>
                                    <div className='rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]'>
                                        {useGuest.lastName}
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='w-full '>
                                    <div className="mb-3">
                                        <p className="text-[18px]">Email : </p>
                                    </div>
                                    <div className='rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]'>
                                        {useGuest.email}
                                    </div>
                                </div>
                                <div className='w-full pt-3'>
                                    <div className="mb-3">
                                        <p className="text-[18px]">เบอร์โทรศัพท์ :</p>

                                    </div>
                                    <div className='rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]'>
                                        {useGuest.phone}
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
                                                            name = "firstName"
                                                            onChange={changeHandler}
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
                                                            name = "lastName"
                                                            onChange={changeHandler}
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
                                                            name = "email"
                                                            onChange={changeHandler}
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
                                                            name = "phone"
                                                            onChange={changeHandler}
                                                            className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36 focus:outline-none"
                                                            placeholder="เบอร์โทรศัพท์"
                                                        />
                                                    </form>
                                                </div>

                                            </div>
                                            <div className='flex justify-end'>
                                                <button className='bg-sky-500 hover:bg-sky-600 text-white rounded-md px-3 py-2 mt-5 '
                                                onClick={useGuestHandler}>
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
                                    {useGuest.firstName}
                                </div>
                            </div>
                            <div className='mt-4 w-full'>
                                <div className="mb-3">
                                    <p className="text-[20px]">นามสกุล :</p>

                                </div>
                                <div className='rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]'>
                                    {useGuest.lastName}
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between gap-x-8'>
                            <div className='w-full '>
                                <div className="mb-3">
                                    <p className="text-[20px]">Email : </p>
                                </div>
                                <div className='rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]'>
                                    {useGuest.email}
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className="mb-3">
                                    <p className="text-[20px]">เบอร์โทรศัพท์ :</p>

                                </div>
                                <div className='rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]'>
                                    {useGuest.phone}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RentRoom rentroom={paymentroom} />

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
                                <button 
                                onClick={() => {setPayment('QR Promptpay')}}
                                className='bg-slate-300 p-2 rounded-lg mr-10 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                    QR Promptpay
                                </button>
                                <button 
                                onClick={() => {setPayment('Debit / Credit Card')}}
                                className='bg-slate-300 p-2 rounded-lg mr-10 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                    Debit / Credit Card
                                </button>
                                <button
                                onClick={() => {setPayment('Mobile Banking')}}
                                className='bg-slate-300 p-2 rounded-lg mr-10 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                    Mobile Banking
                                </button>
                                <button
                                onClick={() => {setPayment('Transfer / Pay via bank account')}}
                                className='bg-slate-300 p-2 rounded-lg mr-10 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
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
                            <button
                            onClick={() => {setPayment('QR Promptpay')}} 
                            className='bg-slate-300 p-2 rounded-lg mr-8 mt-2 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                QR Promptpay
                            </button>
                            <button 
                            onClick={() => {setPayment('Debit / Credit Card')}} 
                            className='bg-slate-300 p-2 rounded-lg mr-8 mt-2 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                Debit / Credit Card
                            </button>
                            <button 
                            onClick={() => {setPayment('Mobile Banking')}} 
                            className='bg-slate-300 p-2 rounded-lg mr-8 mt-2 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                Mobile Banking
                            </button>
                            <button 
                            onClick={() => {setPayment('Transfer / Pay via bank account')}}
                            className='bg-slate-300 p-2 rounded-lg mr-8 mt-2 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]'>
                                โอน / ชำระผ่านบัญชีธนาคาร
                            </button>
                        </div>
                    </div>
                </div>

                {/* <PaymentRoom /> */}

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
                                <button
                                onClick={sendForm}
                                className='bg-sky-500 hover:bg-sky-600  text-white px-4 py-2 rounded-lg mt-3' >
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
                                <button 
                                onClick={sendForm}
                                className='bg-sky-500 hover:bg-sky-600  text-white px-4 py-2 rounded-lg mt-3' >
                                    ยืนยันการชำระเงิน
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>

            </div>

        </div>
    );

}

export default RentHotel;