import { ScheduleOutlined } from "@mui/icons-material";
import { useState } from "react";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between pt-5">
      <p className="text-lg">نتایج زنده</p>
      <ScheduleOutlined />
    </div>
  );
};
export default Header;
