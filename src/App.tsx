import { Layout } from "./components/common/Layout/Layout";
import { Content } from "./components/Content/Content";
import { createContext, useState } from "react";

export const DateContext = createContext<ContextType>({
  date: "",
  setDate: () => {},
});
interface ContextType {
  date: string;
  setDate: (date: string) => void;
}

function App() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  return (
    <>
      <DateContext.Provider value={{ date, setDate }}>
        <Layout>
          <Content />
        </Layout>
      </DateContext.Provider>
    </>
  );
}

export default App;
