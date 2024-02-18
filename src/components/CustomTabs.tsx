import React, { ReactNode, useEffect, useRef, useState } from "react";
import "../styles/customTab.scss";

interface tabKey {
  [key: string]: ReactNode;
}

interface Tab {
  key: string;
  title: string;
  innerComponent: ReactNode;
}

interface CustomTabsProps {
  tabs: Tab[];
  tabClick?: (tabKey: string) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs, tabClick }) => {
  const [tabKeys, setTabKeys] = useState<Object | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    // bulshit alert!
    if (tabs && tabs.length > 0) setActiveTab(tabs[0].key);
  }, []);

  useEffect(() => {
    setTabKeys(() => {
      let newKeys: tabKey = {};
      tabs.forEach((item) => {
        newKeys[item.key] = item.innerComponent;
      });
      return newKeys;
    });
  }, [tabs]);

  const handleTabClick = (tabKey: string, index: number) => {
    setActiveTab(tabKey);
    if (tabClick) tabClick(tabKey);
  };

  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div
        className="w-100 px-2 d-flex gap-1"
        style={{
          cursor: "pointer",
          overflowX: "auto",
        }}
      >
        {tabs.map((item, index) => {
          return (
            <div
              key={item.key}
              className={
                "px-3 pt-3 text-center d-flex flex-column align-items-center " +
                (activeTab === item.key ? "" : "text-muted")
              }
              onClick={() => handleTabClick(item.key, index)}
            >
              <span className="pt-2" style={{ whiteSpace: "nowrap" }}>
                {item.title}
              </span>
              <div
                className={
                  "mt-2 " + (activeTab === item.key ? "border-active" : "")
                }
              ></div>
            </div>
          );
        })}
      </div>
      <div
        className="w-100 h-100 p-3"
        style={{ backgroundColor: "#f0f0f0", overflowY: "auto" }}
      >
        {activeTab && tabKeys && tabKeys[activeTab]}
      </div>
    </div>
  );
};

export default CustomTabs;
