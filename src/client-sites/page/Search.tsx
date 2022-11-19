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
      star: 3,
      phone: '+66 (996) 489-2004',
      address: '826 Henry Street, Wanship, New Jersey, 4206',
      about:
        'Est elit excepteur id eu duis ad aliqua incididunt consectetur esse exercitation enim velit. Sunt aute cillum laboris duis enim in dolor ad minim incididunt reprehenderit esse consequat est. Cupidatat exercitation laboris nisi eu aliqua consectetur.\r\n',
      registered: '2021-05-13T01:06:26 -07:00',
    },
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

  const Star = (n: number) => {
    const arr = new Array(5);
    for (let i = 1; i <= 5; i++) {
      let str = 0;
      if (i <= n) {
        str = 1;
      }
      arr[i] = str;
    }

    return arr;
  };

  const cateSort = [
    'ที่พักแนะนำตรงใจ',
    'คะแนนรีวิวดีที่สุด',
    'ราคาต่ำที่สุด',
    'ระยะทางใกล้ที่สุด',
  ];

  return (
    <div className="pt-32">
      <div className="text-3xl font-kanit mx-8 md:mx-52 mb-4">
        ค้นหา {searchKey}
      </div>
      <div className="search-post">
        {searchData.map((data, key) => {
          return (
            <div className="mx-8 mb-4 md:mx-52 ">
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
                    <div className="grid grid-flow-rows grid-rows-6 p-5 border-l border-[#D8D8D8]">
                      <div className="flex justify-end">
                        {Star(data.star).map((s: number, i) => {
                          return s ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#EDEA10"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="#EDEA10 "
                              className="md:w-8 w-4 md:h-8 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="#EDEA10 "
                              className="md:w-8 w-4 md:h-8 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          );
                        })}
                      </div>
                      <div className="font-kanit text-1xl row-span-4 text-right ml-28 ">
                        69420 รีวิว
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
