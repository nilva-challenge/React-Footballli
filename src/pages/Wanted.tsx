import React, { useState } from "react";
import CustomTabs from "../components/CustomTabs";
import MatchesTab from "../components/MatchesTab";
import CustomInput from "../components/CustonInput";

const Wanted: React.FC = () => {
  const [searchValue, setSearch] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearch(value);
  };
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
        <CustomInput onSearch={handleSearch} />
      </div>

      <CustomTabs
        tabs={[
          {
            title: "همه",
            innerComponent: <MatchesTab search={searchValue as string} />,
            key: "all",
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
