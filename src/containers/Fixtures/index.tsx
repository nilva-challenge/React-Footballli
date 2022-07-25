import { TextField } from "@mui/material";
import { FixturesPageContainer } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { Topbar } from "../../components/Topbar";

export function Fixtures() {
  return (
    <FixturesPageContainer>
      <Topbar />
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </FixturesPageContainer>
  );
}
