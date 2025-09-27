import React, { useState } from "react";

const DiscountedAmountCal = () => {
  let [originalAmount, setOriginalAmount] = useState("");
  let [discountPercentage, setDiscountPercentage] = useState("");
  let [finalePrice, setFinalePrice] = useState("");

  const calculateDiscount = () => {
    const price = parseFloat(discountPercentage / 100);
    const discountAmount = originalAmount * price;

    setFinalePrice(discountAmount);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex justify-center items-center px-10 py-5 flex-col  bg-white rounded-xl shadow-xl">
          <h2 className="text-[var(--text-primary)] text-xl m-2">
            DISCOUNT CALCULATOR
          </h2>
          <p className="text-[var(--text-primary)] text-lg m-2">
            Enter the Bill amount and discount in percentage
          </p>
          <div className="flex flex-col self-start ">
            <label className="text-[var(--text-primary)]" htmlFor="">
              {" "}
              Bill Amount
            </label>

            <input
              type="number"
              className="bg-gray-200 rounded-lg"
              value={originalAmount}
              onChange={(e) => {
                setOriginalAmount(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col self-start">
            <label className="text-[var(--text-primary)]" htmlFor="">
              {" "}
              Discount Percentage
            </label>

            <input
              type="number"
              className="bg-gray-200 rounded-lg"
              value={discountPercentage}
              onChange={(e) => {
                setDiscountPercentage(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-[var(--text-primary)] text-white text-xl w-full py-2 m-4 rounded-lg"
            onClick={calculateDiscount}
          >
            Calculate
          </button>
          <p className="text-[var(--text-primary)]">
            Total Discounted Amount is : {finalePrice}
            {"₹"}
          </p>
        </div>
      </div>
    </>
  );
};

export default DiscountedAmountCal;
