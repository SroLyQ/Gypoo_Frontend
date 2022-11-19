import React from 'react';
import { FaCheck, FaBed, FaRegCalendar } from 'react-icons/fa';
import StarRating from '../components/StarRating';
import { Listbox } from '@headlessui/react';
import 'tw-elements';

import HotelCard from '../../hotel-sites/components/HotelCard';
import testdata from '../../hotel-sites/pages/testdata.json';

function Imgslide() {
  return (
    <div className="block ">
      <div className="md:hidden">
        <div className="mx-8 rounded-md mt-[25px]">
          <div
            id="carouselExampleCaptions"
            className="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden rounded-md">
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
            <div className="mt-2">
              <div className="md:hidden">
                <div className="flex columns-4 gap-x-[2.7%] h-[59px] ss:h-[79px] sm:h-[100px]">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="w-full"
                    aria-current="true"
                    aria-label="Slide 1"
                  >
                    <img
                      src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="rounded-md w-full h-full object-cover"
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-full"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                      className="rounded-md h-full object-cover"
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-full"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                      className="rounded-md h-full object-cover"
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-full"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  >
                    <img
                      src="https://img.freepik.com/free-vector/japanese-wave-line-art-landscape-background-abstract-mountain-banner-design-pattern-vector-illustration-geometric-poster_90220-715.jpg?w=1380&t=st=1668416689~exp=1668417289~hmac=55b262e9e8d60e4dcf172bb54dcd86a887b12f5834c835426f5403b6b42c2430"
                      className="rounded-md h-full object-cover"
                      alt="..."
                    />
                  </button>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="w-full flex columns-4 gap-x-[2.7%] h-[142px] lg:h-[158px] xl:h-[221px]">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="w-full"
                    aria-current="true"
                    aria-label="Slide 1"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                      className="block rounded-md h-full object-cover"
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-full"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                      className="block rounded-md h-full object-cover"
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-full"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                      className="block rounded-md h-full object-cover"
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-full"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  >
                    <img
                      src="https://img.freepik.com/free-vector/japanese-wave-line-art-landscape-background-abstract-mountain-banner-design-pattern-vector-illustration-geometric-poster_90220-715.jpg?w=1380&t=st=1668416689~exp=1668417289~hmac=55b262e9e8d60e4dcf172bb54dcd86a887b12f5834c835426f5403b6b42c2430"
                      className="block rounded-md h-full object-cover"
                      alt="..."
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-48 rounded-md mt-[25px] hidden md:block">
          <div
            id="carouselExampleCaptions"
            className="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden rounded-md">
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
            <div className="mt-2">
              <div className="md:hidden">
                <div className="flex columns-4 gap-x-[2.7%] h-[59px] ss:h-[79px] sm:h-[100px]">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="w-full"
                    aria-current="true"
                    aria-label="Slide 1"
                  >
                    <img
                      src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="rounded-md w-full h-full object-cover"
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-full"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                      className="rounded-md h-full object-cover"
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-full"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                      className="rounded-md h-full object-cover"
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-full"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  >
                    <img
                      src="https://img.freepik.com/free-vector/japanese-wave-line-art-landscape-background-abstract-mountain-banner-design-pattern-vector-illustration-geometric-poster_90220-715.jpg?w=1380&t=st=1668416689~exp=1668417289~hmac=55b262e9e8d60e4dcf172bb54dcd86a887b12f5834c835426f5403b6b42c2430"
                      className="rounded-md h-full object-cover"
                      alt="..."
                    />
                  </button>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="w-full flex columns-4 gap-x-[2.7%] h-[142px] lg:h-[158px] xl:h-[221px]">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="w-full"
                    aria-current="true"
                    aria-label="Slide 1"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                      className="block rounded-md h-full object-cover"
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-full"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                      className="block rounded-md h-full object-cover"
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-full"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                      className="block rounded-md h-full object-cover"
                      alt="..."
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="w-full"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  >
                    <img
                      src="https://img.freepik.com/free-vector/japanese-wave-line-art-landscape-background-abstract-mountain-banner-design-pattern-vector-illustration-geometric-poster_90220-715.jpg?w=1380&t=st=1668416689~exp=1668417289~hmac=55b262e9e8d60e4dcf172bb54dcd86a887b12f5834c835426f5403b6b42c2430"
                      className="block rounded-md h-full object-cover"
                      alt="..."
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imgslide;
