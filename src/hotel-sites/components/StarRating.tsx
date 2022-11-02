import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = (props: { starSize: any; }) => {

    const [rating, setRating] = React.useState(0);
    const [hover, setHover] = React.useState(0);
    const { starSize } = props
    const stars = Array(5).fill(0);
  
  const setRatinginValue = (e:number) =>{
    setRating(e);
    return e;
  }
  return (
    <div className="flex flex-rows">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              className="hidden ml-1"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRatinginValue(ratingValue)}
            ></input>
            <FaStar
              className="cursor-pointer duration-[200ms]"
              fontSize={starSize}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            ></FaStar>
          </label>
        );
      })
      }
    </div>
  );
}

export default StarRating