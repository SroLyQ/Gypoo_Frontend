import React from 'react';

function Imgslide() {
  return (
    <div className="mx-8 md:mx-48 rounded-md mt-[25px] font-kanit">
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
              src="https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768"
              className="block w-full"
              alt="..."
            />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768"
              className="block w-full"
              alt="..."
            />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768"
              className="block w-full"
              alt="..."
            />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768"
              className="block w-full"
              alt="..."
            />
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
            <div className="flex columns-4 gap-x-[2.7%] h-[53px] ss:h-[79px] sm:h-[100px]">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="w-full"
                aria-current="true"
                aria-label="Slide 1"
              >
                <img
                  src="https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768"
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
                  src="https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768"
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
                  src="https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768"
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
                  src="https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768"
                  className="rounded-md h-full object-cover"
                  alt="..."
                />
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="w-full flex columns-4 gap-x-[2.7%] h-[110px] lg:h-[130px] xl:h-[221px]">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="w-full"
                aria-current="true"
                aria-label="Slide 1"
              >
                <img
                  src="https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768"
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
                  src="https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768"
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
                  src="https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768"
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
                  src="https://pix8.agoda.net/hotelImages/240/2401189/2401189_17061912060053827734.jpg?ca=6&ce=1&s=1024x768"
                  className="block rounded-md h-full object-cover"
                  alt="..."
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imgslide;
