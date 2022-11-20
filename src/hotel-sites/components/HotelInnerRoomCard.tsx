import React,{useState,FormEvent,useEffect} from 'react'
import { FaCheck, FaBed, FaRegCalendar,FaStar } from 'react-icons/fa';
import {useParams, Link} from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import RoomCard from './RoomCard';
import testroomdata from '../pages/testroomdata.json'
import formatRoomtype from '../pages/formatRoomtype.json'
import { getCurrentUser } from '../../services/userService';
import config from '../../config.json'  
import apiClient from '../../api/apiClient';
type dataType = {
    data:{
    id: string;
    index: number;
    isAviable: boolean;
    price: number;
    picture: Array<string>;
    name: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    discount : number;
    rating: number;
    review: number;
    room: Array<any>;
    }
}
type imgSlide = {
  arr: Array<string>;
  image:any;
  index:number;
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
  const {id} = useParams();
  const [data,setData] = useState(formatRoomtype);
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
        deletedData.push(data.room[i].idRoom)
        }
        else {
        
        setDeletedData(deletedData.filter(d => d!== data.room[i].idRoom))
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
          id : id,
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
  
  const Thumbnail = ({ arr, image, index }:imgSlide) => {
    return (
    <div className="flex h-[20%] w-[20%] space-x-2">
      {
        arr.map((imgsrc, i) => (
          <img
            key={i}
            height="50"
            src={imgsrc}
            onClick={() => image(i)}
            className={index === i ? 'active' : ''}
          />
        ))
      }
    </div>)
  }
  
  const Slideshow = ({ imgs }:any) => {
    const [index, setIndex] = useState(0)
  
    useEffect(() => {
      setIndex(0)
    }, [])
  
    const next = () => {
      if (index === imgs.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }
    const prev = () => {
      if (index === 0) {
        setIndex(imgs.length - 1)
      } else {
        setIndex(index - 1)
      }
    }
    return (
      <div className="  justify-center block">
        <img className="h-[30%] w-[30%] mx-auto mb-2" src={imgs[index]} />
        
        <div className="">
          <div className="ml-auto">
          <Thumbnail arr={imgs} image={setIndex} index={index} />
          </div>
          
        </div>
      </div>
    )
  }
  useEffect(()=>{
    const originaldat = async () =>{ 
    const res = await apiClient(`${config.api_url.localHost}/Hotel/${id}`,{method : 'GET',}) 
    //console.log("kuy")
    //console.log(res.data.hotel)
    setData(res.data.hotel)
    return res.data;
    }
    originaldat()
  },[])
  return (
      <div className="pt-[95px]">
      <div className="container mx-auto flex-wrap">
        <div className="mx-8 border rounded-md border-[#999999] p-[25px] mt-[25px]">
        <div className="App">
      <Slideshow
        imgs={data.picture}
      />
    </div>
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
            <div className='py-2'>
              <p className="text-[16px]">{data.rating} { SelectDescription(data.rating)}
              </p>
            </div>
            <div className="flex text-blue-500 text-sm md:text-base py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="md:w-6 w-8 md:h-6 h-8 md:pb-0 pb-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="">{data.address}</p>
        
        </div>
        <div className="flex py-2"> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:w-6 w-8 md:h-6 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>

          <p className="">
            {data.phone}
          </p> 
        </div> 
        <div className="flex py-2 space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:w-6 w-8 md:h-6 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>

          <p className="">
            {data.email}
          </p> 
        </div>
          </div>
          <div className="border border-[#D8D8D8] mt-[15px]"></div>
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10" onClick={sendFormDelete}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              :'':
              <Link to={`/hotel/${id}/addroom`}>
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
                    r.discount = data.discount;
                    return(
                        selectEdit? '':
                    selectDelete ?
                    <div className="grid grid-flow-col place-content-center ">
                        <div className=" relative grid-flow-row ">
                        <div>
                        {
                        selectStatus[i] ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="z-40 h-16 w-16 bg-white rounded-md border-2 border-black-900 absolute top-5 left-[0%]" onClick={()=>toggleStatus(i)}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        : <button className="z-40 h-16 w-16 bg-white rounded-md border-2 border-black-900 absolute top-5 left-[0%]" onClick={()=>toggleStatus(i)}> </button>
                        }
                        
                    </div>
                        
                    <div className="z-30 w-[100%]  h-[95%] bg-slate-300 opacity-20  mx-auto absolute top-5 left-[0%]  rounded-lg"></div>
                    <RoomCard r={r}/>
                    
                    </div>
                    </div>
                    :
                    <div >
                    <div className="flex justify-end relative" >
                      <Link to = {`/hotel/${data.id}/editroom/${r.idRoom}`} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" mt-5 w-6 h-6 md:w-10 md:h-10 absolute top-7 right-[5%] md:right-[8%]" onClick={()=>makeEditform(data.id)}><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
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
