import React from 'react';
import { FaCheck, FaBed, FaRegCalendar } from 'react-icons/fa';
import ListBox from '../components/ListBox';
import StarRating from '../components/StarRating';

function hotel() {
  return (
    <div className="pt-[95px]">
      <div className="container mx-auto flex-wrap">
        <div className="mx-8 border rounded-md border-[#999999] p-[25px] mt-[25px]">
          <div>imgSlider</div>
        </div>

        <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px]">
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

        <div className="mx-8 mt-[25px] grid grid-cols-2 gap-x-8">
          <div className="border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] basis-1/2">
            <p className="mb-[14px] text-[26px]">สิ่งอำนวยความสะดวก</p>
            <div className="border border-[#D8D8D8]"></div>
            <div className="mt-[15px]">
              <FaCheck />
            </div>
          </div>
          <div className="border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] basis-1/2">
            <p className="mb-[14px] text-[26px]">แผนที่</p>
            <div className="border border-[#D8D8D8]"></div>
            <div className="mt-[15px]">mapImg</div>
          </div>
        </div>

        <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px] flex flex-col flex-wrap">
          <div className="mb-[14px]">
            <p className="text-[26px]">Boom Burapee</p>
          </div>
          <div className="border border-[#D8D8D8]"></div>
          <div className="border rounded-md border-[#D8D8D8] py-[15px] pl-[40px] pr-[20px] mt-[25px] flex flex-row flex-wrap gap-x-5">
            <div className="basis-1/4">
              <p>ให้คะแนนที่พัก</p>

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
            <div className="border border-[#D8D8D8]"></div>
            <form className="grow">
              <div className="border rounded-md border-[#D8D8D8] p-[1px] text-slate-500">
                <textarea
                  className=" px-2 py-3 w-full h-full grow resize-none focus:outline-none"
                  placeholder="Write a comment..."
                />
                <div className="flex flex-row-reverse pr-3 pb-3">
                  <button className="border rounded-md border-sky-500 bg-sky-500 text-white py-2 px-14">
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
            <div className="flex flex-row flex-wrap gap-x-5">
              <div className="border rounded-md border-[#999999] p-[25px] basis-1/4">
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
              <div className="border border-[#D8D8D8]"></div>
              <div className="border rounded-md border-[#999999] p-[25px] grow">
                ให้คะแนนที่พัก
              </div>
            </div>
          </div>

          <div className="border rounded-md border-[#D8D8D8]">
            <div className="flex flex-row flex-wrap gap-x-5">
              <div className="border rounded-md border-[#999999] p-[25px] basis-1/4">
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
              <div className="border border-[#D8D8D8]"></div>
              <div className="border rounded-md border-[#999999] p-[25px] grow">
                ให้คะแนนที่พัก
              </div>
            </div>
          </div>

          <div className="border rounded-md border-[#D8D8D8]">
            <div className="flex flex-row flex-wrap gap-x-5">
              <div className="border rounded-md border-[#999999] p-[25px] basis-1/4">
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
              <div className="border border-[#D8D8D8]"></div>
              <div className="border rounded-md border-[#999999] p-[25px] grow">
                ให้คะแนนที่พัก
              </div>
            </div>
          </div>

          <div className="border rounded-md border-[#D8D8D8]">
            <div className="flex flex-row flex-wrap gap-x-5">
              <div className="border rounded-md border-[#999999] p-[25px] basis-1/4">
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
              <div className="border border-[#D8D8D8]"></div>
              <div className="border rounded-md border-[#999999] p-[25px] grow">
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hotel;
