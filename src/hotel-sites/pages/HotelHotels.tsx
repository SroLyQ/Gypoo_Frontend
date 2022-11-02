import React,{useState,useEffect} from 'react'
import testdata from './testdata.json'
import HotelCard from '../components/HotelCard'
import { Routes,Route,Link } from 'react-router-dom'
import HotelInnerCard from '../components/HotelInnerCard'
function HotelHotels() {
  const [renderData,setrenderData] = React.useState(testdata)
  const originaldata = testdata
  const [searchWord,setsearchWord] = useState("");
  const excludeColumns = ["name","address"];
  const [selectDelete,setSelectDelete] = useState(false)
  const [deletedData,setDeletedData] = useState([])
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
    const toggleDelete = () =>{
      setSelectDelete(!selectDelete)
    }
  return (
    <div className="pt-24 md:grid md:grid-flow-row ">
      <div className = "md:justify-self-center">
          <p>aaaaa</p>
          <input className="" type="text" placeholder="search si ai sus" onChange={e => handleFilter(e.target.value)}/>
      </div>
      <div className="md:grid md:grid-flow-col md:justify-self-center">
          <div className=" w-96 "></div>
          <div className=" w-96 "></div>
          <div className="flex space-x-4 ml-72 md:ml-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8" onClick={toggleDelete}><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
          </div>
      </div>
      <div className="grid grid-rows-1 grid-flow-rows justify-center">
      {
        renderData.map((data,id)=>{
          return(
          selectDelete ?
          
          <div className="relative grid-flow-row ">
          <div className="z-40 h-10 w-10 bg-amber-400 absolute top-5 md:left-[20%] left-[10%]"></div>
          <div className="z-30 md:w-3/5 w-4/5 h-[95%] bg-slate-300 opacity-20  mx-auto absolute top-5  md:left-[20%] left-[10%] rounded-lg"></div>
          <Link to = {"/hotel/" + String(data.name).replace(" ","%20")} className="z-20">  
            <HotelCard data = {data} />
          </Link>
          
          </div>
          :
          <div>
          <Link to = {"/hotel/" + String(data.name).replace(" ","%20")}>
            <HotelCard data = {data}/>
          </Link>
          </div>
          
          )
        })
      }
      </div>
      
    </div>
    
  )
}

export default HotelHotels