import { AppBar, Stack, TextField, textFieldClasses, Toolbar, Typography } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import { BORDER_RADIUS } from "../lib/style.const.ts";
import { useAppDispatch } from "../app/hooks.ts";
import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";
import { queryChanged } from "../features/appSlice.ts";
import { ChangeEvent, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

/**
 * This component is used in a layout component
 * and hold a text and a text-field to be able user to search a symbol or company.
 * @constructor
 */
export default function Header() {
  const { query } = useSelector((state: RootState) => state.app);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const textField = useRef<HTMLInputElement>(null);

  function handleQueryChanged(event: ChangeEvent<HTMLInputElement>) {
    dispatch(queryChanged(event.target.value));

    if (pathname !== "/") {
      navigate("/");
    }
  }

  return (
    <AppBar sx={{ backgroundColor: "#232735" }}>
      <Toolbar sx={{ width: "100%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={5}
          width={"inherit"}
        >
          <Link underline={"none"} color={"inherit"} href={"/"}>

          </Link>
          <TextField
            autoFocus={!!(pathname === "/" && query)}
            value={query}
            onChange={handleQueryChanged}
            sx={{
              backgroundColor: "rgba(255,255,255,0.31)",
              color: "#ffffff",
              borderRadius: BORDER_RADIUS,
              [`&.${textFieldClasses.root}`]: {},
              "input::placeholder": {
                color: "#ffffff",
              },
              input: {
                color: "#ffffff",
              },
            }}
            fullWidth
            size={"small"}
            InputProps={{
              ref: textField,
              startAdornment: <SearchRounded sx={{ color: "#ffffff" }} />,
            }}
          />
          <AccessTimeIcon/>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
