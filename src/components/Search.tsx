import React from 'react';
import { searchData } from '../api/temp';
function Search() {
  console.log(searchData);
  return (
    <div className="pt-24">
      <div className="text-3xl font-kanit mx-52"> ที่พักใน ขอนแก่น </div>
      <div className="search-post">
        {searchData.map((data, key) => {
          return (
            <div className="mx-52 mb-4 ">
              <div className="border-2 rounded-xl shadow-md  ">
                <div key={key}>
                  <div className="grid grid-cols-4 grid-flow-row">
                    <img
                      src={data.picture}
                      className=" w-[390px] h-72 object-cover "
                    />
                    <div className="col-span-2 p-5">
                      <p className="font-kanit text-4xl">{data.name}</p>
                      <p className="font-kanit text-1xl text-blue-700">
                        {data.address}
                      </p>
                      <p className="font-kanit text-1xl text-gray-500">
                        {data.about}
                      </p>
                    </div>
                    <div className="grid grid-flow-rows grid-rows-6 p-5">
                      <p className="font-kanit text-4xl">star {data.star}</p>
                      <div className="font-kanit text-1xl row-span-4 text-right ml-28 ">
                        รีวิว 12345
                      </div>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" >
                        รายระเอียดเพิ่มเติม
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
