import React, { useState } from "react";
import { countries } from "../utils/countryData";

const Dropdown = () => {
  const [selectCountry, setSelectCountry] = useState(0);

  const onChange = (e) => {
    setSelectCountry(Number(e.target.value));
  };

  return (
    <div className="flex justify-center gap-6 my-10">
      {/* Country Dropdown */}
      <select
        onChange={onChange}
        value={selectCountry}
        className="px-4 py-2 bg-orange-600 text-white rounded-lg shadow-md cursor-pointer focus:outline-none"
      >
        {countries.map((country, index) => (
          <option key={index} value={index}>
            {country.name}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
      <select className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md cursor-pointer  focus:outline-none">
        {countries[selectCountry].cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
