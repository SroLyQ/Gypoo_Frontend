import React from 'react';


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

            <div className="mb-[5px]">star</div>

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
            {/* <div className="mb-[5px]">
              <StarRating starSize={'32px'} />
            </div> */}
          </div>
          <div className="border border-[#D8D8D8]"></div>
          <p className="mt-[15px]">mapImg</p>
        </div>

        <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px] flex flex-col flex-wrap">
          <div className="mb-[14px]">
            <p className="text-[26px]">Boom Burapee</p>
          </div>
          <div className="border border-[#D8D8D8]"></div>

          <div className="border rounded-md border-[#D8D8D8] py-[15px] pl-[40px] pr-[20px] mt-[25px] flex flex-row gap-x-5 basis-1/3 ">
            <div className="basis-1/4">
              <p className="text-[20px]">ให้คะแนนที่พัก</p>
              <div className="mb-[5px]">star</div>
            </div>
            <div className="border border-[#D8D8D8]"></div>

            <div className="flex w-[73%] ">
              <form className="grow">
                <div className="border rounded-md border-[#D8D8D8] p-3 text-slate-500">
                  <textarea
                    className=" px-2 py-3 w-full h-full "
                    placeholder="Write a comment..."
                  />
                  <div className="flex flex-row-reverse">
                    <button className="border rounded-md border-sky-500 bg-sky-500 text-white py-2 px-14">
                      ยืนยัน
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mx-8 border rounded-md border-[#999999] p-[25px] mt-[25px] flex flex-col">
          <div className="mb-[14px]">
            <p className="text-[26px]">ความคิดเห็น</p>
          </div>

          <div className="border rounded-md border-[#D8D8D8] py-[15px] pl-[40px] pr-[20px] mt-[25px] flex flex-row gap-x-5 basis-1/3 ">
            <div className="basis-1/4">
              <p className="text-[20px]">Boom Burapee</p>

              <div className="mb-[5px]">star</div>

              <p className="text-[16px] text-sky-500">9.6/10 ดีมาก</p>
            </div>
            <div className="border border-[#D8D8D8]"></div>

            <div className="flex w-[73%] ">
              <div className="border rounded-md border-[#D8D8D8] p-5 text-slate-500">
                A little out of the way but tucked nicely away from the noise
                and traffic. Spotless rooms and general areas. Staff very
                friendly and although not much English spoken we got by with
                smiles and Google translate.
              </div>
            </div>
          </div>

          <div className="border rounded-md border-[#D8D8D8] py-[15px] pl-[40px] pr-[20px] mt-[25px] flex flex-row gap-x-5 basis-1/3 ">
            <div className="basis-1/4">
              <p className="text-[20px]">Boom Burapee</p>

              <div className="mb-[5px]">star</div>

              <p className="text-[16px] text-sky-500">9.6/10 ดีมาก</p>
            </div>
            <div className="border border-[#D8D8D8]"></div>

            <div className="flex w-[73%] ">
              <div className="border rounded-md border-[#D8D8D8] p-5 text-slate-500">
                A little out of the way but tucked nicely away from the noise
                and traffic. Spotless rooms and general areas. Staff very
                friendly and although not much English spoken we got by with
                smiles and Google translate.
              </div>
            </div>
          </div>

          <div className="border rounded-md border-[#D8D8D8] py-[15px] pl-[40px] pr-[20px] mt-[25px] flex flex-row gap-x-5 basis-1/3 ">
            <div className="basis-1/4">
              <p className="text-[20px]">Boom Burapee</p>

              <div className="mb-[5px]">star</div>

              <p className="text-[16px] text-sky-500">9.6/10 ดีมาก</p>
            </div>
            <div className="border border-[#D8D8D8]"></div>

            <div className="flex w-[73%] ">
              <div className="border rounded-md border-[#D8D8D8] p-5 text-slate-500">
                A little out of the way but tucked nicely away from the noise
                and traffic. Spotless rooms and general areas. Staff very
                friendly and although not much English spoken we got by with
                smiles and Google translate.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
