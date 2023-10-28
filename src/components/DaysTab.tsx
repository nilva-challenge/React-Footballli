import { Accordion, Flex, Tabs, Image } from "@mantine/core";
import { useState } from "react";
import { sampleData } from "../sampleData";
import { MatchAccordion, MatchBox } from ".";
import moment from "jalali-moment";

const tabItems = [
  { title: "دیروز", data: sampleData.all },
  { title: "امروز", data: sampleData.all },
  { title: "فردا", data: sampleData.all },
  { title: "جمعه", data: sampleData.all },
  { title: "۳۱ خرداد", data: sampleData.all },
];

const DaysTab = () => {
  const [activeTab, setActiveTab] = useState<string | null>("امروز");

  return (
    <>
      <Tabs
        variant="pills"
        value={activeTab}
        onChange={setActiveTab}
        color={undefined}
        styles={{
          list: {
            zIndex: 1,
            position: "sticky",
            top: "0px",
            alignSelf: "flex-start",
            flexWrap: "nowrap",
            overflow: "auto",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            border: "",
            backgroundColor: "white",
          },
          tabLabel: {
            fontSize: "1rem",
            fontWeight: "bold",
          },
          panel: {
            padding: 0,
            zIndex: 0,
          },
        }}
      >
        <Tabs.List>
          {tabItems.map((item) => {
            return (
              <Tabs.Tab
                styles={{
                  tab: {
                    backgroundColor: "white",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  },
                  tabLabel: {
                    color: activeTab == item.title ? "#212121" : "#E0E0E0",
                    paddingBottom: "15px",
                    borderBottom:
                      activeTab == item.title
                        ? "3px solid #2E7D32"
                        : "3px solid white",
                    borderRadius: "2px",
                    transition: "all 0.3s",
                  },
                }}
                key={item.title}
                value={item.title}
              >
                {item.title}
              </Tabs.Tab>
            );
          })}
        </Tabs.List>

        {tabItems.map((item1) => {
          return (
            <Tabs.Panel key={item1.title} value={item1.title}>
              <Flex
                key={item1.title}
                px={"20px"}
                direction={"column"}
                align={"center"}
                className="overflow-auto"
              >
                {item1.data.map((item2) => {
                  return (
                    <div className="w-[100%] m-[10px] shadow-md rounded-lg shadow-[#BDBDBD] bg-white">
                      <MatchAccordion key={item2.api_id}>
                        <Accordion.Item key={item2.name} value={item2.name}>
                          <Accordion.Control>
                            <Flex align={"center"} gap={"5px"}>
                              <Image w={"2rem"} h={"2rem"} src={item2.logo} />
                              <span className="font-bold">{item2.name}</span>
                            </Flex>
                          </Accordion.Control>
                          <Accordion.Panel key={item2.api_id}>
                            {item2.fixtures.map(
                              ({ api_id, home, away, start_time }) => {
                                const todayJalali = moment(start_time)
                                  .locale("fa")
                                  .format("H:mm");
                                return (
                                  <div className="border-b-[2px] border-solid border-[#F5F5F5] pb-[10px]">
                                    <MatchBox
                                      key={api_id}
                                      homeName={home.name}
                                      homeLogo={home.logo}
                                      awayName={away.name}
                                      awayLogo={away.logo}
                                      time={todayJalali}
                                    />
                                  </div>
                                );
                              }
                            )}
                          </Accordion.Panel>
                        </Accordion.Item>
                      </MatchAccordion>
                    </div>
                  );
                })}
              </Flex>
            </Tabs.Panel>
          );
        })}
      </Tabs>
    </>
  );
};
export default DaysTab;
