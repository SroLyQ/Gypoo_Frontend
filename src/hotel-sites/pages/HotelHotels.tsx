import React from 'react'
import testdata from './testdata.json'
import HotelCard from './HotelCard'

function HotelHotels() {
  return (
    <div className="pt-24">
      <div className="grid grid-rows-1 grid-flow-rows justify-center">
      {
        testdata.map((data,id)=>{
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