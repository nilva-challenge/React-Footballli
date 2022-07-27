import React from "react";

function DateSelection() {
  return (
    <ul className="flex justify-center mt-4">
      <li>دیروز</li>
      <li className="border-b-4 border-[#5b9a3f] mx-8 rounded-b-sm">امروز</li>
      <li>فردا</li>
    </ul>
  );
}

export default DateSelection;
