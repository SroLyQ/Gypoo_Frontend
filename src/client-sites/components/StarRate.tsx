import React from 'react';
import {
  HomeIcon,
  PencilSquareIcon,
  TicketIcon,
} from '@heroicons/react/20/solid';

function StarRate(props: { rating: number }) {
  const starrate = [
    {
      star: props.rating,
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
  return (
    <div>
      {starrate.map((data) => {
        return (
          <div className="flex">
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
        );
      })}
    </div>
  );
}

export default StarRate;
