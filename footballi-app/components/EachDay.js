import Link from "next/link";
import React from "react";

function EachDay({ activeName, setActiveName, day }) {
  return (
    <Link href={day.date}>
      <p
        className={`${
          activeName === day.name &&
          "font-bold border-b-4 border-green-600 rounded pb-3"
        } db-ruby`}
        onClick={() => setActiveName(day.name)}
        name={day.name}
      >
        {day.title}
      </p>
    </Link>
  );
}

export default EachDay;
