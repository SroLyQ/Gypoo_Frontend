import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './client-sites/page/Main';
import Hotel from './client-sites/page/Hotel';
import Restaurant from './client-sites/page/Restaurant';
import Activity from './client-sites/page/Activity';
import RentHotel from './client-sites/page/RentHotel';
import HotelNavbar from './hotel-sites/components/HotelNavbar';
import HotelHotels from './hotel-sites/pages/HotelHotels';
import AddHotel from './hotel-sites/pages/AddHotel';
import HotelProfile from './hotel-sites/pages/HotelProfiles';
import HotelDiscount from './hotel-sites/pages/HotelDiscount';
import HotelHistory from './hotel-sites/pages/HotelHistory';
//import HotelInnerCard from './hotel-sites/components/HotelInnerCard';
import HotelInnerRoomCard from './hotel-sites/components/HotelInnerRoomCard';
//import testdata from './hotel-sites/pages/testdata.json';
import EditRoom from './hotel-sites/pages/EditRoom';
import AddRoom from './hotel-sites/pages/AddRoom';
import AddPromotion from './hotel-sites/pages/AddPromotion';
import EditHotel from './hotel-sites/pages/EditHotel';
import Search from './client-sites/page/Search';
function App() {
  return (
    <>
      {/*deaw gor mee contition aa*/}
      <HotelNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/restaurant" element={<Restaurant/>} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/hotelhotels" element={<HotelHotels />} />
          <Route path="/addhotel" element={<AddHotel />} />
          <Route path="/hotelhistory" element={<HotelHistory />} />
          <Route path="/hotelprofile" element={<HotelProfile />} />
          <Route path="/hoteldiscount" element={<HotelDiscount />} />
          <Route path="/hotel/:_id" element={<HotelInnerRoomCard />} />
          <Route path="/hotel/:_id/editroom/:_roomid" element={<EditRoom />} />
          <Route path="/hotel/:_id/edit" element={<EditHotel />} />
          <Route path="/hotel/:_id/addroom" element={<AddRoom />} />
          <Route path="/hotel/:_id/addpromotion" element={<AddPromotion />} />
          <Route path="/search" element={<Search />} />
          <Route path="/renthotel" element={<RentHotel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
