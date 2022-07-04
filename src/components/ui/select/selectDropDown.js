import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import style from "./selectDropDown.module.css";

const SelectDropDown = (props) => {
  return (
    <>
      {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-label">Ligue</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Ligue"
        onChange={props.onChange}
      >
        {props.match.map((item, index) => (
          <MenuItem key={index} value={item.leagueid}>
            <img className={style["logo-dropdown"]} src={item.leaguelogo} />
            {item.leagueName}
          </MenuItem>
        ))}
      </Select>
    </FormControl> */}
      <Autocomplete
        sx={{ width: 300 }}
        options={props.match}
        autoHighlight
        getOptionLabel={(option) => option.leagueName}
        onChange={(event, value) => props.onChange(value.leagueid)}
        renderOption={(props, option) => (
          <Box
            key={option.id}
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
            id={option.leagueid}
          >
            <img
              loading="lazy"
              width="20"
              src={`${option.leaguelogo.toLowerCase()}`}
              srcSet={`${option.leaguelogo.toLowerCase()} 2x`}
              alt=""
            />
            {option.leagueName}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a league"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </>
  );
};

export default SelectDropDown;
