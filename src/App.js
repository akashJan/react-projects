import React from "react";
// import { useState, useEffect } from "react";

// import BgChanger from "./components/BackgroundChanger/BgChange";
// import PassGen from "./components/PasswordGenerator/PassGen";
// import Dropdown from "./components/Dropdown/Dropdown";
// import Timer from "./components/Timer/Timer";
// import DiscountedAmountCal from "./components/DiscountAmoutCal/DiscountedAmountCal";
// import ProgressBar from "./components/ProgressBar/ProgressBar.js";
// import GridLight from "./components/GridLights/GridLights.jsx";
// import CurrencyConvertor from "./components/CurrencyConvertor/CurrencyConvertor";
// import LikeButton from "./components/LikeButton/LikeButton.jsx";
import DarkLightToggle from "./components/DarkLightMode/DarkLightToggle";

const App = () => {
  // Use this for Progress Bar
  // const [value, setValue] = useState(0);
  // const [success, setSuccess] = useState(false);
  // useEffect(() => {
  //   setInterval(() => {
  //     setValue((val) => val + 1);
  //   }, 100);
  // }, []);
  return (
    <>
      {/* <BgChanger /> */}
      {/* <PassGen /> */}
      {/* <Dropdown /> */}
      {/* <Timer /> */}
      {/* <DiscountedAmountCal /> */}
      {/* <div className="flex flex-col  items-center gap-2 font-serif">
        <span>ProgressBar</span>
        <ProgressBar value={value} onComplete={() => setSuccess(true)} />
        <span>{success ? "Complete" : "Loading"}</span>
      </div> */}

      {/* <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="container">
          <CurrencyConvertor />
        </div>
      </div> */}
      {/* <GridLight /> */}
      {/* <LikeButton /> */}
      <DarkLightToggle />
    </>
  );
};

export default App;
