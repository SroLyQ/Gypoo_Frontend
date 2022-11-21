import { useEffect, useState, FormEvent,ChangeEvent } from 'react';
import { useParams} from 'react-router-dom';
import apiClient from '../../api/apiClient';
import { getCurrentUser } from '../../services/userService'; // ต้องใช้
import config from '../../config.json';
function AddRoom() {
  const {id} = useParams()
  console.log(id)
  const convenienceTypeForm = {
     isWifi: false ,
     isBreakfast: false ,
     isParking: false ,
     isAnimals: false ,
     isBuffet: false ,
     isOther: false ,
  };
  const [ownerID,setownerID] = useState('')
  const image :Array<string> = []
  useEffect(()=>{
    const userData:any = getCurrentUser() ;
    setownerID(userData.userID)
    //console.log(userData.userID)
    
  },[])
  const sendForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      roomtype : {value:string};
      roomcount: { value: number };
      roomprice: { value: number };
      guest: { value: number };
    };
    
    if (target.roomtype.value == '') {
      alert('โปรดเลือกประเภทห้อง');
    } else if (target.roomcount.value <= 0 ) {
      alert('โปรดใสจำนวนห้อง');
    } else if(target.roomprice.value <= 0 ) {
      alert('โปรดใส่ราคาของห้อง');
    } else if( target.guest.value <= 0 ) {
      alert('โปรดใส่ค่าจำนวนคนเข้าพัก');
    } else {
      const jason = JSON.stringify({
        idHotel  : id,
        roomType : target.roomtype.value,
        guest : target.guest.value,
        roomCount : target.roomcount.value,
        roomPrice : target.roomprice.value,
        picture : image,
        service: convenienceTypeForm,
      });
      //const jasonArr = JSON.parse(jason);
      console.log(jason);
      const res =
      await apiClient(`${config.api_url.localHost}/Room `,{method : 'POST',headers :{"Content-Type" : "application/json"} ,data : jason})
      console.log("okAdd");
      console.log(res.data);
      // try{
      //   axios.post("http://localhost:8000/addroom",{
      //     data : jason,
      //   });
      // } catch (err) {
      //   console.log(err)
      // }
      
    }
    const path = "/myhotel/" + id
    window.location.assign(path);
  };

  const uploadImg = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("upload");
    
    const formData = new FormData();
    if (e.target.files){
      formData.append("files",e.target.files[0])
    }
    const res =  await apiClient(`${config.api_url.localHost}/upload`,{method : 'POST',headers :{"Content-Type" : "multipart/form-data"} ,data : formData})
    console.log(res)
    image.push(res.data.imgPath[0])
    console.log(image)
  };
  return (
    <div className="pt-28">
      <div className="block w-screen ">
        <div className=" mx-auto border-2 border-black-900 lg:w-3/5 md:w-2/3 w-2/3 rounded-lg md:px-16 sm:px-12 px-10 py-10 ">
          <div className="flex">
            <p className=" md:text-2xl sm:text-base text-base">เพิ่มห้อง</p>
            <div className="px-1"></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className ="w-5 h-7 sm:w-5 sm:h-7 md:w-8 md:h-9">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg> 
          </div>
          <div className="border-b-2 border-black-900 my-2 mx-auto w-full"></div>
          <form
            className="md:text-lg sm:text-sm text-sm"
            onSubmit={(e) => {
              sendForm(e);
            }}
          >
           
            {/* <div className='hidden sm:block'>
              <div className="flex py-1">
                <div className="flex-initial w-1/2">  
                  <p className="text-gray-600 md:text-lg sm:text-sm text-sm py-2">
                    จำนวนห้องพัก
                  </p>
                  <div className="px-2"></div>
                  <input
                    type="text"
                    id="numberOfRooms"
                    className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
                    placeholder="จำนวน"
                  />
                </div>
                
                <div className="px-2"></div>
                <div className="flex-initial w-1/2">
                  <p className="text-gray-600 md:text-lg sm:text-sm text-sm py-2">
                    ราคาห้องพัก
                  </p>
                  <div className="px-2"></div>
                  <input
                    type="text"
                    id="price"
                    className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
                    placeholder="ราคา"
                  />
                </div>
              </div>
              <div className="py-1"></div>
            </div> */}
           <div className="">
              <p className="text-gray-600 md:text-lg sm:text-sm text-sm py-1">
              ประเภทห้องพัก
            </p>
            <input
                type="text"
                id="roomtype"
                className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
                placeholder="ประเภทห้อง"
              />
            </div>
            <div className="">
              <p className="text-gray-600 md:text-lg sm:text-sm text-sm py-2">
                จำนวนห้องพัก
              </p>
              <div className="px-2"></div>
              <input
                type="number"
                id="roomcount"
                className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
                placeholder="จำนวน"
              />
              <div className="px-2"></div>
              <p className="text-gray-600 md:text-lg sm:text-sm text-sm py-2">
                ราคาห้องพัก
              </p>
              <div className="px-2"></div>
              <input
                type="number"
                id="roomprice"
                className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
                placeholder="ราคา"
              />
              <div className="py-1"></div>
            </div>
            
            
            <p className="text-gray-600 md:text-lg sm:text-sm text-sm py-2 ">
              จำนวนคนที่เข้าพักสูงสุดต่อห้อง
            </p>
            <div className="px-2"></div>
            <input
              type="number"
              id="guest"
              className="border-2 border-black-900 rounded-lg md:px-5 px-4 py-1 w-full"
              placeholder="จำนวนคนที่เข้าพัก"
            />
            <div className="py-1"></div>
            <p className="text-gray-600 md:text-lg sm:text-sm text-sm ">
              สิ่งอำนวยความสะดวก
            </p>
            <div className="py-2 truncate">
              <label>
                <input
                  type="checkbox"
                  id="isWifi"
                  onChange={(event) => {
                    convenienceTypeForm.isWifi = event.target.checked
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
                    convenienceTypeForm.isBreakfast = event.target.checked
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
                    convenienceTypeForm.isParking = event.target.checked
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
                    convenienceTypeForm.isAnimals = event.target.checked
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
                    convenienceTypeForm.isBuffet = event.target.checked
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
                    convenienceTypeForm.isOther = event.target.checked
                  }}
                  className=" md:w-4 md:h-4w-3 h-3 pt-2"
                />
                <a className="px-2">อื่นๆ</a>
              </label>
            </div>

            <div className="py-1"></div>
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
              <a className="px-2 " href="">
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

export default AddRoom;
