import Layout from "./components/Layout.tsx";
import useHome from "./hooks/useHome.ts";
import createHomeTableColumns from "./lib/utilities/getHomeTableColumns.ts";

// All columns are used here is created by TableColumnFactory class.
const COLUMNS = createHomeTableColumns();

/**
 * This code is demonstrated a virtualized table and LoadingDialog in case of not loading data.
 * The business logic is moved to useHome file.
 */
export default function App() {
  useHome();

  return (
    <Layout>
      {/*<LoadingDialog open={!isSuccess} />*/}
      {/*<VirtualizedTable useWindowScroll columns={COLUMNS} rows={rows} />*/}
      {/*{!rows.length && isSuccess && <InformationNotAvailable />}*/}
    </Layout>
  );
}
