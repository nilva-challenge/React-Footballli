import { FormControl, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

export default function SearchBox() {
  return (
    <FormControl sx={{ width: "100%", padding: "5px 20px", direction: "rtl" }}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        size="small"
        placeholder="جستجو ..."
      />
    </FormControl>
  );
}
