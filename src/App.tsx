import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Hotel from './components/Hotel';
import Restaurant from './components/Restaurant';
import Activity from './components/Activity';
import HotelNavbar from './hotel-sites/components/HotelNavbar';
import HotelHotels from './hotel-sites/pages/HotelHotels';
import HotelHome from './hotel-sites/pages/HotelHome';
import HotelRestaurants from './hotel-sites/pages/HotelRestaurants';
import HotelTourisms from './hotel-sites/pages/HotelTourisms';
import HotelAnnouncements from './hotel-sites/pages/HotelAnnouncements';
import HotelProfile from './hotel-sites/pages/HotelProfiles';
import HotelDiscount from './hotel-sites/pages/HotelDiscount';
import HotelHistory from './hotel-sites/pages/HotelHistory';
function App() {
  return (
    <>
      
      <HotelNavbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/activity" element={<Activity />} />
          <Route path='/hotelhotels' element = {<HotelHotels/>}/>
          <Route path='/hotelrestaurants' element = {<HotelRestaurants/>}/>
          <Route path='/hoteltourisms' element = {<HotelTourisms/>}/>
          <Route path='/hotelannouncements' element = {<HotelAnnouncements/>}/>
          <Route path='/hotelhistory' element = {<HotelHistory/>}/>
          <Route path='/hotelprofile' element = {<HotelProfile/>}/>
          <Route path='/hoteldiscount' element = {<HotelDiscount/>}/>
          <Route path ='/hotelhome' element = {<HotelHome/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
