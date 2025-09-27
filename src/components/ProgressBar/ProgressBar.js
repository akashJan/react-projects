import React, { useState, useEffect } from "react";
import { MAX, MIN } from "./constants.js";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));

    if (value >= MAX) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="h-5 w-[500px] bg-gray-200 relative  border border-black rounded-2xl overflow-hidden">
      <span
        className="flex w-full h-5 absolute justify-center items-center z-10"
        style={{ color: percent > 49 ? "white" : "black" }}
      >
        {percent.toFixed()}%
      </span>
      <div
        className="h-full bg-green-400"
        // style={{ width: `${percent}%` }}
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left",
        }}
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent.toFixed}
      />
    </div>
  );
};

export default ProgressBar;
