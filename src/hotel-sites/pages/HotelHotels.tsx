import React,{useState,useEffect} from 'react'
import testdata from './testdata.json'
import HotelCard from '../components/HotelCard'

function HotelHotels() {
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
      <div>
          <p>aaaaa</p>
          <input className="" type="text" placeholder="search si ai sus" onChange={e => handleFilter(e.target.value)}/>
      </div>
      <div className="grid grid-rows-1 grid-flow-rows justify-center">
      {
        renderData.map((data,id)=>{
          return(
          <div>
            <HotelCard data = {data}/>
          </div>
          )
        })
      }

      </div>
    </div>
    
  )
}

export default HotelHotels