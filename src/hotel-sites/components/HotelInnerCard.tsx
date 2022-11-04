import React,{useState,FormEvent} from 'react'
import { FaCheck, FaBed, FaRegCalendar,FaStar } from 'react-icons/fa';
type dataType = {
    data:{
    _id: string;
    index: number;
    isAviable: boolean;
    price: number;
    picture: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    latitude: number;
    longitude: number;
    discount : number;
    facilities:Array<string>; 
    rating: number;
    reviews: number;
    comment: Array<any>;
    }
}
interface commentFormState {
  //name: string;
  //roomtype: string;
  //period: string;
  rating: number;
  content: string;
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
  const [commentForm, setCommentForm] = React.useState<commentFormState>({
    //name: '',
    //roomtype: '',
    //period: '',
    rating: 0,
    content: ''
  });
  const [currentRating, setCurrentRating] = React.useState(0);
  const sendForm = async(e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const {/*name,roomtype,period,rating,*/content} = e.target as typeof e.target & {
      //name : {value : string},
      //roomtype: {value : string},
      //period: {value : string},
      //rating: {value : number},
      content:  {value : string},
    }
    const jason = JSON.stringify({
            //name : name.value,
            //roomtype : roomtype.value,
            //period : period.value,
            rating : currentRating,
            content : content.value,
         })
    console.log(jason)
    // await fetch('/route',{
    //   headers:{
    //     'Content-Type': 'application/json'
    //   },
    //   method : 'POST',
    //   body : JSON.stringify({
    //       name : name.value,
    //       lastname : lastname.value,
    //       email : email.value
    //   })
    //})
    setCommentForm({/*name:name.value,roomtype:roomtype.value,period:period.value,*/rating:currentRating,content:content.value})
  }
  const StarRating = (props: { starSize: any; }) => {

    const [rating, setRating] = React.useState(0);
    const [hover, setHover] = React.useState(0);
    const { starSize } = props
    const stars = Array(5).fill(0);
  
  const setRatinginValue = (e:number) =>{
    setRating(e);
    setCurrentRating(e);
    return e;
  }
  return (
    <div className="flex flex-rows">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              className="hidden ml-1"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRatinginValue(ratingValue)}
            ></input>
            <FaStar
              className="cursor-pointer duration-[200ms]"
              fontSize={starSize}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            ></FaStar>
          </label>
        );
      })
      }
    </div>
  );
  }
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
            <p className="mb-[14px] md:text-[26px] text-[20px]">สิ่งอำนวยความสะดวก</p>
            <div className="border border-[#D8D8D8]"></div>
            <div className="mt-[15px]">
              <div className="grid grid-flow-col grid-cols-3">
              {
                data.facilities.map(faci=>{
                  return(
                      <div className="flex">
                            <FaCheck className="mr-2"/>
                            <p>{faci}</p>
                      </div>
                  )
                })
              }
              </div>
              
            </div>
          </div>
          <div className="border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] basis-1/2">
            <p className="mb-[14px] md:text-[26px] text-[20px]">แผนที่</p>
            <div className="border border-[#D8D8D8]"></div>
            <div className="mt-[15px]">mapImg</div>
          </div>
        </div>

        <div className="mx-8 border rounded-md border-[#999999] px-4 pb-[25px] pt-[15px] mt-[25px] flex flex-col flex-wrap">
          <div className="mb-[14px]">
            <p className="text-[26px]">Username </p>
          </div>
          <div className=" border border-[#D8D8D8]"></div>
          <div className=" border rounded-md border-[#D8D8D8] py-[15px] md:pl-[40px] pl-4 md:pr-10 mt-[25px] flex ">
            <div className="w-1/2 space-y-6">
              <p className="text-xl">ให้คะแนนที่พัก</p>
              <div className="my-[5px] flex flex-row">{
                <StarRating starSize={'25px'} />
              }
                
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
            <div className="border-r-2 border-[#D8D8D8] mx-1"></div>
            <div className="md:w-full md:h-full md:ml-5 mx-3">
            <form className="grow " onSubmit={e=>{sendForm(e)}}>
              <textarea
                className="border rounded-md border-[#999999]  grow resize-none md:w-full h-28"
                placeholder="Write a comment..."
                id = "content"
              />
            <div className="flex  justify-end w-auto ">
              <button type="submit"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-1 mt-2 text-base md:text-sm rounded-lg">ยืนยัน</button>
            </div>
            </form>
            </div>
          </div>
        </div>

        <div className="mx-8 border rounded-md border-[#999999] p-[25px] mt-[25px] block">
          <div className="mb-8 text-left text-2xl">ความคิดเห็น</div>
          <div className="flex flex-row border-b-2 rounded-md border-[#D8D8D8]"></div>
          <div className="grid grid-rows-1 grid-flow-rows justify-center space-y-3 pt-4">
            {
                data.comment.map((d,i)=>{
                    return(
                        <div className="flex border-2 border-black-900 rounded-lg p-5">
                            <div className="w-1/3 block">
                                <div className="md:text-2xl text-lg">{d.name}</div>
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
                                <div className="text-blue-500 text-s md:text-base">{d.rating + " " + SelectDescription(d.rating)} </div>
                                <div> wait add room type</div>
                                <div> wait add staying period</div>
                            </div>
                            <div className="border-r-2 border-black-900 my-2 mx-3"></div>
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
