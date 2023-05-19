import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

interface Props {
  loading: boolean;
}

const Loader: React.FC<Props> = ({ loading }) => {
  const open = loading;

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        style={{
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <CircularProgress color="inherit" />
        <div>لطفا منتظر بمانید</div>
      </Backdrop>
    </div>
  );
};

export default Loader;
