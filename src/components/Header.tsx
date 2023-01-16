import { ScheduleOutlined } from "@mui/icons-material";
import { useState } from "react";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between pt-5 px-4">
      <p className="text-xl font-bold">نتایج زنده</p>
      <ScheduleOutlined className="!text-3xl"/>
    </div>
  );
};
export default Header;
