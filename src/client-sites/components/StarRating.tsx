import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = (props: { starSize: any; setParentRating: any }) => {
  const { starSize, setParentRating } = props;
  const stars = Array(5).fill(0);
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

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
              onClick={() => {
                setHover(ratingValue);
                setRating(ratingValue);
                props.setParentRating(ratingValue);
              }}
            ></input>
            <FaStar
              className="cursor-pointer duration-[200ms]"
              fontSize={starSize}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => {
                if (rating > 0) {
                  setHover(rating);
                } else {
                  setHover(0);
                }
              }}
            ></FaStar>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
