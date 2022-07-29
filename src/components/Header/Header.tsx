import { FC } from "react";
import clockImg from "../../assets/images/clock.jpg";

const Header: FC = () => {
  return (
    <div className="flex justify-between p-4 pl-2">
      <h1 className="mt-[3px] text-xl font-extrabold font-iransans">
        نتایج زنده
      </h1>
      <img src={clockImg} alt="Live Score" className="w-8 h-8" />
    </div>
  );
};

export default Header;
