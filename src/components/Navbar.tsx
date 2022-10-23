import React, { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className="w-screen h-[95px] z-10 bg-gray-100 fixed drop-shadow-md">
      <div className="px-8 flex justify-between items-center w-full h-full">
        <a href="/">
          <img
            src={logo}
            alt={'logo'}
            className="  border-1   hidden md:flex w-32"
          />
        </a>
        {/* phone */}
        <div className="md:hidden mx-auto ">
          <a href="/">
            <img src={logo} alt={'logo'} className="w-32" />
          </a>
        </div>

        <ul className="hidden md:flex space-x-7 pr-12">
          <li className="">
            <a href="/">หน้าหลัก</a>
          </li>
          <li className="">
            <a href="/hotel">โรงแรม</a>
          </li>
          <li className="">
            <a href="/restaurant">ร้านอาหาร</a>
          </li>
          <li className="">
            <a href="/activity">กิจกรรม</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
