import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const HeaderSearch = () => {
  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        onChange={changeHandler}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", marginLeft: "auto" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default HeaderSearch;
