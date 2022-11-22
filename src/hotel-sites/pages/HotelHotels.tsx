import React,{useState,useEffect} from 'react'
import testdata from './testroomdata.json'
import HotelCard from '../components/HotelCard'
import { Routes,Route,Link } from 'react-router-dom'
import HotelInnerCard from '../components/HotelInnerCard'
import EditHotel from './EditHotel'
import config from '../../config.json'  
import apiClient from '../../api/apiClient';
import { getCurrentUser } from '../../services/userService'
import formatHotel from './formatHotel.json'

function HotelHotels() {
  const [renderData,setrenderData] = React.useState(formatHotel)
  const [originaldata,setOriginaldata] = React.useState(formatHotel)
  const [searchWord,setsearchWord] = useState("");
  const excludeColumns = ["name","address"];
  const [selectDelete,setSelectDelete] = useState(false)
  const [selectConfirm,setSelectConfirm] = useState(false)
  const [selectEdit,setSelectEdit] = useState(false)
  const [selectEditId,setSelectEditId] = useState("")
  const [selectStatus,setSelectStatus] = useState(Array(testdata.length).fill(false))
  const [deletedData,setDeletedData] = useState<string[]>([])
  const handleFilter = (e:string)=>{/*
        setsearchWord(e.toLowerCase());
        console.log(e.toString());
        const newFilter = renderData.filter((item:any)=>{
            return Object.keys(item).some(key=>{
                if (item[key]!=null){
                    return item[key].toString().toLowerCase().includes(searchWord.toLowerCase())
                }
            })
        });
        if(searchWord=== '' || newFilter.length==0){
          setrenderData(originaldata)
        }
        else{
           setrenderData(newFilter)
        }*/
        
  }
  
  useEffect(()=>{
      const userData:any = getCurrentUser() ;
      //console.log(userData.userID)
      const originaldat = async () =>{ 
      const res = await apiClient(`${config.api_url.localHost}/Hotel/myHotel/${userData.userID}`,{method : 'GET',}) 
     // console.log("hotel");
     // console.log(res.data.hotels);
      setrenderData(res.data.hotels);
      return res.data;
      }
      originaldat()
      
      
        // if(renderData===originaldata){
        //     setrenderData(originaldata); 
        // } 
        // else if(renderData.length==0){
        //     if (searchWord==""){
        //     setrenderData(originaldata);
        //     }
        // } 
    },[])
    
    const toggleDelete = () =>{
      setSelectDelete(!selectDelete)
      if(selectDelete){
       // console.log(deletedData.toString())
        setSelectStatus(Array(testdata.length).fill(false))
        setDeletedData([])
      }
    }
    const toggleStatus = (index:number) =>{
      const updatedStatus = selectStatus.map((status,i)=>{
        if (i==index){
          if (!status){
          deletedData.push(testdata[i].id)
          }
          else {
          setDeletedData(deletedData.filter(data => data!== testdata[i].id))
          }
          return !status
        }
        else 
          return status
        
      })
      setSelectStatus(updatedStatus)
     // console.log(selectStatus.toString())
    }
  const toggleConfirm = () =>{
        setSelectConfirm(!selectConfirm)
  }
  const sendFormDelete=() =>{
    toggleConfirm()
     const jason = JSON.stringify({
             deletedData
         })
    //console.log(jason)
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
    //console.log(dataId)
    toggleEdit()
    setSelectEditId(dataId)
  }
  return (
    <div className="pt-24 md:grid md:grid-flow-row ">
      {
        selectConfirm ?
          <div className="grid grid-flow-row z-50 md:w-1/2 w-2/3 h-1/3 md:p-10 p-10 bg-white  border-2 border-black-900 absolute md:top-1/2 top-1/3 md:left-1/3 left-[20%]"> 
          <div className="flex justify-center text-2xl">Are you confirm to delete them?</div>
          <div className="flex justify-between mt-5">
          <button className="rounded-lg bg-green-500 p-2 text-white md:w-1/3 w-2/5 h-4/5" onClick={sendFormDelete}>Confirm</button>
          <button className="rounded-lg bg-red-500 p-2 text-white md:w-1/3 w-2/5 h-4/5 " onClick={toggleConfirm}>Cancle</button>
          </div>
          <></>
          </div>:
          ''
      }
      
      <div className="md:grid md:grid-flow-col md:justify-self-center mt-5">
          <div className=" w-96 "></div>
          <div className=" w-96 "></div>
          <div className="flex space-x-4 ml-72 md:ml-0">
            {
              
              selectDelete ?
                deletedData.length>0 ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8" onClick={toggleConfirm}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              :'':
              <Link to="/addhotel">
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
      <div className="grid grid-rows-1 grid-flow-rows justify-center">
      {
        
        renderData.map((data,i)=>{
          return(
          selectDelete ?
          
          <div className="grid grid-flow-col grid-cols-6 place-content-center w-screen">
          <div className="w-1/3 "></div>
           <div className="col-span-4 relative grid-flow-row ">
            <div>
              {
                selectStatus[i] ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="z-40 h-10 w-10 bg-white rounded-md border-2 border-black-900 absolute top-5 " onClick={()=>toggleStatus(i)}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              : <button className="z-40 h-10 w-10 bg-white rounded-md border-2 border-black-900 absolute top-5" onClick={()=>toggleStatus(i)}> </button>
              }
              
            </div>
          
          <div className="z-30 w-[100%] h-[95%] bg-slate-300 opacity-20  mx-auto absolute top-5   rounded-lg"></div>
          <Link to = {`/myhotel/${data.id}`}  className="z-20">  
            <HotelCard data = {data} />
          </Link>
          
          </div>
          <div className="w-1/3 "></div>
          </div>
          :
          <div className="grid grid-flow-col grid-cols-6 place-content-center w-screen">
          <div className=" " ></div>
          <div className=" col-span-4 w-auto ">
          <div className="flex justify-end relative" >
            <Link to = {`/hotel/${data.id}/addpromotion/`} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute top-7 right-[13%] md:right-[8%]"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" /></svg>
            </Link>
            <Link to = {`/hotel/${data.id}/edit`} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute top-7 right-[3%] md:right-[4%]"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
            </Link>
          </div>
          <Link to = {`/myhotel/${data.id}`} >
            <HotelCard data = {data} />
          </Link>
          </div>
          <div className="w-1/3"></div>
          </div>
          )
        })
      }
      </div>
      
    </div>
    
  )
}

export default HotelHotels