import React,{useState,useEffect} from 'react'
import testdata from './testroomdata.json'
import HistoryCard from '../components/HistoryCard'
import historydata from './historydata.json'
import { Routes,Route,Link } from 'react-router-dom'
function HotelHistory() {
  const [renderData,setrenderData] = React.useState(testdata)
  const originaldata = testdata
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
  useEffect(()=>{
        if(renderData===originaldata){
            setrenderData(originaldata); 
        } 
        else if(renderData.length==0){
            if (searchWord==""){
            setrenderData(originaldata);
            }
        } 
    })
  return (
    <div className="pt-24">
      
      <div className="grid grid-rows-1 grid-flow-rows justify-center">
      {
        historydata.map((h,id)=>{
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