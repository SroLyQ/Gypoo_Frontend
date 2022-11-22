import React,{useEffect,useState} from 'react'
import { FaCheck, FaBed, FaRegCalendar,FaStar } from 'react-icons/fa';
import formatcard from '../pages/formatRoom.json'
import { getCurrentUser } from '../../services/userService';
import config from '../../config.json'  
import apiClient from '../../api/apiClient';
type ro ={
    ro:string
}
function RoomCard (ro:ro){
    const [r,setR] = useState(formatcard)
    useEffect(()=>{
        const originaldat = async () =>{ 
        const res = await apiClient(`${config.api_url.localHost}/Room/getroom/${ro.ro}`,{method : 'GET',})
        console.log("kuyinroomcrd")
        console.log(res.data)
       
        setR(res.data)

        }
        originaldat()
        //setData(data)
        
      },[ro,])
    
    //r.discount = room.discount;
    const serv = [];
    if (r.service.isAnimals){
        serv.push("Can Take Animal")
    }
    if (r.service.isBreakFast){
        serv.push("Have Brakefast")
    }
    if (r.service.isBuffet){
        serv.push("Have Buffet")
    }
    if (r.service.isParking){
        serv.push("Have Park")
    }
    if (r.service.isWifi){
        serv.push("Have Wifi")
    }
    return (
        <div className='border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px]'>
                            <div className='Block'>
                                    <p className='md:text-[36px] test-2xl'>{r.roomType}</p>
                            </div>
                            <div className='border-b-2 border-black-900 md:my-8 my-4'></div>
                        <div className="grid grid-flow-col grid-cols-3 ">
                            <div className='block'> 
                            <div >
                                <img className='object-cover object-left' src={"https://cdn.britannica.com/16/99616-050-72CD201A/Colosseum-Rome.jpg"}/>
                            </div>
                            
                            </div>
                            
                            <div className='block space-y-4 ml-5 '>
                                {
                                    serv.map((f,i)=>{
                                        return(
                                            <div className='flex'>
                                            <FaCheck className="mr-2"/>
                                            <p className='md:text-lg text:xs'>{f}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                            <div className='block '>
                            <div className='md:ml-[7em]  md:mb-10 '>
                            {r.discount == 0 ? (
                                ''
                            ) : (
                                <div className="bg-red-600 text-white rounded-md text-center  md:text-xl text-xs w-4/5">
                                SALE ลด {r.discount}% วันนี้!
                                </div>
                            )}
                            </div>
                           
                            <div className='md:ml-20 my-2'>
                            {r.discount == 0 ? (
                                <div className="text-red-600 text-right pr-[3rem] text-[28px]">
                                {r.roomPrice
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </div>
                            ) : (
                                <div className='block text-right pr-[3rem] text-[28px]'>
                                <div className=" text-red-600 line-through mr-1 md:text-xl text:sm">
                                    {r.roomPrice
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </div>
                                <div className=" text-green-600 md:text-xl text:sm">
                                    {((r.roomPrice * (100 - r.discount)) / 100)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </div>
                                </div>
                                    )}
                            <p className='md:text-xl text:xs md:text-right md:pr-[3rem] my-2'>for {r.guest} person(s) </p>
                            <p className='md:text-xl text:xs md:text-right md:pr-[3rem] my-2'>have {r.currentRoom} room(s) left </p>
                            <p className='md:text-xl text:xs md:text-right md:pr-[3rem] my-2'>from {r.roomCount} room(s)</p>
                            </div>
                            </div>
                            
                        </div>
                        </div>
        )
}
export default RoomCard