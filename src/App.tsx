import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import withAppProviders from "./withAppProvider";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import createCache, { Options } from "@emotion/cache";
import themesConfig from "./config/themeConfig";
import BrowserRouter from "./components/BrowserRouter";
import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";

const queryClient = new QueryClient();

const emotionCacheOptions = {
  rtl: {
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
    insertionPoint: document.getElementById("emotion-insertion-point"),
  },
  ltr: {
    key: "muiltr",
    stylisPlugins: [],
    insertionPoint: document.getElementById("emotion-insertion-point"),
  },
};

function App() {
  return (
    <CacheProvider value={createCache(emotionCacheOptions["rtl"] as Options)}>
      <ThemeProvider theme={createTheme(themesConfig.default)}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Layout />
          </QueryClientProvider>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default withAppProviders(App);
