import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <div style={{ height: "80px" }}></div>{" "}
      {/* sure there is a better way, I wont spend time on that for now.*/}
      <Footer />
    </>
  );
};

export default MainLayout;
