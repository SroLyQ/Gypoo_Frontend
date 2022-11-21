import React,{useState,useEffect} from 'react'
import testdata from './testroomdata.json'
import HistoryCard from '../components/HistoryCard'
import historydata from './historydata.json'
import { Routes,Route,Link } from 'react-router-dom'
import config from '../../config.json'  
import apiClient from '../../api/apiClient';
import { getCurrentUser } from '../../services/userService'
import formatHistory from './formatHistory.json'
function HotelHistory() {
  const [renderData,setrenderData] = React.useState(formatHistory)
  const originaldata = testdata
  const [searchWord,setsearchWord] = useState("");
  const excludeColumns = ["name","address"];
  // const handleFilter = (e:string)=>{
  //       setsearchWord(e.toLowerCase());
  //       console.log(e.toString());
  //       const newFilter = renderData.filter((item:any)=>{
  //           return Object.keys(item).some(key=>{
  //               if (item[key]!=null){
  //                   return item[key].toString().toLowerCase().includes(searchWord.toLowerCase())
  //               }
  //           })
  //       });
  //       if(searchWord=== '' || newFilter.length==0){
  //         setrenderData(originaldata)
  //       }
  //       else{
  //          setrenderData(newFilter)
  //       }
        
  // }
  useEffect(()=>{
    const userData:any = getCurrentUser() ;
    //console.log(userData.userID)
    const originaldat = async () =>{ 
    const res = await apiClient(`${config.api_url.localHost}/History`,{method : 'GET',}) 
    console.log(res.data);
    setrenderData(res.data);
    return res.data;
    }
    originaldat()
  },[])
  
  return (
    <div className="pt-24">
      
      <div className="grid grid-rows-1 grid-flow-rows justify-center">
      {
        renderData.map((h,id)=>{
          return(
          <div className=" w-4/5 md:w-3/5 mx-auto p-0">
          <HistoryCard h = {h}/>
         
         
          </div>
          )
        })
      }
      </div>
      
    </div>
  )
}

export default HotelHistory