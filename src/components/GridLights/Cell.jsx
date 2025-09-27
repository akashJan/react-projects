import React from "react";

const Cell = ({ filled, onClick }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={filled ? "cell cell-activated" : "cell"}
      />
    </div>
  );
};

export default Cell;
