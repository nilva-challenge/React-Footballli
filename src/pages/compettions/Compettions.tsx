import { FC } from "react";
import { useParams } from "react-router-dom";
import ImageLoader from "../../commonComponents/ImageLoader";
import SearchBox from "../../commonComponents/SearchBox";
import TabDragable from "../../commonComponents/TabDragable";
import CardDropdown from "../../commonComponents/CardDropdown";

const testData = [
  {
    id: "1",
    item: "دیروز",
  },
  {
    id: "2",
    item: "امروز",
  },
  {
    id: "3",
    item: "فردا",
  },
  {
    id: "4",
    item: "جمعه",
  },
  {
    id: "5",
    item: "13 خرداد",
  },
  {
    id: "6",
    item: "14 خرداد",
  },
  {
    id: "7",
    item: "15 خرداد",
  },
];

const Competitions: FC = () => {
  const param = useParams();

  return (
    <>
      <div className="competitions">
        <div className="title">
          <h1>نتایج زنده</h1>
          <ImageLoader
            figureClassName="clock-icon"
            src="/public/svg/clock.svg"
          />
        </div>
        <SearchBox onChange={(value) => console.log(value)} />
        <TabDragable
          scrollContainerClassName="compettions-tab"
          onClickItem={(id) => console.log(id)}
          items={testData}
        />
      </div>
      <CardDropdown param={param.date} />
    </>
  );
};

export { Competitions };
