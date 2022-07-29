import { createTheme as createMuiTheme } from "@mui/material/styles";
import { createThemeComponents } from "./components";
import mixins from "./mixins";
import shape from "./shape";
import transitions from "./transitions";
import typography from "./typography";

export const createTheme = (direction: "rtl") => {
  // Create base theme
  const baseTheme = createMuiTheme({
    direction,
    mixins,
    shape,
    transitions,
    typography,
  });

  // Inject base theme to be used in components
  return createMuiTheme(
    {
      components: createThemeComponents(baseTheme),
    },
    baseTheme
  );
};
