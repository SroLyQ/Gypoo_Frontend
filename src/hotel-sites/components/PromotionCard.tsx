import React, { useEffect, useState } from 'react'
import { FaCheck, FaBed, FaRegCalendar,FaStar } from 'react-icons/fa';
import { getCurrentUser } from '../../services/userService';
import config from '../../config.json'  
import apiClient from '../../api/apiClient';
import { getNameOfDeclaration } from 'typescript';
type promo ={
    p:{
     id: string; 
     hotelId: string; 
     title: string; 
     percent: number; 
     description: string; 
     startDate: string; 
     endDate: string; 
     ownerID: string; 
    }
}

       
function PromotionCard ({p}:promo){
    const [name,setName] = useState('');
    useEffect(()=>{
        const Getname = async () =>{
        
        const res = await apiClient(`${config.api_url.localHost}/Hotel/${p.hotelId}`,{method : 'GET',}) 
        //console.log("hotel")
        //console.log(res.data.hotel.name)
        setName(res.data.hotel.name)
        return res.data.hotel.name;
        }
        Getname()
    },[])
    
    return (
        <div className='border rounded-md border-[#999999] mt-[25px]'>
        
                        <div className="grid grid-flow-col grid-cols-6 ">
                            <div className='block col-span-2'> 
                            <div >
                                <img className='object-cover object-left' src='https://cdn.discordapp.com/attachments/1030044921178107914/1043610932468777080/image.png'/>
                            </div>
                            
                            </div>
                            <div className=' col-span-3'>
                            <div className='block space-y-1 ml-5'>
                                <div className='text-xl mt-5'>ส่วนลด {p.percent}%</div>
                                <div className='text-xl mt-5'>จาก {name}</div>
                                <div className=' text-blue-400'>ตั้งแต่ {p.startDate}</div>
                                <div className=' text-blue-400'>จนถึง {p.endDate}</div>
                                <div className=''>{p.description}</div>
                            </div>
                            </div>
                            <div className='block border-l-2 border-black-900 w-1/5'>
                            
                            </div>
                            
                        </div>
                        </div>
        )
}
export default PromotionCard