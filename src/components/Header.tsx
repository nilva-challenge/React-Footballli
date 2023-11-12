import {AppBar, Stack, TextField, Toolbar, Typography} from "@mui/material";
import {SearchRounded} from "@mui/icons-material";
import {BORDER_RADIUS} from "../lib/style.const.ts";
import {useAppDispatch} from "../app/hooks.ts";
import {useSelector} from "react-redux";
import {RootState} from "../app/store.ts";
import {queryChanged} from "../features/appSlice.ts";
import {ChangeEvent, useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
    <AppBar color={"inherit"} elevation={0}>
      <Toolbar sx={{ width: "100%" }}>
        <Stack width={"inherit"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={5}
            width={"inherit"}
          >
            <Typography variant={"h5"} fontWeight={"bold"}>
              نتایج زنده
            </Typography>
            <AccessTimeIcon
              sx={{ transform: "rotate(240deg)", fontSize: 40 }}
            />
          </Stack>
          <TextField
            autoFocus={!!(pathname === "/" && query)}
            value={query}
            placeholder={"جستجو..."}
            onChange={handleQueryChanged}
            sx={{
              borderWidth: 2,
              backgroundColor: "#f5f6fb",
              borderRadius: BORDER_RADIUS,
            }}
            fullWidth
            size={"small"}
            InputProps={{
              ref: textField,
              startAdornment: (
                <SearchRounded
                  sx={{ mr: 2, transform: "rotate(90deg)", color: "#bebfc5" }}
                />
              ),
            }}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
