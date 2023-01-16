import { ScheduleOutlined, Search } from "@mui/icons-material";
import { IconButton, InputBase } from "@mui/material";
import { useState } from "react";

const SearchBar = () => {
  return (
    <div className="w-full flex items-center justify-between pt-5 px-4">
      <div className="bg-gray-100 w-full flex rounded-lg">
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <Search />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="جستجو..."
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </div>
  );
};
export default SearchBar;
