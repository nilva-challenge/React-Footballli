import React from "react";
import CustomTabs from "../components/CustomTabs";
import MatchesTab from "../components/MatchesTab";

const Wanted: React.FC = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-3">
        <h2 className="mb-0" style={{ fontWeight: "bold" }}>
          نتایج زنده
        </h2>
        <div>
          <i
            className="bi bi-alarm"
            style={{ fontSize: "30px", fontWeight: "bold" }}
          ></i>
        </div>
      </div>

      <div className="w-100 px-3">
        <input
          className="w-100 p-2 custom-input"
          placeholder="جستجو کنید ..."
        />
      </div>

      <CustomTabs
        tabs={[
          {
            title: "tab1",
            innerComponent: <MatchesTab />,
            key: "tab1",
          },
          {
            title: "tafwfwfweb2",
            innerComponent: <div>hello inner tab2</div>,
            key: "tab2",
          },
          {
            title: "tab3",
            innerComponent: <div>hello inner tab3</div>,
            key: "tab3",
          },
          {
            title: "tab4",
            innerComponent: <div>hello inner tab4</div>,
            key: "tab4",
          },
        ]}
      />
    </>
  );
};

export default Wanted;
