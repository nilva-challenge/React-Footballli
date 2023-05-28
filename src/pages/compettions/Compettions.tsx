import { FC } from "react";
import ImageLoader from "../../commonComponents/ImageLoader";
import SearchBox from "../../commonComponents/SearchBox";

const Competitions: FC = () => {
  return (
    <div className="competitions">
      <div className="title">
        <h1>نتایج زنده</h1>
        <ImageLoader figureClassName="clock-icon" src="/public/svg/clock.svg" />
      </div>
      <SearchBox onChange={(value) => console.log(value)} />
    </div>
  );
};

export { Competitions };
