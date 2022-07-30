import { Layout } from "./components/common/Layout/Layout";
import { Content } from "./components/Content/Content";
import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Match from "./models/Match.model";
import DateContextProvider from "./components/context/dateContext";

const queryClient = new QueryClient();

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

function App() {
  const [mainData, setMainData] = useState<Match[]>([]);
  const [filteredData, setFilteredData] = useState<Match[]>([]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <QueryClientProvider client={queryClient}>
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
          <DateContextProvider>
            <Layout>
              <Content />
            </Layout>
          </DateContextProvider>
        </DataContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
