import { FC, memo, useState, useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";
import ImageLoader from "../commonComponents/ImageLoader";
import callApi from "../helpers/callApi";
import { FootbaliModel } from "../models/footballi-api/footballi_model";
import { AxiosRequestConfig } from "axios";
import Loading from "./Loading";
import Notfound from "./Notfound";

interface CardDropDownInterface {
  param: string | undefined;
  filtered?: string;
}

interface AxiosResponseSWR {
  data: FootbaliModel;
  status: number;
}
const CardDropDown: FC<CardDropDownInterface> = ({ param, filtered='' }) => {
  const { cache } = useSWRConfig();
  const { data:res, error, isLoading, mutate } = useSWR(`footbali_data`, () => {
    return callApi().get<AxiosRequestConfig, AxiosResponseSWR>(
      `?date=${param}`
    );
  });

  let data = res?.data?.all

  data = data?.filter((item) => {
    if(!filtered) return data
    return item.name.toLowerCase().indexOf(filtered.toLowerCase()) !== -1;
  });

  useEffect(() => {
    mutate();
    return () => cache.delete("footbali_data");
  }, [param]);

  const [hidden, setHidden] = useState<string[]>([]);
  const setClock = (date: string): string => {
    return `${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
  };

  if (error)
    return <Notfound text="متاسفانه خطایی رخ داده است" statusCode={500} />;
  if (isLoading) return <Loading />;
  return (
    <>
      {!!data?.length ? (
        data?.map((item) => (
          <div className="card-dropdown" key={item.id}>
            <div
              className="dropdown-header"
              onClick={() =>
                setHidden((prev) =>
                  prev.includes(item.id)
                    ? prev.filter((prev) => prev !== item.id)
                    : [...prev, item.id]
                )
              }
            >
              <div className="header-title">
                <ImageLoader figureClassName="title-image" src={item.logo} />
                <h2> {item.name} </h2>
              </div>
              <ImageLoader
                figureClassName="header-icon"
                src={`${
                  hidden.includes(item.id)
                    ? "/public/svg/arrow_bottom.svg"
                    : "/public/svg/arrow_top.svg"
                }`}
              />
            </div>
            <div
              className={`dropdown-body ${
                hidden.includes(item.id) ? "hidden" : ""
              }`}
            >
              {item.fixtures.map((fixture) => (
                <div className="dropdown-fixture" key={fixture.id}>
                  <div className="fixture-team">
                    <span className="body-text">{fixture?.home?.name}</span>
                    <ImageLoader
                      figureClassName="fixture-logo"
                      src={fixture?.home.logo}
                    />
                  </div>
                  <div className="fixture-time body-text">
                    {setClock(fixture?.start_time)}
                  </div>
                  <div className="fixture-team">
                    <ImageLoader
                      figureClassName="fixture-logo"
                      src={fixture?.away.logo}
                    />
                    <span className="body-text">{fixture?.away?.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <Notfound text="متاسفانه اطلاعاتی پیدا نشد..." />
      )}
    </>
  );
};

export default memo(CardDropDown);
