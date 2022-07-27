import clockImg from "../../assets/images/clock.jpg";

const TopNav = () => {
  return (
    <div className="flex justify-between p-4 pl-2">
      <h1 className="mt-[10px] text-xl font-extrabold font-iransans">
        نتایج زنده
      </h1>
      <img src={clockImg} alt="Live Score" />
    </div>
  );
};

export default TopNav;
