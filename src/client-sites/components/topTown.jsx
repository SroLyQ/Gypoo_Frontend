import React from 'react';
import { UserIcon } from '@heroicons/react/20/solid';

function topTown() {
  return (
    <div className="my-10 ">
      <p className=" font-kanit mx-[270px] text-[30px]">จังหวัดยอดฮิต</p>
      <div className="flex mx-auto rounded-2xl w-[900px]  shadow-2xl">
        <img
          className="w-[300px] rounded-l-2xl "
          src="https://image.bangkokbiznews.com/image/kt/media/image/news/2017/08/25/770201/750x422_770201_1503641391.jpg?x-image-process=style/LG"
        ></img>
        <div className="flex flex-col font-kanit text-[20px] p-7">
          <p>กรุงเทพมหานคร</p>
          <div className="flex flex-row">
            <UserIcon className="w-5" />
            <div className="pl-2">{20}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default topTown;
