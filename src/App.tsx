import { AppContainer } from "./styles";
import { Fixtures } from "./containers/Fixtures";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import BottomNavigation from "./components/BottomNavigation";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./utils/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Fixtures />
          <BottomNavigation />
        </AppContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
