import { FC } from "react";
import clockImg from "../../assets/images/clock.jpg";
import { useDate } from "../../hooks/UseDate";

const Header: FC = () => {
  const { date } = useDate();
  console.log(date, new Date().toISOString().split("T")[0]);
  return (
    <div className="flex justify-between p-4 pl-2">
      <h1 className="mt-[3px] text-xl font-extrabold font-iransans">فوتبالی</h1>
      <img
        src="https://www.api-football.com/public/img/favicon.ico"
        alt="Live Score"
        className="w-8 h-8"
      />
    </div>
  );
};

export default Header;
