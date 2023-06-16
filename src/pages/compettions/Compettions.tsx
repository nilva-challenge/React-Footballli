import { FC, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageLoader from "../../commonComponents/ImageLoader";
import SearchBox from "../../commonComponents/SearchBox";
import TabDragable from "../../commonComponents/TabComponent";
import CardDropdown from "../../commonComponents/CardDropdown";
import { dateGeneration, getPersisanDate } from "../../utils/helpers";
import { dateTab } from "../../models/dateTab";
import useDebounce from "./../../hooks/useDebounce";

const Competitions: FC = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const debouncedValue = useDebounce<string>(filter, 100);
  const param = useParams();
  const navigate = useNavigate();
  const dates: dateTab[] = [];

  for (let i = -1; i < page * 10; i++) {
    dates.push({
      id: Math.random(),
      date: dateGeneration(new Date(), i),
      name:
        i === -1
          ? "دیروز"
          : i === 0
          ? "امروز"
          : i === 1
          ? "فردا"
          : getPersisanDate(new Date(dateGeneration(new Date(), i))),
    });
  };

  const handleSearchboxChange = useCallback((value: string) => {
    setFilter(value);
  }, []);

  const handleLoadmore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const handleNavigate = useCallback((date: string) => {
    navigate({ pathname: `/competitions/${date}` });
  }, []);

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
        <SearchBox onChange={(value) => handleSearchboxChange(value)} />
        <TabDragable
          scrollContainerClassName="compettions-tab"
          onClickItem={(date) => handleNavigate(date)}
          items={dates}
          param={param.date}
          loadMore={() => handleLoadmore()}
        />
      </div>
      <CardDropdown filtered={debouncedValue} param={param.date} />
    </>
  );
};

export default Competitions;
