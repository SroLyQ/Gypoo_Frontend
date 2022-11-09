import React from 'react';
import { FaCheck, FaBed, FaRegCalendar } from 'react-icons/fa';
import StarRating from './StarRating';
import { Listbox } from '@headlessui/react';

function hotel() {
  
  return (
    <div className="pt-[95px]">
      <div className="container mx-auto flex-wrap">
        <div className="mx-8 border rounded-md border-[#999999] p-[25px] mt-[25px]">
          <div>imgSlider</div>
        </div>

        <div className="mx-8 border rounded-md border-[#999999] p-[25px] pt-[15px] mt-[25px]">
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

        <div className="mx-8 mt-[25px] grid grid-cols-2 max-sm:grid-cols-1 gap-8">
          <div className="border rounded-md border-[#999999] p-[25px] pt-[15px] basis-1/2">
            <p className="mb-[14px] text-[26px]">สิ่งอำนวยความสะดวก</p>
            <div className="border border-[#D8D8D8]"></div>
            <div className="mt-[15px] grid grid-cols-2">
              <div className="flex flex-row p-[10px]">
                <FaCheck className="self-center" />
                <p className="pl-[10px] self-center">อาหารเช้า</p>
              </div>

              <div className="flex flex-row p-[10px]">
                <FaCheck className="self-center" />
                <p className="pl-[10px] self-center">สัตว์เลี้ยงเข้าพักได้</p>
              </div>

              <div className="flex flex-row p-[10px]">
                <FaCheck className="self-center" />
                <p className="pl-[10px] self-center">ที่จอดรถ</p>
              </div>

              <div className="flex flex-row p-[10px]">
                <FaCheck className="self-center" />
                <p className="pl-[10px] self-center">ปิ้งบาร์บีคิว</p>
              </div>

              <div className="flex flex-row p-[10px]">
                <FaCheck className="self-center" />
                <p className="pl-[10px] self-center">Free Wi-Fi</p>
              </div>
            </div>
          </div>
          <div className="border rounded-md border-[#999999] p-[25px] pt-[15px] basis-1/2">
            <p className="mb-[14px] text-[26px]">แผนที่</p>
            <div className="border border-[#D8D8D8]"></div>
            <div className="mt-[15px]">
              googleMAP
            </div>
          </div>
        </div>

        <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px] flex flex-col flex-wrap">
          <div className="mb-[14px]">
            <p className="text-[26px]">Boom Burapee</p>
          </div>
          <div className="border border-[#D8D8D8]"></div>
          <div className="border rounded-md border-[#D8D8D8] mt-[25px] flex flex-row">
            <div className="p-[25px] pl-[40px] basis-1/4">
              <p>ให้คะแนนที่พัก</p>

              <div className="my-[5px] flex flex-row">
                <StarRating starSize={'25px'} />
              </div>

              <div className="flex flex-col flex-wrap">
                <div className="flex flex-row flex-wrap">
                  <FaBed className="self-center" />
                  <p>ddddddd</p>
                </div>
                <div className="flex flex-row flex-wrap">
                  <FaRegCalendar className="self-center" />
                  <p>yyyyyyy</p>
                </div>
              </div>
            </div>
            <div className="border border-[#D8D8D8] my-[10px] basis-0"></div>
            <form className="p-[25px] basis-3/4">
              <div className="border rounded-md border-[#D8D8D8] p-[1px] text-slate-500">
                <textarea
                  className=" px-2 py-3 w-full h-full grow resize-none focus:outline-none"
                  placeholder="Write a comment..."
                />
                <div className="flex flex-row-reverse pr-3 pb-3">
                  <button className="border rounded-md border-none bg-sky-500 hover:bg-sky-600 text-white py-2 px-14">
                    ยืนยัน
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="mx-8 border rounded-md border-[#999999] p-[25px] mt-[25px] flex flex-col gap-y-6">
          <p className="mb-8">ความคิดเห็น</p>

          <div className="border rounded-md border-[#D8D8D8]">
            <div className="flex flex-row">
              <div className="p-[25px] pl-[40px] basis-1/4">
                Boom Burapee
                <div className="my-[5px] flex flex-row">
                  <StarRating starSize={'25px'} />
                </div>
                <div className="flex flex-col flex-wrap">
                  <div className="flex flex-row flex-wrap">
                    <FaBed className="self-center" />
                    <p>ddddddd</p>
                  </div>
                  <div className="flex flex-row flex-wrap">
                    <FaRegCalendar className="self-center" />
                    <p>yyyyyyy</p>
                  </div>
                </div>
              </div>
              <div className="border border-[#D8D8D8] my-[10px] basis-0"></div>
              <div className="p-[25px] basis-3/4">
                <p>
                  A little out of the way but tucked nicely away from the noise
                  and traffic. Spotless rooms and general areas. Staff very
                  friendly and although not much English spoken we got by with
                  smiles and Google translate.
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-md border-[#D8D8D8]">
            <div className="flex flex-row">
              <div className="p-[25px] pl-[40px] basis-1/4">
                Boom Burapee
                <div className="my-[5px] flex flex-row">
                  <StarRating starSize={'25px'} />
                </div>
                <div className="flex flex-col flex-wrap">
                  <div className="flex flex-row flex-wrap">
                    <FaBed className="self-center" />
                    <p>ddddddd</p>
                  </div>
                  <div className="flex flex-row flex-wrap">
                    <FaRegCalendar className="self-center" />
                    <p>yyyyyyy</p>
                  </div>
                </div>
              </div>
              <div className="border border-[#D8D8D8] my-[10px] basis-0"></div>
              <div className="p-[25px] basis-3/4">
                <p>
                  A little out of the way but tucked nicely away from the noise
                  and traffic. Spotless rooms and general areas. Staff very
                  friendly and although not much English spoken we got by with
                  smiles and Google translate.
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-md border-[#D8D8D8]">
            <div className="flex flex-row">
              <div className="p-[25px] pl-[40px] basis-1/4">
                Boom Burapee
                <div className="my-[5px] flex flex-row">
                  <StarRating starSize={'25px'} />
                </div>
                <div className="flex flex-col flex-wrap">
                  <div className="flex flex-row flex-wrap">
                    <FaBed className="self-center" />
                    <p>ddddddd</p>
                  </div>
                  <div className="flex flex-row flex-wrap">
                    <FaRegCalendar className="self-center" />
                    <p>yyyyyyy</p>
                  </div>
                </div>
              </div>
              <div className="border border-[#D8D8D8] my-[10px] basis-0"></div>
              <div className="p-[25px] basis-3/4">
                <p>
                  A little out of the way but tucked nicely away from the noise
                  and traffic. Spotless rooms and general areas. Staff very
                  friendly and although not much English spoken we got by with
                  smiles and Google translate.
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-md border-[#D8D8D8]">
            <div className="flex flex-row">
              <div className="p-[25px] pl-[40px] basis-1/4">
                Boom Burapee
                <div className="my-[5px] flex flex-row">
                  <StarRating starSize={'25px'} />
                </div>
                <div className="flex flex-col flex-wrap">
                  <div className="flex flex-row flex-wrap">
                    <FaBed className="self-center" />
                    <p>ddddddd</p>
                  </div>
                  <div className="flex flex-row flex-wrap">
                    <FaRegCalendar className="self-center" />
                    <p>yyyyyyy</p>
                  </div>
                </div>
              </div>
              <div className="border border-[#D8D8D8] my-[10px] basis-0"></div>
              <div className="p-[25px] basis-3/4">
                <p>
                  A little out of the way but tucked nicely away from the noise
                  and traffic. Spotless rooms and general areas. Staff very
                  friendly and although not much English spoken we got by with
                  smiles and Google translate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hotel;
