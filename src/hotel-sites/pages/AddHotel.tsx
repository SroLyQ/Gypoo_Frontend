import { useEffect, useState, FormEvent } from 'react';

function AddHotel() {
  const [selectHotel,setSelectHotel] = useState(false);
  const locationTypeForm = [
    { isHotel: false },
    { isRestaurant: false },
    { isTravel: false },
  ];
  const convenienceTypeForm = [
    { isWifi: false },
    { isBreakfast: false },
    { isParking: false },
    { isAnimals: false },
    { isBuffet: false },
    { isOther: false },
  ];
  const rooms = [
      {single: '0'},
      {singlePrice:'0'},
      {duo: '0'},
      {duoPrice:'0'},
      {suite: '0'},
      {suitePrice:'0'},
  ];
  const sendForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      description: { value: string };
      coordinates: { value: string };
      
    };

    if (target.title.value == '') {
      alert('โปรดกำหนดหัวข้อ');
    } else if (target.description.value == '') {
      alert('โปรดใสรายละเอียด');
    } else if (
      locationTypeForm[0].isHotel&&
      !locationTypeForm[1].isRestaurant &&
      !locationTypeForm[2].isTravel
    ) {
      alert('โปรดเลือกประเภทของสถานที่');
      console.log(locationTypeForm)
    } else if (target.coordinates.value == '') {
      alert('โปรดใส่ลิงก์แผนที่');
    } else {
      const jason = JSON.stringify({
        title: target.title.value,
        description: target.description.value,
        coordinates: target.coordinates.value,
        room : rooms,
        locationType: locationTypeForm,
        convenienceType: convenienceTypeForm,
      });
      //const jasonArr = JSON.parse(jason);
      console.log(jason);
    }

    // await fetch('/route', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: title.value,
    //     description: description.value,
    //     date: date.value,
    //     file: img.value,
    //   }),
    // });
    // }
  };

  useEffect(() => {
    console.log('HotelHome Run');
  }, []);

  return (
    <div className="pt-28">
      <div className="block w-screen ">
        <div className=" mx-auto border-2 border-black-900 lg:w-3/5 md:w-2/3 w-2/3 rounded-lg md:px-16 sm:px-12 px-10 py-10 ">
          <div className="flex">
            <p className=" md:text-2xl sm:text-base text-base">เพิ่มที่พัก</p>
            <div className="px-1"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-7 sm:w-5 sm:h-7 md:w-8 md:h-9"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
              />
            </svg>
          </div>
          <div className="border-b-2 border-black-900 my-2 mx-auto w-full"></div>
          <p className="text-gray-600 py-2 md:text-lg sm:text-sm text-sm truncate">
            ชื่อที่พัก ร้านอาหาร หรือสถานที่ท่องเที่ยว
          </p>
          <form
            className="md:text-lg sm:text-sm text-sm"
            onSubmit={(e) => {
              sendForm(e);
            }}
          >
            <input
              type="text"
              id="title"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
              placeholder="ชื่อที่พัก ร้านอาหาร หรือสถานที่ท่องเที่ยว"
            />
            <p className="text-gray-600 md:text-lg sm:text-sm text-sm py-2">
              รายละเอียด
            </p>
            <textarea
              id="description"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 pt-1 h-32 md:h-64 w-full"
              placeholder="รายละเอียด"
            />
            <p className="text-gray-600 md:text-lg sm:text-sm text-sm ">
              ประเภทของสถานที่
            </p>
            <div className="py-2 truncate">
              <label>
                <input
                  type="checkbox"
                  id="isHotel"
                  onChange={(event) => {
                    locationTypeForm[0] = { isHotel: event.target.checked };
                    setSelectHotel(!selectHotel)
                    console.log(locationTypeForm[0].isHotel)
                  }}
                  className=" md:w-4 md:h-4w-3 h-3 pt-2"
                />
                <a className="px-2">ที่พัก</a>
              </label>
              <a className="sm:hidden">
                <br />
              </a>
              <label>
                <input
                  type="checkbox"
                  id="isRestaurant"
                  onChange={(event) => {
                    locationTypeForm[1] = {
                      isRestaurant: event.target.checked,
                    };
                  }}
                  className=" md:w-4 md:h-4w-3 h-3 pt-2"
                />
                <a className="px-2">ร้านอาหาร</a>
              </label>
              <a className="sm:hidden">
                <br />
              </a>
              <label>
                <input
                  type="checkbox"
                  id="isTravel"
                  onChange={(event) => {
                    locationTypeForm[2] = { isTravel: event.target.checked };
                  }}
                  className=" md:w-4 md:h-4w-3 h-3 pt-2"
                />
                <a className="px-2">สถานที่ท่องเที่ยว</a>
              </label>
              <a className="sm:hidden">
                <br />
              </a>
            </div> 
              { 
              selectHotel ?
              <div>
                <div className="block space-y-2">
                <p>ห้องพักแบบเดี่ยว</p>
                <div className='flex space-x-2'>
                  <input
              type="text"
              id="singleroom"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
              placeholder="จำนวนห้องพัก"
              onChange={(e)=>{rooms[0].single = e.target.value}}
            />
                  <input
              type="text"
              id="singleroomPrice"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
              placeholder="ราคาห้องพัก"
              onChange={(e)=>{rooms[1].singlePrice = e.target.value}}
            />
                </div>
              </div>
              <div className="block space-y-2">
                <p>ห้องพักแบบคู่</p>
                <div className='flex space-x-2'>
                  <input
              type="text"
              id="duoroom"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
              placeholder="จำนวนห้องพัก"
              onChange={(e)=>{rooms[2].duo = e.target.value}}
            />
                  <input
              type="text"
              id="duoroomPrice"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
              placeholder="ราคาห้องพัก"
              onChange={(e)=>{rooms[3].duoPrice = e.target.value}}
            />
                </div>
              </div>
              <div className="block space-y-2">
                <p>ห้องพักแบบเดอลุกซ์</p>
                <div className='flex space-x-2'>
                  <input
              type="text"
              id="deluxeroom"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
              placeholder="จำนวนห้องพัก"
              onChange={(e)=>{rooms[4].suite = e.target.value}}
            />
                  <input
              type="text"
              id="deluxeroomPrice"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
              placeholder="ราคาห้องพัก"
              onChange={(e)=>{rooms[5].suitePrice = e.target.value}}
            />
                </div>
              </div>
              </div>:''}
            <p className="text-gray-600 md:text-lg sm:text-sm text-sm ">
              สิ่งอำนวยความสะดวก
            </p>
            <div className="py-2 truncate">
              <label>
                <input
                  type="checkbox"
                  id="isWifi"
                  onChange={(event) => {
                    convenienceTypeForm[0] = {
                      isWifi: event.target.checked,
                    };
                  }}
                  className=" md:w-4 md:h-4w-3 h-3 pt-2"
                />
                <a className="px-2">Free wi-fi</a>
              </label>
              <a className="sm:hidden">
                <br />
              </a>
              <label>
                <input
                  type="checkbox"
                  id="isBreakfast"
                  onChange={(event) => {
                    convenienceTypeForm[1] = {
                      isWifi: event.target.checked,
                    };
                  }}
                  className=" md:w-4 md:h-4w-3 h-3 pt-2"
                />
                <a className="px-2">อาหารเช้า</a>
              </label>
              <a className="sm:hidden">
                <br />
              </a>
              <label>
                <input
                  type="checkbox"
                  id="isParking"
                  onChange={(event) => {
                    convenienceTypeForm[2] = {
                      isWifi: event.target.checked,
                    };
                  }}
                  className=" md:w-4 md:h-4w-3 h-3 pt-2"
                />
                <a className="px-2">ที่จอดรถ</a>
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  id="isAnimals"
                  onChange={(event) => {
                    convenienceTypeForm[3] = {
                      isWifi: event.target.checked,
                    };
                  }}
                  className=" md:w-4 md:h-4w-3 h-3 pt-2"
                />
                <a className="px-2">นำสัตว์เลี่ยงเข้าพักได้</a>
              </label>
              <a className="sm:hidden">
                <br />
              </a>
              <label>
                <input
                  type="checkbox"
                  id="isBuffet"
                  onChange={(event) => {
                    convenienceTypeForm[4] = {
                      isWifi: event.target.checked,
                    };
                  }}
                  className=" md:w-4 md:h-4w-3 h-3 pt-2"
                />
                <a className="px-2">ปิ้งย่าง-ชาบู</a>
              </label>
              <a className="sm:hidden">
                <br />
              </a>
              <label>
                <input
                  type="checkbox"
                  id="isOther"
                  onChange={(event) => {
                    convenienceTypeForm[5] = {
                      isWifi: event.target.checked,
                    };
                  }}
                  className=" md:w-4 md:h-4w-3 h-3 pt-2"
                />
                <a className="px-2">อื่นๆ</a>
              </label>
            </div>

            <p className="text-gray-600 md:text-lg sm:text-sm text-sm">
              แผนที่
            </p>
            <p className="py-1"></p>
            <input
              type="text"
              id="coordinates"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
              placeholder="ลิงก์แผนที่"
            />
            <p className="py-1"></p>
            <p className="text-gray-600 md:text-lg sm:text-sm text-sm ">
              รูปภาพ
            </p>

            <input
              type="file"
              id="img"
              accept="image/*"
              className="block text-sm md:w-56 w-full text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-500 hover:file:bg-blue  -100 py-2"
            />
            <div className="py-2 flex justify-end">
              <input
                type="submit"
                value="ยืนยัน"
                className="md:w-20 w-16 text-sm text-white py-2 rounded-lg border-0 bg-blue-500 hover:bg-cyan-400"
              />
              <a className="px-2 " href="/hotelhotels">
                <button
                  type="button"
                  className="md:w-20 w-16 text-sm text-white py-2 rounded-lg border-0 bg-gray-300 hover:bg-red-400"
                >
                  ยกเลิก
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddHotel;
