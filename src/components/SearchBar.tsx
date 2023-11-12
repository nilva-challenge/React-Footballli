import { BORDER_RADIUS } from "../lib/style.const.ts";
import { SearchRounded } from "@mui/icons-material";
import { TextField } from "@mui/material";

const SearchBar = () => (
  <TextField
    // autoFocus={!!(pathname === "/" && query)}
    // value={query}
    placeholder={"جستجو..."}
    // onChange={handleQueryChanged}
    sx={{
      backgroundColor: "#f5f6fb",
      borderRadius: (theme) => theme.spacing(BORDER_RADIUS),
      "& fieldset": {
        border: "none",
      },
    }}
    fullWidth
    size={"small"}
    InputProps={{
      // ref: textField,
      startAdornment: (
        <SearchRounded
          sx={{mr: 2, transform: "rotate(90deg)", color: "#bebfc5"}}
        />
      ),
    }}
  />
);

export default SearchBar