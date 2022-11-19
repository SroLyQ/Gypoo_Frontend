import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams] = useSearchParams();
  const searchKey = searchParams.get('key');
  const searchGuest = searchParams.get('guest');

  const searchData = [
    {
      _id: '636f4b4867222bd9aa59d669',
      isActive: true,
      town: 'Takilma',
      name: 'Amie hotel',
      price: 2419,
      picture: 'https://pbs.twimg.com/media/FJIEiiTaIAMqZ1e.jpg',
      star: 2,
      phone: '+66 (996) 489-2004',
      address: '826 Henry Street, Wanship, New Jersey, 4206',
      about:
        'Est elit excepteur id eu duis ad aliqua incididunt consectetur esse exercitation enim velit. Sunt aute cillum laboris duis enim in dolor ad minim incididunt reprehenderit esse consequat est. Cupidatat exercitation laboris nisi eu aliqua consectetur.\r\n',
      registered: '2021-05-13T01:06:26 -07:00',
    },
  ];

  return (
    <div className="pt-32">
      <div className="text-3xl font-kanit mx-52 mb-4">ค้นหา "{searchKey}"</div>
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
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
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
