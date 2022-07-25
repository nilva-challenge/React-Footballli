import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledTextBox } from "./styles";

export function SearchInput() {
  return (
    <StyledTextBox
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      size="small"
      placeholder="جستجو..."
    />
  );
}
