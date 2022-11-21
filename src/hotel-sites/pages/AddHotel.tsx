import config from '../../config.json';
import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import apiClient from '../../api/apiClient';
import { getCurrentUser } from '../../services/userService'; // ต้องใช้

function AddHotel() {
  const locationTypeForm = {
    isHotel: false,
    isRestaurant: false,
    isTravel: false,
  };
  // const useData = getCurrentUser(); // ต้องใช้
  const sendForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      about: { value: string };
      email: { value: string };
      phone: { value: string };
      address: { value: string };
      mapURL: { value: string };
    };

    if (target.name.value == '') {
      alert('โปรดกำหนดหัวข้อ');
    } else if (target.about.value == '') {
      alert('โปรดใสรายละเอียด');
    } else if (
      !locationTypeForm.isHotel &&
      !locationTypeForm.isRestaurant &&
      !locationTypeForm.isTravel
    ) {
      alert('โปรดเลือกประเภทของสถานที่');
      console.log(locationTypeForm);
    } else if (target.email.value == '') {
      alert('โปรดใส่อีเมล');
    } else if (target.phone.value == '') {
      alert('โปรดใส่เบอร์โทรศัพท์');
    } else if (target.address.value == '') {
      alert('โปรดใส่ที่อยู่');
    } else if (target.mapURL.value == '') {
      alert('โปรดใส่ลิงก์แผนที่');
    } else {
      const jason = JSON.stringify({
        name: target.name.value,
        about: target.about.value,
        mapURL: target.mapURL.value,
        email: target.mapURL.value,
        phone: target.phone.value,
        address: target.address.value,
        locationType: locationTypeForm,
      });
      //const jasonArr = JSON.parse(jason);
      console.log(jason);
    }

    // try{
    //   axios.post("http://localhost:8000/addhotel",{
    //     data : jason,
    //   });
    // } catch (err) {
    //   console.log(err)
    // }
  };

  const uploadImg = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const body = {
      files: e.target.value,
    };
    // const res = await apiClient(`${config.api_url.localHost}/upload`,{method : 'POST',data : body})
    console.log(body);
  };

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
              id="name"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
              placeholder="ชื่อที่พัก ร้านอาหาร หรือสถานที่ท่องเที่ยว"
            />
            <p className="text-gray-600 md:text-lg sm:text-sm text-sm py-2">
              รายละเอียด
            </p>
            <textarea
              id="about"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 pt-1 h-32 md:h-64 w-full"
              placeholder="รายละเอียด"
            />
            <p className="text-gray-600 md:text-lg sm:text-sm text-sm ">
              ประเภทของสถานที่
            </p>
            <div className="py-2 truncate">
              <input
                id="isHotel"
                className="md:w-4 md:h-4w-3 h-3 pt-2"
                type="radio"
                name="status"
                onChange={(event) => {
                  locationTypeForm.isHotel = event.target.checked;
                }}
              />
              <label htmlFor="isHotel" className="px-2">
                ที่พัก
              </label>
              <a className="sm:hidden">
                <br />
              </a>
              <input
                id="isRestaurant"
                className="md:w-4 md:h-4w-3 h-3 pt-2"
                type="radio"
                name="status"
                onChange={(event) => {
                  locationTypeForm.isRestaurant = event.target.checked;
                }}
              />
              <label htmlFor="isRestaurant" className="px-2">
                ร้านอาหาร
              </label>
              <a className="sm:hidden">
                <br />
              </a>
              <input
                id="isTravel"
                className="md:w-4 md:h-4w-3 h-3 pt-2"
                type="radio"
                name="status"
                onChange={(event) => {
                  locationTypeForm.isTravel = event.target.checked;
                }}
              />
              <label htmlFor="isTravel" className="px-2">
                สถานที่ท่องเที่ยว
              </label>
            </div>

            <p className="text-gray-600 md:text-lg sm:text-sm text-sm">อีเมล</p>
            <p className="py-1"></p>
            <input
              type="text"
              id="email"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
              placeholder="อีเมล"
            />
            <p className="text-gray-600 md:text-lg sm:text-sm text-sm">
              เบอร์โทรศัพท์
            </p>
            <p className="py-1"></p>
            <input
              type="text"
              id="phone"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
              placeholder="เบอร์โทรศัพท์"
            />
            <p className="text-gray-600 md:text-lg sm:text-sm text-sm">
              ที่อยู่
            </p>
            <p className="py-1"></p>
            <input
              type="text"
              id="address"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
              placeholder="ที่อยู่"
            />
            <p className="text-gray-600 md:text-lg sm:text-sm text-sm">
              แผนที่
            </p>
            <p className="py-1"></p>
            <input
              type="text"
              id="mapURL"
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
              onChange={uploadImg}
              multiple
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
