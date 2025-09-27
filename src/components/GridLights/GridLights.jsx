import React from "react";
import Cell, { filled, onClick } from "./Cell";

const gridLights = () => {
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const activateCells = (index) => {};
  return (
    <>
      <h2>Grid Lights</h2>
      <div className="flex items-center justify-center flex-col gap-1">
        <div className="grid max-[300px] w-[100%] p-5 gap-5 border border-gray-400">
          {config.flat(1).map((value, index) => {
            <Cell
              className="bg-transparent border-gray-600 h-0 pb-[100%]"
              key={index}
              filled={false}
              onClick={() => activateCells(index)}
            />;
          })}
        </div>
      </div>
    </>
  );
};

export default gridLights;
