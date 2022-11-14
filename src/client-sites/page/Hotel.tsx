import React from 'react';
import { FaCheck, FaBed, FaRegCalendar } from 'react-icons/fa';
import ListBox from '../components/ListBox';
import StarRating from '../components/StarRating';
import GooGleMAP from '../components/googleMap';
import Roomtype from '../components/Roomtype';
import 'tw-elements';

function hotel() {
  return (
    <div className="pt-[95px]">
      <div className="container mx-auto flex-wrap grid   ">
        <div className=" mx-8 rounded-md mt-[25px]  ">
          <div
            id="carouselExampleCaptions"
            className="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden rounded-md ">
              <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="carousel-item active relative float-left w-full">
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                  className="block w-full"
                  alt="..."
                />
                <div className="carousel-caption hidden md:block absolute text-center">
                  <h5 className="text-xl">นี่หน้า1จ้าาาาา</h5>
                  <p>อยากเขียนไรยาวๆเอามาไว้นี่</p>
                </div>
              </div>
              <div className="carousel-item relative float-left w-full">
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                  className="block w-full"
                  alt="..."
                />
                <div className="carousel-caption hidden md:block absolute text-center">
                  <h5 className="text-xl">นี่หน้า2สองจ้าาาาา</h5>
                  <p>อยากเขียนไรยาวๆเอามาไว้นี่</p>
                </div>
              </div>
              <div className="carousel-item relative float-left w-full">
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                  className="block w-full"
                  alt="..."
                />
                <div className="carousel-caption hidden md:block absolute text-center">
                  <h5 className="text-xl">หน้า3จ้าาาาา</h5>
                  <p>อยากเขียนไรยาวๆเอามาไว้นี่</p>
                </div>
              </div>
              <div className="carousel-item relative float-left w-full">
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                  className="block w-full"
                  alt="..."
                />
                <div className="carousel-caption hidden md:block absolute text-center">
                  <h5 className="text-xl">หน้าสุดท้ายจ้าาาาา</h5>
                  <p>อยากเขียนไรยาวๆเอามาไว้นี่</p>
                </div>
              </div>

              <div>
                <button
                  className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 "
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon inline-block bg-no-repeat"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 "
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon inline-block bg-no-repeat"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="block">
              <div className="md:hidden">
                <div className="mt-[15px] ">
                  <div className="w-full h-[60px] flex columns-4 gap-x-[2.7%]">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active w-[23%]"
                      aria-current="true"
                      aria-label="Slide 1"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                        className="block rounded-md w-full h-full  "
                        alt="..."
                      />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      className="w-[23%]"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                        className="block rounded-md w-full h-full "
                        alt="..."
                      />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      className="w-[23%]"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                        className="block rounded-md w-full h-full "
                        alt="..."
                      />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      className="w-[23%]"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                        className="block rounded-md w-full h-full "
                        alt="..."
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-[20px] hidden md:block">
                <div className="w-full h-[152px] flex columns-4 gap-x-[2.7%]">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active w-[23%]"
                    aria-current="true"
                    aria-label="Slide 1"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                      className="block rounded-md w-full h-full "
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-[23%]"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                      className="block rounded-md w-full h-full "
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-[23%]"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                      className="block rounded-md w-full h-full "
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-[23%]"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                      className="block rounded-md w-full h-full "
                      alt="..."
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mx-8 border rounded-md border-[#999999] p-[25px] pt-[15px] mt-[25px]">
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

        <div className="mx-8 mt-[25px] grid grid-cols-2 max-md:grid-cols-1 gap-x-8 gap-y-6">
          <div className="border rounded-md border-[#999999] p-[25px] pt-[15px] basis-1/2">
            <p className="mb-[14px] text-[26px]">สิ่งอำนวยความสะดวก</p>
            <div className="border border-[#D8D8D8]"></div>
            <div className="mt-[15px] grid grid-cols-2">
              <div className="flex flex-row p-[10px]">
                <FaCheck className="self-center min-w-[16px]" />
                <p className="pl-[10px] self-center">อาหารเช้า</p>
              </div>

              <div className="flex flex-row p-[10px]">
                <FaCheck className="self-center min-w-[16px]" />
                <p className="pl-[10px] self-center">สัตว์เลี้ยงเข้าพักได้</p>
              </div>

              <div className="flex flex-row p-[10px]">
                <FaCheck className="self-center min-w-[16px]" />
                <p className="pl-[10px] self-center">ที่จอดรถ</p>
              </div>

              <div className="flex flex-row p-[10px]">
                <FaCheck className="self-center min-w-[16px]" />
                <p className="pl-[10px] self-center">ปิ้งบาร์บีคิว</p>
              </div>

              <div className="flex flex-row p-[10px]">
                <FaCheck className="self-center min-w-[16px]" />
                <p className="pl-[10px] self-center">Free Wi-Fi</p>
              </div>
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

        <Roomtype />

        <div className="block">
          <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px]">
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
          <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px]">
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
