import React from "react";

const Cell = ({ filled, onClick, isDisabled, label }) => {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      className={`border border-black h-0 pb-[100%] w-full ${
        filled ? "bg-green-500" : "bg-transparent"
      }`}
    />
  );
};

export default Cell;
