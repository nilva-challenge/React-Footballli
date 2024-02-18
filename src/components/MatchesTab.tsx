import React, { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import { appConfig } from "../config/app.config";
import CustomCard from "./CustomCard";
import RenderMatches from "./RenderMatches";

interface MatchesTabProps {
  search: string;
}

const MatchesTab: React.FC<MatchesTabProps> = React.memo(({ search }) => {
  const [allData, setData] = useState<any[]>(null);

  useEffect(() => {
    fetchData(search);
  }, [search]);

  const fetchData = async (search: string) => {
    // use search if needed.
    try {
      // let's test our proxy humen
      const { data } = await ApiService.get(
        appConfig.PROXY_BASE_URL + appConfig.API_BASE_URL
      );
      setData(data.all);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {allData &&
        allData.map((el: any) => {
          return (
            <CustomCard
              key={el.id}
              className="mb-3"
              title={el.name}
              logo={el.logo}
            >
              <RenderMatches
                matches={el.fixtures.map((item: any) => ({
                  start_time: item.start_time,
                  home_logo: item.home.logo,
                  home_name: item.home.name,
                  away_logo: item.away.logo,
                  away_name: item.away.name,
                }))}
              />
            </CustomCard>
          );
        })}
    </div>
  );
});

export default MatchesTab;
