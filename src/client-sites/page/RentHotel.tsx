import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaCheck, FaBed, FaRegCalendar } from 'react-icons/fa';
import {
  HomeIcon,
  PencilSquareIcon,
  XMarkIcon,
  TicketIcon,
} from '@heroicons/react/20/solid';
import StarRating from '../components/StarRating';
import { Listbox } from '@headlessui/react';
import RentRoom from '../components/RentRoom';
import config from '../../config.json';
import apiClient from '../../api/apiClient';
import { getCurrentUser } from '../../services/userService';
import 'tw-elements';

interface room {
  idRoom: string;
  idHotel: string;
  roomType: string;
  guest: number;
  roomCount: number;
  currentRoom: number;
  picture: string[];
  roomPrice: number;
  discount: number;
  roomCount30Day: string[];
  service: {
    isWifi: boolean;
    isParking: boolean;
    isAnimals: boolean;
    isBreakFast: boolean;
    isBuffet: boolean;
    isOther: boolean;
  };
}

function RentHotel() {
  const [dataParams] = useSearchParams();
  const paramIdRoom = dataParams.get('idroom');
  const paramBooking = dataParams.get('booking');
  const paramCheckIn = dataParams.get('checkin');
  const paramCheckOut = dataParams.get('checkout');

  const [userID, setUserID] = useState<string>('');

  const [dataRoom, setDataRoom] = useState<room>();

  useEffect(() => {
    const getUserData = async () => {
      const userData: any = await getCurrentUser();
      setUserID(userData.userID);
    };
    getUserData();
    const getRoomData = async () => {
      const res = await apiClient(
        `${config.api_url.localHost}/Room/getroom/${paramIdRoom}`,
        {
          method: 'GET',
        },
      );
      setDataRoom(res.data);
    };
    getRoomData();
  }, []);

  const [isOpen, setIsOpen] = useState(true);
  const [useGuest, setUseGuest] = useState({
    firstName: 'โปรดใส่ข้อมูล',
    lastName: 'โปรดใส่ข้อมูล',
    email: 'โปรดใส่ข้อมูล',
    phone: 'โปรดใส่ข้อมูล',
  });
  const [useGuestForm, setUseGuestForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [payment, setPayment] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUseGuestForm({
      ...useGuestForm,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const useGuestHandler = () => {
    console.log(useGuestForm);
    if (useGuestForm.firstName == '') {
      alert('โปรดใสชื่อ');
    } else if (useGuestForm.lastName == '') {
      alert('โปรดใสนามสกุล');
    } else if (useGuestForm.email == '') {
      alert('โปรดใส Email');
    } else if (useGuestForm.phone == '') {
      alert('โปรดใสเบอร์โทรศัพท์');
    } else if (useGuestForm.phone.length != 10) {
      alert('หมายเลขโทรศัพท์ไม่ถูกต้อง');
    } else {
      setUseGuest(useGuestForm);
      setIsOpen(!isOpen);
    }
  };
  const toggleModel = () => {
    setIsOpen(!isOpen);
  };

  const dateList: any = [];

  const sendForm = async () => {
    const dateIn: any = paramCheckIn?.split('-');
    const dateOut: any = paramCheckOut?.split('-');

    if (Number(dateIn[1]) == Number(dateOut[1])) {
      if (Number(dateIn[2]) == Number(dateOut[2])) {
        let num = '';
        if (Number(dateIn[2]) < 10) {
          num = '0' + Number(dateIn[2]).toString();
          dateList.push(
            '' +
              num +
              '/' +
              dateIn[1].toString() +
              '/' +
              Number(dateIn[0]).toString(),
          );
        } else {
          dateList.push(
            '' +
              dateIn[2].toString() +
              '/' +
              dateIn[1].toString() +
              '/' +
              Number(dateIn[0]).toString(),
          );
        }
      } else if (Number(dateIn[2]) <= Number(dateOut[2])) {
        const max = Number(dateOut[2]) - Number(dateIn[2]);
        for (let i = 0; i <= max; i++) {
          let num = '';
          if (Number(dateIn[2]) + i < 10) {
            num = '0' + (Number(dateIn[2]) + i).toString();
            dateList.push(
              '' +
                num +
                '/' +
                dateIn[1].toString() +
                '/' +
                Number(dateIn[0]).toString(),
            );
          } else {
            dateList.push(
              '' +
                (Number(dateIn[2]) + i).toString() +
                '/' +
                dateIn[1].toString() +
                '/' +
                dateIn[0].toString(),
            );
          }
        }
      }
    } else if (Number(dateIn[1]) < Number(dateOut[1])) {
      const max = Number(dateOut[2]) + 30 - Number(dateIn[2]);
      let numDate = 0;
      for (let i = 0; i <= max; i++) {
        if (Number(dateIn[2]) + i > 30) {
          dateIn[2] = 1;
          dateIn[1] = 12;
          numDate = 0;
        }
        let num = '';
        if (Number(dateIn[2]) < 10) {
          num = '0' + (Number(dateIn[2]) + i).toString();
          dateList.push(
            '' +
              num +
              '/' +
              dateIn[1].toString() +
              '/' +
              Number(dateIn[0]).toString(),
          );
        } else {
          dateList.push(
            '' +
              (Number(dateIn[2]) + i).toString() +
              '/' +
              dateIn[1].toString() +
              '/' +
              dateIn[0].toString(),
          );
        }
        numDate = numDate + 1;
      }
    }
    console.log(dateList);

    const jason = JSON.stringify({
      idHotel: dataRoom?.idHotel,
      idRoom: dataRoom?.idRoom,
      idUser: userID || 'ไม่มีข้อมูล',
      firstName: useGuest.firstName,
      lastName: useGuest.lastName,
      email: useGuest.email,
      phone: useGuest.phone,
      payment: payment,
      roomBooking: paramBooking,
      price: Number(dataRoom?.roomPrice) - Number(dataRoom?.discount),
      dateBooking: dateList,
    });

    const res = await apiClient(`${config.api_url.localHost}/History`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: jason,
    });
    const ress = await apiClient(
      `${config.api_url.localHost}/Room/booking/${
        dataRoom?.idRoom
      }?numBooking=${Number(paramBooking)}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        data: dateList,
      },
    );
    //console.log(res.data);
    console.log(ress.data);
    // console.log(jasonDate)

    alert('Sucess');
    window.location.assign('/');
  };

  return (
    <div className="pt-[95px] font-kanit">
      <div className="container mx-auto flex-wrap">
        <div className="block">
          <div className="md:hidden">
            <div className="rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl">
              <div className="mb-2 flex justify-between">
                <p className="text-[26px]">ข้อมูลผู้จอง</p>
                <button>
                  <PencilSquareIcon
                    className="h-8 w-8 text-[#585858] mx-auto "
                    onClick={toggleModel}
                  />
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
                          <p className="text-[26px]">แก้ไขข้อมูล</p>
                          <button>
                            <XMarkIcon
                              className="h-8 w-8 text-[#585858] mx-auto "
                              onClick={toggleModel}
                            />
                          </button>
                        </div>
                        <div className="border border-[#D8D8D8] "></div>
                        <div className=" py-2 ">
                          <div className=" w-full ">
                            <div className="mb-3">
                              <p className="text-[20px]">ชื่อ : </p>
                            </div>
                            <form className=" border border-[#D8D8D8] rounded-md ">
                              <input
                                name="firstName"
                                onChange={changeHandler}
                                className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36 focus:outline-none"
                                placeholder="ชื่อ"
                              />
                            </form>
                          </div>
                          <div className=" w-full">
                            <div className="mb-2 mt-2">
                              <p className="text-[20px]">นามสกุล :</p>
                            </div>
                            <form className=" border border-[#D8D8D8] rounded-md">
                              <input
                                name="lastName"
                                onChange={changeHandler}
                                className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36  focus:outline-none"
                                placeholder="นามสกุล"
                              />
                            </form>
                          </div>
                        </div>

                        <div className="w-full ">
                          <div className="mb-2">
                            <p className="text-[20px]">Email : </p>
                          </div>
                          <form className=" border border-[#D8D8D8] rounded-md">
                            <input
                              name="email"
                              onChange={changeHandler}
                              className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36 focus:outline-none"
                              placeholder="Email"
                            />
                          </form>
                        </div>
                        <div className="w-full">
                          <div className="mb-2 mt-2">
                            <p className="text-[20px]">เบอร์โทรศัพท์ :</p>
                          </div>
                          <form className=" border border-[#D8D8D8] rounded-md">
                            <input
                              name="phone"
                              onChange={changeHandler}
                              className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36 focus:outline-none"
                              placeholder="เบอร์โทรศัพท์"
                            />
                          </form>
                        </div>

                        <div className="flex justify-end">
                          <button
                            className="bg-sky-500 hover:bg-sky-600 text-white rounded-md px-3 py-2 mt-5 "
                            onClick={useGuestHandler}
                          >
                            ยืนยัน
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="border border-[#D8D8D8]"></div>
              <div className="flex flex-wrap justify-between gap-x-4 py-4">
                <div className=" mt-4 w-full ">
                  <div className="mb-3">
                    <p className="text-[18px]">ชื่อ : </p>
                  </div>
                  <div className="rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]">
                    {useGuest.firstName}
                  </div>
                </div>
                <div className="mt-4 w-full">
                  <div className="mb-3">
                    <p className="text-[18px]">นามสกุล :</p>
                  </div>
                  <div className="rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]">
                    {useGuest.lastName}
                  </div>
                </div>
              </div>
              <div className="">
                <div className="w-full ">
                  <div className="mb-3">
                    <p className="text-[18px]">Email : </p>
                  </div>
                  <div className="rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]">
                    {useGuest.email}
                  </div>
                </div>
                <div className="w-full pt-3">
                  <div className="mb-3">
                    <p className="text-[18px]">เบอร์โทรศัพท์ :</p>
                  </div>
                  <div className="rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]">
                    {useGuest.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mx-48 rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl hidden md:block">
            <div className="mb-2 flex justify-between">
              <p className="text-[26px]">ข้อมูลผู้จอง</p>
              <button>
                <PencilSquareIcon
                  className="h-8 w-8 text-[#585858] mx-auto "
                  onClick={toggleModel}
                />
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
                        <p className="text-[26px]">แก้ไขข้อมูล</p>
                        <button>
                          <XMarkIcon
                            className="h-8 w-8 text-[#585858] mx-auto "
                            onClick={toggleModel}
                          />
                        </button>
                      </div>
                      <div className="border border-[#D8D8D8]"></div>
                      <div className="flex justify-between gap-x-10 py-4 ">
                        <div className=" mt-4 w-full ">
                          <div className="mb-3">
                            <p className="text-[20px]">ชื่อ : </p>
                          </div>
                          <form className=" border border-[#D8D8D8]  ">
                            <input
                              name="firstName"
                              onChange={changeHandler}
                              className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36 focus:outline-none"
                              placeholder="ชื่อ"
                            />
                          </form>
                        </div>
                        <div className="mt-4 w-full">
                          <div className="mb-3">
                            <p className="text-[20px]">นามสกุล :</p>
                          </div>
                          <form className=" border border-[#D8D8D8] ">
                            <input
                              name="lastName"
                              onChange={changeHandler}
                              className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36  focus:outline-none"
                              placeholder="นามสกุล"
                            />
                          </form>
                        </div>
                      </div>
                      <div className="flex justify-between gap-x-8">
                        <div className="w-full ">
                          <div className="mb-3">
                            <p className="text-[20px]">Email : </p>
                          </div>
                          <form className=" border border-[#D8D8D8] ">
                            <input
                              name="email"
                              onChange={changeHandler}
                              className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36 focus:outline-none"
                              placeholder="Email"
                            />
                          </form>
                        </div>
                        <div className="w-full">
                          <div className="mb-3">
                            <p className="text-[20px]">เบอร์โทรศัพท์ :</p>
                          </div>
                          <form className=" border border-[#D8D8D8] ">
                            <input
                              name="phone"
                              onChange={changeHandler}
                              className=" placeholder:text-[#7e7e7e] w-full my-2 pl-3 mr-36 focus:outline-none"
                              placeholder="เบอร์โทรศัพท์"
                            />
                          </form>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          className="bg-sky-500 hover:bg-sky-600 text-white rounded-md px-3 py-2 mt-5 "
                          onClick={useGuestHandler}
                        >
                          ยืนยัน
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="border border-[#D8D8D8]"></div>
            <div className="flex justify-between gap-x-8 py-4">
              <div className=" mt-4 w-full ">
                <div className="mb-3">
                  <p className="text-[20px]">ชื่อ : </p>
                </div>
                <div className="rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]">
                  {useGuest.firstName}
                </div>
              </div>
              <div className="mt-4 w-full">
                <div className="mb-3">
                  <p className="text-[20px]">นามสกุล :</p>
                </div>
                <div className="rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]">
                  {useGuest.lastName}
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-x-8">
              <div className="w-full ">
                <div className="mb-3">
                  <p className="text-[20px]">Email : </p>
                </div>
                <div className="rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]">
                  {useGuest.email}
                </div>
              </div>
              <div className="w-full">
                <div className="mb-3">
                  <p className="text-[20px]">เบอร์โทรศัพท์ :</p>
                </div>
                <div className="rounded-md border border-[#D8D8D8] py-2 px-3 text-[#585858]">
                  {useGuest.phone}
                </div>
              </div>
            </div>
          </div>
        </div>

        <RentRoom
          idRoom={paramIdRoom}
          checkIn={paramCheckIn?.toString()}
          checkOut={paramCheckOut?.toString()}
        />

        <div className="block">
          <div className="md:hidden">
            <div className="rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl">
              <div className="mb-2 flex justify-between">
                <p className="text-[26px]">วิธีการชำระเงิน</p>
              </div>
              <div className="border border-[#D8D8D8]"></div>
              <div className="border p-5 mt-5 rounded-md flex-wrap">
                <button
                  onClick={() => {
                    setPayment('QR Promptpay');
                  }}
                  className="bg-slate-300 p-2 rounded-lg mr-10 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]"
                >
                  QR Promptpay
                </button>
                <button
                  onClick={() => {
                    setPayment('Debit / Credit Card');
                  }}
                  className="bg-slate-300 p-2 rounded-lg mr-10 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]"
                >
                  Debit / Credit Card
                </button>
                <button
                  onClick={() => {
                    setPayment('Mobile Banking');
                  }}
                  className="bg-slate-300 p-2 rounded-lg mr-10 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]"
                >
                  Mobile Banking
                </button>
                <button
                  onClick={() => {
                    setPayment('Transfer / Pay via bank account');
                  }}
                  className="bg-slate-300 p-2 rounded-lg mr-10 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]"
                >
                  โอน / ชำระผ่านบัญชีธนาคาร
                </button>
              </div>
            </div>
          </div>
          <div className=" mx-48 rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl hidden md:block">
            <div className="mb-2 flex justify-between">
              <p className="text-[26px]">วิธีการชำระเงิน</p>
            </div>
            <div className="border border-[#D8D8D8]"></div>
            <div className="border p-5 mt-5 rounded-md flex-wrap">
              <button
                onClick={() => {
                  setPayment('QR Promptpay');
                }}
                className="bg-slate-300 p-2 rounded-lg mr-8 mt-2 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]"
              >
                QR Promptpay
              </button>
              <button
                onClick={() => {
                  setPayment('Debit / Credit Card');
                }}
                className="bg-slate-300 p-2 rounded-lg mr-8 mt-2 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]"
              >
                Debit / Credit Card
              </button>
              <button
                onClick={() => {
                  setPayment('Mobile Banking');
                }}
                className="bg-slate-300 p-2 rounded-lg mr-8 mt-2 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]"
              >
                Mobile Banking
              </button>
              <button
                onClick={() => {
                  setPayment('Transfer / Pay via bank account');
                }}
                className="bg-slate-300 p-2 rounded-lg mr-8 mt-2 mb-3 hover:bg-[#AACEDA] focus:outline-none focus:ring focus:ring-[#4A94AB]"
              >
                โอน / ชำระผ่านบัญชีธนาคาร
              </button>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="md:hidden">
            <div className="rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl">
              <div className="mb-2 flex justify-between">
                <p className="text-[26px]">ข้อมูลการชำระเงิน</p>
              </div>

              <div className=" border rounded-md border-[#999999] px-5 py-4 mt-5">
                <div className="flex justify-between mb-2">
                  <p>ราคาที่พัก (x{1} คืน)</p>
                  <p>฿ {dataRoom?.roomPrice}</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>จำนวนที่พัก (ห้อง)</p>
                  <p>฿ {paramBooking}</p>
                </div>
                <div className=" bg-green-200 border border-green-500 rounded-md px-3 flex justify-between mb-2">
                  <div className="flex">
                    <TicketIcon className="h-4 w-4  mt-1 mr-2" />
                    <p>ส่วนลด</p>
                  </div>
                  <p>-฿ {dataRoom?.discount}</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>ยอดชำระเงินทั้งหมด</p>
                  <p>
                    ฿ {Number(dataRoom?.roomPrice) - Number(dataRoom?.discount)}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={sendForm}
                    className="bg-sky-500 hover:bg-sky-600  text-white px-4 py-2 rounded-lg mt-3"
                  >
                    ยืนยันการชำระเงิน
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-48 rounded-md border-[#999999] mt-[25px] pt-5 pb-10 px-5 shadow-2xl hidden md:block">
            <div className="mb-2 flex justify-between">
              <p className="text-[26px]">ข้อมูลการชำระเงิน</p>
            </div>
            <div className=" border rounded-md border-[#999999] px-5 py-4 mt-5">
              <div className="flex justify-between mb-2">
                <p>ราคาที่พัก (x{1} คืน)</p>
                <p>฿ {dataRoom?.roomPrice}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>จำนวนที่พัก (ห้อง)</p>
                <p>{paramBooking}</p>
              </div>
              <div className=" bg-green-200 border border-green-500 rounded-md px-3 flex justify-between mb-2">
                <div className="flex">
                  <TicketIcon className="h-4 w-4  mt-1 mr-2" />
                  <p>ส่วนลด (ห้อง)</p>
                </div>
                <p>-฿ {dataRoom?.discount}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>ยอดชำระเงินทั้งหมด</p>
                <p>
                  ฿{' '}
                  {(Number(dataRoom?.roomPrice) - Number(dataRoom?.discount)) *
                    Number(paramBooking)}
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={sendForm}
                  className="bg-sky-500 hover:bg-sky-600  text-white px-4 py-2 rounded-lg mt-3"
                >
                  ยืนยันการชำระเงิน
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentHotel;
