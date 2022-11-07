import React from 'react';
import { FaCheck, FaBed, FaRegCalendar } from 'react-icons/fa';
import StarRating from './StarRating';
import { Listbox } from '@headlessui/react';

function Restaurant() {
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

        <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px]">
          <div className="mb-[5px]">
            <div className="mb-[5px]">
              <p className="mb-[14px] text-[26px]">แผนที่</p>
            </div>
          </div>
          <div className="border border-[#D8D8D8]"></div>
          <p className="mt-[15px]">mapImg</p>
        </div>
        {/* ------ */}

        <div className="block ">
          <div className="md:hidden">
            <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px] ">
              <div className="mb-[14px]">
                <p className="text-[26px]">Boom Burapee</p>
              </div>
              <div className="border border-[#D8D8D8]"></div>

              <div className="border rounded-md border-[#D8D8D8] py-[15px] mt-[25px] gap-x-5 px-5">
                <div className="basis-1/4">
                  <p className="text-[20px]">ให้คะแนนที่พัก</p>
                  <div className="mb-[5px]">
                    <StarRating starSize={'24px'} />
                  </div>
                </div>
                <div className="border border-[#D8D8D8] my-5"></div>

                <form className="w-[100%]">
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

          <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px] hidden md:block ">
            <div className="mb-[14px]">
              <p className="text-[26px]">Boom Burapee</p>
            </div>
            <div className="border border-[#D8D8D8]"></div>

            <div className="border rounded-md border-[#D8D8D8] py-[15px] mt-[25px] flex gap-x-5 px-5 ">
              <div className="basis-1/4">
                <p className="text-[20px]">ให้คะแนนที่พัก</p>
                <div className="mb-[5px]">
                  <StarRating starSize={'24px'} />
                </div>
              </div>
              <div className="border border-[#D8D8D8]"></div>

              <form className="w-[75%]">
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
        {/* ------ */}
        <div className="block">
          <div className="md:hidden">
            <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px] ">
              <div className="mb-[14px]">
                <p className="text-[26px]">ความคิดเห็น</p>
              </div>
              <div className="border border-[#D8D8D8]"></div>

              <div className="border rounded-md border-[#D8D8D8] py-[15px] mt-[25px] gap-x-5 px-5 ">
                <div className="basis-1/4">
                  <p className="text-[20px]">Boom Burapee</p>
                  <div className="mb-[5px]">
                    <StarRating starSize={'24px'} />
                  </div>
                  <p className="text-[16px] text-sky-500">9.6/10 ดีมาก</p>
                </div>
                <div className="border border-[#D8D8D8] my-5"></div>

                <form className="w-full">
                  <div className=" text-slate-500">
                    <div className="px-2 py-3 w-full h-full grow resize-none focus:outline-none">
                      A little out of the way but tucked nicely away from the
                      noise and traffic. Spotless rooms and general areas. Staff
                      very friendly and although not much English spoken we got
                      by with smiles and Google translate.
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px] hidden md:block ">
            <div className="mb-[14px]">
              <p className="text-[26px]">ความคิดเห็น</p>
            </div>
            <div className="border border-[#D8D8D8]"></div>

            <div className="border rounded-md border-[#D8D8D8] py-[15px] mt-[25px] flex gap-x-5 px-5 ">
              <div className="basis-1/4">
                <p className="text-[20px]">Boom Burapee</p>
                <div className="mb-[5px]">
                  <StarRating starSize={'24px'} />
                </div>
                <p className="text-[16px] text-sky-500">9.6/10 ดีมาก</p>
              </div>
              <div className="border border-[#D8D8D8]"></div>

              <form className="w-[75%]">
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
      </div>
    </div>
  );
}

export default Restaurant;
