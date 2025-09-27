import React, { useState, useEffect } from "react";
//Create timer - Include button for start , stop and restart the timer
// Clicking stop then start resume the timer
// Clicking  "restart"  should reset the timer to  0
const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let interval;
    if (flag) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [flag]);

  const handleRestart = () => {
    setTimer(0);
    setFlag(true);
  };

  return (
    <div className="flex items-center justify-center flex-col  my-20   ">
      <h2 className="text-5xl ">{timer}</h2>
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          className="px-4 py-3 w-28 rounded bg-green-600 text-white text-[1.1rem] cursor-pointer"
          onClick={() => setFlag(true)}
        >
          Start
        </button>
        <button
          className="px-4 py-3 w-28 rounded bg-red-600 text-white text-[1.1rem] cursor-pointer"
          onClick={() => setFlag(false)}
        >
          Stop
        </button>
        <button
          className="px-4 py-3 w-28 rounded bg-yellow-500 text-white text-[1.1rem] cursor-pointer"
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Timer;
