import React,{useState,useEffect} from 'react'
import testdata from './testpromotion.json'
import PromotionCard from '../components/PromotionCard'
import { Routes,Route,Link } from 'react-router-dom'
import config from '../../config.json'  
import apiClient from '../../api/apiClient';
import { getCurrentUser } from '../../services/userService'
import formatPromotion from './formatPromotion.json'
function HotelDiscount() {
  const [renderData,setrenderData] = React.useState(formatPromotion)
  const originaldata = formatPromotion
  const [searchWord,setsearchWord] = useState("");
  const excludeColumns = ["name","address"];
  const handleFilter = (e:string)=>{
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
        }
        
  }
  // useEffect(()=>{
  //       if(renderData===originaldata){
  //           setrenderData(originaldata); 
  //       } 
  //       else if(renderData.length==0){
  //           if (searchWord==""){
  //           setrenderData(originaldata);
  //           }
  //       } 
  //   })
  useEffect(()=>{
      const userData:any = getCurrentUser() ;
      //console.log(userData.userID)
      const originaldat = async () =>{ 
      const res = await apiClient(`${config.api_url.localHost}/Promotion/my_promotion/${userData.userID}`,{method : 'GET',}) 
      console.log("promotion");
      console.log(res.data.promotions);
      setrenderData(res.data.promotions);
      return res.data;
      }
      originaldat()
  },[])
    
  return (
    <div className="pt-24 font-kanit">
      <div className='mt-5 text-center text-2xl '>
        คูปองส่วนลด
      </div>
      
      <div className="grid grid-rows-1 grid-flow-rows justify-center">
      {
        renderData.map((data,id)=>{
          return(
          <div className=" w-4/5 md:w-3/5 mx-auto p-0">
            <PromotionCard p = {data}/>
          </div>
          )
        })
      }
      </div>
      
    </div>
  )
}

export default HotelDiscount