import React, { FC, useState } from "react";
import { ResultSearchProps } from "./index.d";
import { VscSearch } from "react-icons/vsc";

const ResultSearch: FC<ResultSearchProps> = ({ searchValue, searchField }) => {
  return (
    <div>
      <div className="flex items-center h-12 flex-row-reverse">
        <div className="mx-4 text-gray-500 ">
          <VscSearch />
        </div>
        <input
          placeholder="...جستجوی تیم یا لیگ"
          className="h-full w-full bg-gray-100 text-right outline-none"
          type="text"
          id="search"
          name="search"
          value={searchField}
          onChange={(e) => searchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ResultSearch;
