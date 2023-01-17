import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import BottomMenu from "./BottomMenu";

const MobileContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const [page, setPage] = useState(location.pathname);
  useEffect(() => {
    navigate(page);
  }, [page]);
  return (
    <div className="max-w-sm m-auto flex flex-col justify-between h-[100vh]">
      <Outlet />
      <BottomMenu page={page} setPage={setPage} />
    </div>
  );
};
export default MobileContainer;
