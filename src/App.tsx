import { Layout } from "./components/common/Layout/Layout";
import { Content } from "./components/Content/Content";
import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Match from "./models/Match.model";

const queryClient = new QueryClient();

interface ContextType {
  date: string;
  setDate: (date: string) => void;
}

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

export const DateContext = createContext<ContextType>({
  date: "",
  setDate: () => {},
});

function App() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
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
          <DateContext.Provider value={{ date, setDate }}>
            <Layout>
              <Content />
            </Layout>
          </DateContext.Provider>
        </DataContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
