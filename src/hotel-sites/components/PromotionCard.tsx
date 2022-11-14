import React from 'react'
import { FaCheck, FaBed, FaRegCalendar,FaStar } from 'react-icons/fa';
type promo ={
    p:{
        discount: number,
        due: string,
        des: string,
        img: string
    }
}
function PromotionCard ({p}:promo){
    return (
        <div className='border rounded-md border-[#999999] mt-[25px]'>
        
                        <div className="grid grid-flow-col grid-cols-6 ">
                            <div className='block col-span-2'> 
                            <div >
                                <img className='object-cover object-left' src='https://ygorganization.com/wp-content/uploads/2022/10/engagethumb.png'/>
                            </div>
                            
                            </div>
                            <div className=' col-span-3'>
                            <div className='block space-y-4 ml-5'>
                                <div className='text-2xl mt-5'>ส่วนลด {p.discount}%</div>
                                <div className=' text-blue-400'>จนถึง {p.due}</div>
                                <div className=''>{p.des}</div>
                            </div>
                            </div>
                            <div className='block border-l-2 border-black-900 w-1/5'>
                            
                            </div>
                            
                        </div>
                        </div>
        )
}
export default PromotionCard