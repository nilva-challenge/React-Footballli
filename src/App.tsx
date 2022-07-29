import React, { useMemo } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import * as Sentry from "@sentry/react";
import Loader from "./core/components/Loader";
import AppRoutes from "./AppRoutes";
import FixedBottomNavigation from "./core/components/BottomNavigation";
import logo from "./logo.svg";
import { createTheme } from "./core/theme";

function App() {
  if (process.env.NODE_ENV === "production") {
    Sentry.init({
      dsn: process.env.REACT_APP_SENTRY_DSN,
    });
  }
  const theme = useMemo(() => createTheme("rtl"), []);
  return (
    <React.Suspense fallback={<Loader />}>
      <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
        <FixedBottomNavigation>
          <MuiThemeProvider theme={theme}>
            <AppRoutes />
          </MuiThemeProvider>
        </FixedBottomNavigation>
      </Sentry.ErrorBoundary>
    </React.Suspense>
  );
}

export default App;
