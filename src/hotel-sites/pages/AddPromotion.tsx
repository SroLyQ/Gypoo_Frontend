import { useEffect, useState, FormEvent } from 'react';
import {useParams} from 'react-router-dom';
import apiClient from '../../api/apiClient';
import { getCurrentUser } from '../../services/userService'; // ต้องใช้
import config from '../../config.json';
function AddPromotion() {
  const {id} = useParams();
  const [date, setDate] = useState('01-01-2022');
  const [ownerID, setOwnerId] = useState('');
  useEffect(()=>{
    const userData:any = getCurrentUser() ;
    setOwnerId(userData.userID)
    //console.log(userData.userID)
    
  },[])
  const sendForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
     
      title: { value: string };
      percent: { value: number };
      description: { value: string };
      date: { value: string };
    };
    const formdate = target.date.value.split("-") 
    const newformdate = formdate[2] + "/" + formdate[1] + "/" + formdate[0];
    if (target.title.value == '') {
      alert('โปรดกำหนดหัวข้อ');
    } else if (target.description.value == '') {
      alert('โปรดใส่รายละเอียด');
    } else {
      const jason = JSON.stringify({
        hotelId: id,
        title: target.title.value,
        percent : target.percent.value,
        description: target.description.value,
        endDate: newformdate,
        ownerID : ownerID
        //file: img.value,
      });
      
      //const jasonArr = JSON.parse(jason);
      console.log(jason);
      const res =
      await apiClient(`${config.api_url.localHost}/Promotion`,{method : 'POST',headers :{"Content-Type" : "application/json"} ,data : jason})
      console.log("ok prom0tion");
      console.log(res.data);
    }
    window.location.assign('/hotelhotels');
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
  };

  useEffect(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    const curDate = dd + '-' + mm + '-' + yyyy;
    setDate(curDate);
  }, []);

  return (
    <div className="pt-28">
      <div className="block w-screen ">
        <div className=" mx-auto border-2 border-black-900 lg:w-3/5 md:w-2/3 w-2/3 rounded-lg md:px-16 sm:px-12 px-10 py-10 ">
          <div className="flex">
            <p className=" md:text-2xl sm:text-base text-base">คูปองส่วนลด</p>
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
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
              />
            </svg>
          </div>
          <div className="border-b-2 border-black-900 my-2 mx-auto w-full"></div>
          <p className="text-gray-600 py-2 md:text-lg sm:text-sm text-sm">
            หัวข้อส่วนลด
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
              placeholder="หัวข้อส่วนลด"
            />
            <p className="text-gray-600 md:text-lg sm:text-sm text-sm py-2">
              ส่วนลดที่ลด (%)
            </p>
            <input
              type="text"
              id="percent"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
              placeholder="ส่วนลด"
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
              ขอบเขตการใช้งาน
            </p>
            <div className="py-2">
              <input
                type="date"
                id="date"
                min={date}
                max="2050-12-31"
                className="text-gray-400 border-2 border-black-900 rounded-lg md:px-5 px-4"
              />
            </div>
            
            <div className="py-2 flex justify-end">
              <input
                type="submit"
                value="ยืนยัน"
                className="md:w-20 w-16 text-sm text-white py-2 rounded-lg border-0 bg-blue-500 hover:bg-cyan-400"
              />
              <a className="px-2 " href="/">
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

export default AddPromotion;
