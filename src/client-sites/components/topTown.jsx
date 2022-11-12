import React from 'react';
import { UserIcon } from '@heroicons/react/20/solid';

function topTown() {
  const Datas = [
    {
      town: 'Jacumba',
      picture:
        'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png',
      reviwe: 974,
    },
    {
      town: 'Vaughn',
      picture:
        'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png',
      reviwe: 267,
    },
    {
      town: 'Sidman',
      picture:
        'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png',
      reviwe: 318,
    },
    {
      town: 'Wyano',
      picture:
        'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png',
      reviwe: 371,
    },
    {
      town: 'Russellville',
      picture:
        'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png',
      reviwe: 148,
    },
    {
      town: 'Strong',
      picture:
        'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png',
      reviwe: 223,
    },
    {
      town: 'Grimsley',
      picture:
        'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png',
      reviwe: 522,
    },
    {
      town: 'Williamson',
      picture:
        'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png',
      reviwe: 69,
    },
    {
      town: 'Shasta',
      picture:
        'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png',
      reviwe: 601,
    },
    {
      town: 'Riverton',
      picture:
        'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png',
      reviwe: 886,
    },
  ];

  return (
    <div className="my-10 w-[900px] mx-auto">
      <p className=" font-kanit text-[30px] mb-5">จังหวัดยอดฮิต</p>
      {Datas.map((data) => {
        return (
          <div className="flex mx-auto rounded-2xl w-[900px] shadow-2xl mb-5 ">
            <img
              className="w-[300px] rounded-l-2xl h-[230px] object-cover object-left "
              src={data.picture}
            ></img>
            <div className="flex flex-col font-kanit text-[20px] p-7">
              <p>{data.town}</p>
              <div className="flex flex-row">
                <UserIcon className="w-5" />
                <div className="pl-2">{data.reviwe}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default topTown;
