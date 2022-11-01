import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './client-sites/components/Navbar';
import Main from './client-sites/components/Main';
import Hotel from './client-sites/components/Hotel';
import Restaurant from './client-sites/components/Restaurant';
import Activity from './client-sites/components/Activity';
import HotelNavbar from './hotel-sites/components/HotelNavbar';
import HotelHotels from './hotel-sites/pages/HotelHotels';
import HotelHome from './hotel-sites/pages/HotelHome';
import HotelRestaurants from './hotel-sites/pages/HotelRestaurants';
import HotelAnnouncements from './hotel-sites/pages/HotelAnnouncements';
import HotelProfile from './hotel-sites/pages/HotelProfiles';
import HotelDiscount from './hotel-sites/pages/HotelDiscount';
import HotelHistory from './hotel-sites/pages/HotelHistory';
import HotelInnerCard from './hotel-sites/components/HotelInnerCard';
import testdata from './hotel-sites/pages/testdata.json'
import LoginPage from './hotel-sites/pages/Login';
function App() {
  return (
    <>
      {/*deaw gor mee contition aa*/}
      <HotelNavbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/activity" element={<Activity />} />
          <Route path='/hotelhotels' element = {<HotelHotels/>}/>
          <Route path='/hotelrestaurants' element = {<HotelRestaurants/>}/>
          <Route path='/hotelannouncements' element = {<HotelAnnouncements/>}/>
          <Route path='/hotelhistory' element = {<HotelHistory/>}/>
          <Route path='/hotelprofile' element = {<HotelProfile/>}/>
          <Route path='/hoteldiscount' element = {<HotelDiscount/>}/>
          <Route path ='/hotelhome' element = {<HotelHome/>} /> 
          {testdata.map((data,index)=>{
           const thispath="/hotel/"+String(data.name).replace(" ","%20");
              return (
            <Route path={thispath} element={<HotelInnerCard data={data} />}/> 
          );})}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;