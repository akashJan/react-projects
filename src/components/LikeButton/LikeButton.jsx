import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleLikeUnlike = async () => {
    setIsFetching(true);
    setError(null);

    try {
      const response = await fetch(
        "https://questions.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        } 
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        if (data.action === "like") setLiked(true);
        else if (data.action === "unlike") setLiked(false);
        else setLiked(!liked);
      } else {
        setError(data.message);
      }
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div>
      <button
        disabled={isFetching}
        onClick={handleLikeUnlike}
        className={`
          flex justify-center items-center gap-2 border-2 rounded-3xl cursor-pointer font-bold 
          h-8 px-3 py-2 mb-2 m-12 transition-colors duration-200
          ${
            liked
              ? "text-white bg-activeColor border-activeColor hover:bg-activeColor hover:border-activeColor"
              : "text-defaultColor bg-white border-defaultColor hover:text-activeColor hover:border-activeColor"
          }
        `}
      >
        {isFetching ? <ImSpinner2 className="animate-spin" /> : <FaRegHeart />}
        {liked ? "Liked" : "Like"}
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default LikeButton;
