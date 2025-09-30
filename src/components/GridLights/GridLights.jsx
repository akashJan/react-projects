import React, { useState } from "react";
import Cell from "./Cell";

const GridLights = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    // console.log(newOrder);
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  return (
    <>
      <h2 className="flex justify-center my-2 text-xl font-bold">
        Grid Lights
      </h2>
      <div className="flex flex-col items-center justify-center gap-4">
        <div
          className="grid w-full max-w-[300px] p-5 gap-5 border border-black"
          style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
        >
          {config
            .flat(1)
            .map((value, index) =>
              value ? (
                <Cell
                  key={index}
                  label={`Cell ${index}`}
                  filled={order.includes(index)}
                  onClick={() => activateCells(index)}
                  isDisabled={order.includes(index) || isDeactivating}
                />
              ) : (
                <span key={index} />
              )
            )}
        </div>
      </div>
    </>
  );
};

export default GridLights;
