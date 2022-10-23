import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Hotel from './components/Hotel';
import Restaurant from './components/Restaurant';
import Activity from './components/Activity';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
