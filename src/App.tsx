import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './client-sites/page/Main';
import Hotel from './client-sites/page/Hotel';
import Restaurant from './client-sites/page/Restaurant';
import Activity from './client-sites/page/Activity';
import HotelNavbar from './hotel-sites/components/HotelNavbar';
import HotelHotels from './hotel-sites/pages/HotelHotels';
import HotelHome from './hotel-sites/pages/HotelHome';
import HotelRestaurants from './hotel-sites/pages/HotelRestaurants';
import AddHotel from './hotel-sites/pages/AddHotel';
import AddRoom from './hotel-sites/pages/AddRoom';
import HotelProfile from './hotel-sites/pages/HotelProfiles';
import HotelDiscount from './hotel-sites/pages/HotelDiscount';
import HotelHistory from './hotel-sites/pages/HotelHistory';
import HotelInnerCard from './hotel-sites/components/HotelInnerCard';
import HotelInnerRoomCard from './hotel-sites/components/HotelInnerRoomCard';
import testdata from './hotel-sites/pages/testdata.json';
<<<<<<< HEAD
//import TestPage from './component/TestPage';


=======
//import Search from './client-sites/page/Search';
>>>>>>> b18410a7a54348c6c2fcfbcdd25ac832f780d248
function App() {
  return (
    <>
      {/*deaw gor mee contition aa*/}
      <HotelNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/activity" element={<Activity />} />
<<<<<<< HEAD
          <Route path='/hotelhotels' element = {<HotelHotels/>}/>
          <Route path='/hotelrestaurants' element = {<HotelRestaurants/>}/>
          <Route path='/addhotel' element = {<AddHotel/>}/>
          <Route path='/hotelhistory' element = {<HotelHistory/>}/>
          <Route path='/hotelprofile' element = {<HotelProfile/>}/>
          <Route path='/hoteldiscount' element = {<HotelDiscount/>}/>
          <Route path ='/hotelhome' element = {<HotelHome/>} /> 
          <Route path ='/hotel/:_id' element = {<HotelInnerRoomCard />} /> 

=======
          <Route path="/hotelhotels" element={<HotelHotels />} />
          <Route path="/hotelrestaurants" element={<HotelRestaurants />} />
          <Route path="/addhotel" element={<AddHotel />} />
          <Route path="/addroom" element={<AddRoom />} />
          <Route path="/hotelhistory" element={<HotelHistory />} />
          <Route path="/hotelprofile" element={<HotelProfile />} />
          <Route path="/hoteldiscount" element={<HotelDiscount />} />
          <Route path="/hotelhome" element={<HotelHome />} />
          <Route path="/hotel/:_id" element={<HotelInnerCard />} />
          {/* <Route path="/search" element={<Search />} /> */}
>>>>>>> b18410a7a54348c6c2fcfbcdd25ac832f780d248
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
