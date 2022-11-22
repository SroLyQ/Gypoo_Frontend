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
          <Route path="/hotelhotels" element={<HotelHotels />} />
          <Route path="/addhotel" element={<AddHotel />} />
          <Route path="/hotelhistory" element={<HotelHistory />} />
          <Route path="/hotelprofile" element={<HotelProfile />} />
          <Route path="/hoteldiscount" element={<HotelDiscount />} />
          <Route path="/myhotel/:id" element={<HotelInnerRoomCard />} />
          <Route path="/hotel/:id/editroom/:idRoom" element={<EditRoom />} />
          <Route path="/hotel/:id/edit" element={<EditHotel />} />
          <Route path="/hotel/:id/addroom" element={<AddRoom />} />
          <Route path="/hotel/:id/addpromotion" element={<AddPromotion />} />
          <Route path="/search" element={<Search />} />

          <Route path="/hotel/:id" element={<Hotel />} />
          <Route path="/activity/:id" element={<Activity />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
