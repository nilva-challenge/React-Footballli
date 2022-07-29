import { Theme } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
import RadioButtonUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import RemoveCircle from "@mui/icons-material/RemoveCircle";

export const createThemeComponents = (theme: Theme) => ({
  MuiCardActions: {
    styleOverrides: {
      root: {},
    },
  },
  MuiBottomNavigationAction: {
    styleOverrides: {
      root: {
        fontFamily: "BYekan",
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        paddingRight: "0px",
        paddingLeft: "0px",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        background: "aliceblue",
        borderRadius: "10px",
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingRight: "0px",
        paddingLeft: "0px",
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {},
    },
  },
  MuiCardHeaderAvatar: {
    styleOverrides: {
      root: {
        margin: "0px 16px",
      },
    },
  },
});
