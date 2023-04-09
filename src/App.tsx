import { Layout } from "./components/common/Layout/Layout";
import { Content } from "./components/Content/Content";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DateContextProvider from "./components/context/DateContext";
import DataContextProvider from "./components/context/DataContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DataContextProvider>
          <DateContextProvider>
            <Layout>
              <Content />
            </Layout>
          </DateContextProvider>
        </DataContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
