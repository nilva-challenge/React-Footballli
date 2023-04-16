import { useDeferredValue, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { AiOutlineSearch } from "react-icons/ai";
import { filterdData } from "../../Redux/actions/fetchActions";
import { useAppDispatch } from "../../Redux/hooks";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  // const [inputValue, setInputValue] = useState("");
  // const deferredvalue = useDeferredValue(inputValue);
  // console.log({ inputValue });

  return (
    <TextField
      id="outlined-basic"
      sx={{
        width: "90%",
        color: "gray",
        direction: "rtl",
        backgroundColor: "#e8e8e8",
        border: "none",
        outline: "none",
        borderRadius: "4px",
        "&:focus": {
          border: "none",
          outline: "none",
        },
      }}
      placeholder="جستجو..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ fontSize: "20px" }}>
            <AiOutlineSearch />
          </InputAdornment>
        ),
        style: {
          height: "45px",
        },
      }}
      onChange={(e) => dispatch(filterdData(e.target.value))}
    />
  );
};

export default SearchInput;
