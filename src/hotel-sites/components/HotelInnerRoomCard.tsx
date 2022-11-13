import React,{useState,FormEvent} from 'react'
import { FaCheck, FaBed, FaRegCalendar,FaStar } from 'react-icons/fa';
import {useParams, Link} from 'react-router-dom';
import RoomCard from './RoomCard';
import testroomdata from '../pages/testroomdata.json'
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
    discount : number;
    rating: number;
    reviews: number;
    room: Array<any>;
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
{/*{data}:dataType}*/}

function HotelInnerRoomCard() {
  const {_id} = useParams();
  const tdata = testroomdata.filter((d,i)=>{if (d._id === _id){return d;}})
  const data = tdata[0];
  const [selectDelete,setSelectDelete] = useState(false)
  const [selectConfirm,setSelectConfirm] = useState(false)
  const [selectEdit,setSelectEdit] = useState(false)
  const [selectEditId,setSelectEditId] = useState("")
  const [selectStatus,setSelectStatus] = useState(Array(data.room.length).fill(false))
  const [deletedData,setDeletedData] = useState<string[]>([])
  const [commentForm, setCommentForm] = React.useState<commentFormState>({
    //name: '',
    //roomtype: '',
    //period: '',
    rating: 0,
    content: ''
  });
  const [currentRating, setCurrentRating] = React.useState(0);
  const toggleDelete = () =>{
    setSelectDelete(!selectDelete)
    if(selectDelete){
      console.log(deletedData.toString())
      setSelectStatus(Array(data.room.length).fill(false))
      setDeletedData([])
    }
  }
  const toggleStatus = (index:number) =>{
    const updatedStatus = selectStatus.map((status,i)=>{
      if (i==index){
        if (!status){
        deletedData.push(data.room[i]._id)
        }
        else {
        
        setDeletedData(deletedData.filter(d => d!== data.room[i]._id))
        }
        return !status
      }
      else 
        return status
      
    })
    setSelectStatus(updatedStatus)
    console.log(selectStatus.toString())
  }
const toggleConfirm = () =>{
      setSelectConfirm(!selectConfirm)
}
const sendFormDelete=() =>{
  toggleConfirm()
   const jason = JSON.stringify({
           deletedData
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
}
const toggleEdit = ()=>{
  setSelectEdit(!selectEdit)
  if (!selectDelete){
      setSelectEditId('')
  }
}
const makeEditform = (dataId:string)=>{
  console.log(dataId)
  toggleEdit()
  setSelectEditId(dataId)
}
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
        <div className="md:grid md:grid-flow-col md:justify-self-center mt-5">
          <div className=" w-96 "></div>
          <div className=" w-96 "></div>
          <div className="flex space-x-4 ml-72 md:ml-5">
            {
              
              selectDelete ?
                deletedData.length>0 ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8" onClick={sendFormDelete}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              :'':
              <Link to="/addroom">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </Link>
            }
            {
              selectDelete ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8" onClick={toggleDelete}><path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" /></svg>

              :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8" onClick={toggleDelete}><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
            }
          
          </div>
        </div>
        <div className="grid grid-flow-row mx-8 ">
            {
                
                data.room.map((r,i)=>{
                    return(
                        selectEdit? '':
                    selectDelete ?
                    <div className="grid grid-flow-col place-content-center ">
                        <div className=" relative grid-flow-row ">
                        <div>
                        {
                        selectStatus[i] ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="z-40 h-10 w-10 bg-white rounded-md border-2 border-black-900 absolute top-5 left-[0%]" onClick={()=>toggleStatus(i)}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        : <button className="z-40 h-10 w-10 bg-white rounded-md border-2 border-black-900 absolute top-5 left-[0%]" onClick={()=>toggleStatus(i)}> </button>
                        }
                        
                    </div>
                        
                    <div className="z-30 w-[100%]  h-[95%] bg-slate-300 opacity-20  mx-auto absolute top-5 left-[0%]  rounded-lg"></div>
                    <RoomCard r={r}/>
                    
                    </div>
                    </div>
                    :
                    <div >
                    <div className="flex justify-end relative" >
                      <Link to = {`/hotel/${data._id}/editroom/${r._id}`} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" mt-5 w-6 h-6 md:w-10 md:h-10 absolute top-7 right-[5%] md:right-[8%]" onClick={()=>makeEditform(data._id)}><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
                    </Link>
                    </div>
                    <RoomCard r={r}/>
                    
                    </div>
                        
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default HotelInnerRoomCard
