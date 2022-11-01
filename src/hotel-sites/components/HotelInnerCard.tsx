import React from 'react'
import { FaCheck, FaBed, FaRegCalendar } from 'react-icons/fa';
import StarRating from '../../client-sites/components/StarRating';
type dataType = {
    data:{
    _id: string;
    index: number;
    isAviable: boolean;
    price: string;
    picture: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    latitude: number;
    longitude: number;
    rating: number;
    reviews: number;
    comment: Array<any>;
    }
}
const Star = (n:number) =>{
    const arr = new Array(5);
    for(let i=1; i<=5; i++){
    let str = 0
      if (i<=n){
        str = 1
      }
      arr[i] = str;
    }

    return arr;
}
const SelectDescription = (n:number) =>{
    if (n>4) return "excellent";
    else if (n>3) return "good";
    else if (n>2) return "fairly good";
    else if (n>1) return "fair";
    else return "poor";
}

function HotelInnerCard({data}:dataType) {
  return (
      <div className="pt-[95px]">
      <div className="container mx-auto flex-wrap">
        <div className="mx-8 border rounded-md border-[#999999] p-[25px] mt-[25px]">
          <img src={data.picture}/>
          <div>imgSlider</div>
        </div>
        <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px]">
          <div className="mb-[5px]">
            <div className="mb-[5px]">
              <p className="text-[26px] font-semibold">
                {data.name}
              </p>
            </div>
            <div className="mb-[5px]">
              <div className="flex">
                {
                    Star(data.rating).map((s:number,i)=>{
                    return(
                        s?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#EDEA10" viewBox="0 0 24 24" stroke-width="1" stroke="#EDEA10 " className="md:w-8 w-4 md:h-8 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#EDEA10 " className="md:w-8 w-4 md:h-8 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                    )})}
                </div>
            </div>
            <div>
              <p className="text-[16px]">{data.rating} { SelectDescription(data.rating)}
              </p>
            </div>
          </div>
          <div className="border border-[#D8D8D8]"></div>
          <p className="mt-[15px]">
            {data.about}
          </p>
        </div>

        <div className="mx-8 mt-[25px] grid grid-cols-2 gap-x-8">
          <div className="border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] basis-1/2">
            <p className="mb-[14px] text-[26px]">สิ่งอำนวยความสะดวก</p>
            <div className="border border-[#D8D8D8]"></div>
            <div className="mt-[15px]">
              <FaCheck />
            </div>
          </div>
          <div className="border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] basis-1/2">
            <p className="mb-[14px] text-[26px]">แผนที่</p>
            <div className="border border-[#D8D8D8]"></div>
            <div className="mt-[15px]">mapImg</div>
          </div>
        </div>

        <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px] flex flex-col flex-wrap">
          <div className="mb-[14px]">
            <p className="text-[26px]">Username </p>
          </div>
          <div className="border border-[#D8D8D8]"></div>
          <div className="border rounded-md border-[#D8D8D8] py-[15px] pl-[40px] pr-[20px] mt-[25px] flex flex-row flex-wrap gap-x-5">
            <div className="basis-1/4">
              <p>ให้คะแนนที่พัก</p>

              <div className="my-[5px] flex flex-row">
                <StarRating starSize={'25px'} />
              </div>

              <div className="flex flex-col flex-wrap">
                <div className="flex flex-row flex-wrap">
                  <FaBed className="self-center" />
                  <p>ddddddd</p>
                </div>
                <div className="flex flex-row flex-wrap">
                  <FaRegCalendar className="self-center" />
                  <p>yyyyyyy</p>
                </div>
              </div>
            </div>
            <div className="border border-[#D8D8D8]"></div>
            <form className="grow">
              <textarea
                className="border rounded-md border-[#999999] px-2 py-3 w-full h-full grow resize-none"
                placeholder="Write a comment..."
              />
            </form>
          </div>
        </div>

        <div className="mx-8 border rounded-md border-[#999999] p-[25px] mt-[25px] block">
          <div className="mb-8 text-left">ความคิดเห็น</div>
          <div className="flex flex-row border-b-2 rounded-md border-[#D8D8D8]"></div>
          <div className="grid grid-rows-1 grid-flow-rows justify-center space-y-3 pt-4">
            {
                data.comment.map((d,i)=>{
                    return(
                        <div className="flex border-2 border-black-900 rounded-lg p-5">
                            <div className="w-1/4 block">
                                <div className="text-2xl">{d.name}</div>
                                <div className="flex">
                                    {
                                        Star(d.rating).map((s:number,i)=>{
                                        return(
                                                s?
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#EDEA10" viewBox="0 0 24 24" stroke-width="1" stroke="#EDEA10 " className="md:w-6 w-3 md:h-6 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#EDEA10 " className="md:w-6 w-3 md:h-6 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                                    )})}
                                    </div>
                                <div className="text-blue-500">{d.rating + " " + SelectDescription(d.rating)} </div>
                                <div> wait add room type</div>
                                <div> wait add staying period</div>
                            </div>
                            <div className="border-r-2 border-black-900 my-2"></div>
                            <div className="w-3/4 pl-4">
                                {d.content}
                            </div>
                        </div>
                    )
                })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelInnerCard