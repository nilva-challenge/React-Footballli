import { AppContainer } from "./styles";
import { Fixtures } from "./containers/Fixtures";
import { createTheme, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import BottomNavigation from "./components/BottomNavigation";
import { createDatesArray } from "./utils/dateUtils";

function App() {
  createDatesArray();
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Fixtures />
        <BottomNavigation />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
