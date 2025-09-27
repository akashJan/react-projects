import React, { useState } from "react";
// import bgChange from "./bgChange.css";

const BgChange = () => {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        class="bodyContainer"
        className="w-full h-screen duration-20"
        style={{ backgroundColor: color }}
      >
        <div
          class="mainContainer"
          className="fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2"
        >
          <div
            class="container"
            className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
          >
            <button
              onClick={() => {
                setColor("red");
              }}
              style={{ backgroundColor: "red" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              style={{ backgroundColor: "blue" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              style={{ backgroundColor: "green" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BgChange;
