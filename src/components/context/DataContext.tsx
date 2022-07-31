import { createContext, FC, useState } from "react";
import Match from "../../models/Match.model";

interface DataContextType {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  mainData: Match[];
  setMainData: (data: Match[]) => void;
  filteredData: Match[];
  setFilteredData: (data: Match[]) => void;
}

export const DataContext = createContext<DataContextType>({
  searchValue: "",
  setSearchValue: () => {},
  mainData: [],
  setMainData: () => {},
  filteredData: [],
  setFilteredData: () => {},
});

interface IProps {
  children: React.ReactNode;
}

const DataContextProvider: FC<IProps> = ({ children }) => {
  const [mainData, setMainData] = useState<Match[]>([]);
  const [filteredData, setFilteredData] = useState<Match[]>([]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <DataContext.Provider
        value={{
          mainData,
          setMainData,
          filteredData,
          setFilteredData,
          searchValue,
          setSearchValue,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataContextProvider;
