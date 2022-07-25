import { AppContainer } from "./styles";
import { Fixtures } from "./containers/Fixtures";
import { createTheme, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Fixtures />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
