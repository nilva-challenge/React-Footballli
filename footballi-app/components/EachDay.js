import Link from "next/link";
import React from "react";

function EachDay({ day }) {
  return (
    <Link href={day.date}>
      <p className="db-ruby ">
        {day.title}
      </p>
    </Link>
  );
}

export default EachDay;
