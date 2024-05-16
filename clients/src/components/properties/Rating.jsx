import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRatings, updateRating } from "../../redux/actions/apartmentActions";
import { LiaStarSolid } from "react-icons/lia";

function Rating({ apartmentId, initialRating }) {
  const [rating, setRating] = useState(initialRating);
  const dispatch = useDispatch();

//console.log(rating)

  const handleStarClick = (value) => {
    setRating(value);
    dispatch(updateRating(apartmentId, value));
    dispatch(getRatings(value));
  };

  return (
    <div className="flex items-center gap-1">
      {[1].map((e) => (
        <LiaStarSolid
          key={e}
          className={`text-yellow-400 cursor-pointer ${
            e <= rating ? "text-yellow-400" : "text-gray-400"
          }`}
          onClick={() => handleStarClick(e)}
        />
      ))}
    </div>
  );
}

export default Rating;
