import React, { useState, useEffect } from 'react';
import { FaCheck, FaBed, FaRegCalendar } from 'react-icons/fa';
import ListBox from '../components/ListBox';
import StarRating from '../components/StarRating';
import GooGleMAP from '../components/googleMap';
import Roomtype from '../components/Roomtype';
import 'tw-elements';
import axios from 'axios';
import Imgslide from '../components/imgslide';

const testFaci = [
  'อาหารเช้า',
  'สัตว์เลี้ยงเข้าพักได้',
  'ที่จอดรถ',
  'ปิ้งบาร์บีคิว',
  'Free Wi-Fi',
];

const baseURL = 'https://localhost:7066/api';

function hotel() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseURL}/Hotel/1`)
      .then((Response) => {
        setPost(Response.data);
        console.log(Response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className="pt-[95px]">
      <div className="container mx-auto flex-wrap grid">
        <Imgslide />

        <div className="block">
          <div className="mx-48 max-md:mx-8 border rounded-md border-[#999999] p-[25px] pt-[15px] mt-[25px]">
            <div className="mb-[5px]">
              <div className="mb-[5px]">
                <p className="text-[26px] font-semibold">
                  กัสเซอร์ปาร์ค อพาร์ตเมนท์
                </p>
              </div>
              <div className="mb-[5px]">
                <StarRating starSize={'32px'} />
              </div>
              <div>
                <p className="text-[16px]">10.00 very good</p>
              </div>
            </div>
            <div className="border border-[#D8D8D8]"></div>
            <p className="mt-[15px]">
              ที่พักให้บริการที่จอดรถฟรีเพื่อการเดินทางเข้าออกที่พักได้อย่างสะดวกสบาย
              รวมถึง Wi-Fi ฟรี ให้ท่องเน็ตได้ทุกเมื่อ
              ที่พักตั้งอยู่ในย่านตัวเมืองของขอนแก่น
              ผู้เข้าพักจึงได้อยู่ใกล้สถานที่ท่องเที่ยวน่าสนใจและร้านอาหารอร่อยๆ
              ทริปยังไม่จบถ้าไม่ได้แวะไปที่เที่ยวชื่อดังอย่าง พระธาตุขามแก่น
            </p>
          </div>
        </div>

        <div className="block">
          <div className="mx-48 max-md:mx-8 mt-[25px] grid grid-cols-2 max-md:grid-cols-1 gap-x-8 gap-y-6">
            <div className="border rounded-md border-[#999999] p-[25px] pt-[15px] basis-1/2">
              <p className="mb-[14px] text-[26px]">สิ่งอำนวยความสะดวก</p>
              <div className="border border-[#D8D8D8]"></div>
              <div className="mt-[15px] grid grid-cols-2">
                {testFaci.map((testFaci, i) => (
                  <div className="flex flex-row p-[10px]">
                    <FaCheck className="self-center min-w-[16px]" />
                    <p className="pl-[10px] self-center">{testFaci}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border rounded-md border-[#999999] p-[25px] pt-[15px] basis-1/2">
              <p className="mb-[14px] text-[26px]">แผนที่</p>
              <div className="border border-[#D8D8D8]"></div>
              <div className="mt-[15px]">
                <GooGleMAP></GooGleMAP>
              </div>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="mx-48 max-md:mx-8">
            <Roomtype />
          </div>
        </div>

        <div className="block">
          <div className="mx-48 max-md:mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px]">
            <div className="mb-[14px]">
              <p className="text-[26px]">Boom Burapee</p>
            </div>
            <div className="border border-[#D8D8D8]"></div>

            <div className="border rounded-md border-[#D8D8D8] py-[15px] mt-[25px] flex max-md:flex-wrap gap-x-5 px-5 ">
              <div className="basis-1/4 max-md:mb-5 max-md:basis-full">
                <p className="text-[20px]">ให้คะแนนที่พัก</p>
                <div className="my-[5px] flex flex-row">
                  <StarRating starSize={'25px'} />
                </div>

                <div className="flex flex-col flex-wrap">
                  <div className="flex flex-row flex-wrap">
                    <FaBed className="self-center" />
                    <ListBox />
                  </div>
                  <div className="flex flex-row flex-wrap">
                    <FaRegCalendar className="self-center" />
                    <ListBox />
                  </div>
                </div>
              </div>
              <div className="border border-[#D8D8D8] max-md:hidden"></div>

              <form className="w-[75%] max-md:w-[100%]">
                <div className="border rounded-md border-[#D8D8D8] p-3 text-slate-500">
                  <textarea
                    className=" px-2 py-3 w-full h-full grow resize-none focus:outline-none"
                    placeholder="Write a comment..."
                  />
                  <div className="flex flex-row-reverse">
                    <button className="border rounded-md border-sky-500 bg-sky-500 text-white py-[1%] px-[5%]">
                      ยืนยัน
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="block">
          <div className="mx-48 max-md:mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px]">
            <div className="mb-[14px]">
              <p className="text-[26px]">ความคิดเห็น</p>
            </div>
            <div className="border border-[#D8D8D8]"></div>

            <div className="border rounded-md border-[#D8D8D8] py-[15px] mt-[25px] flex max-md:flex-wrap gap-x-5 px-5 ">
              <div className="basis-1/4 max-md:basis-full">
                <p className="text-[20px]">Boom Burapee</p>
                <div className="my-[5px] flex flex-row">
                  <StarRating starSize={'25px'} />
                </div>
                <p className="text-[16px] text-sky-500">9.6/10 ดีมาก</p>
                <div className="flex flex-col flex-wrap">
                  <div className="flex flex-row flex-wrap">
                    <FaBed className="self-center" />
                    <p>ห้องแพงสุดอ่ะ</p>
                  </div>
                  <div className="flex flex-row flex-wrap">
                    <FaRegCalendar className="self-center" />
                    <p>พักยันชาติหน้าตอนบ่ายๆ อ่ะ</p>
                  </div>
                </div>
              </div>
              <div className="border border-[#D8D8D8] max-md:my-3 max-md:w-[100%]"></div>

              <form className="w-[75%] max-md:w-[100%]">
                <div className=" text-slate-500">
                  <div className="px-2 py-3 w-full h-full grow resize-none focus:outline-none">
                    A little out of the way but tucked nicely away from the
                    noise and traffic. Spotless rooms and general areas. Staff
                    very friendly and although not much English spoken we got by
                    with smiles and Google translate.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default hotel;
