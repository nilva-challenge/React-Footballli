import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useState } from "react";
import clsx from "clsx";
import Box from "@mui/material/Box";
import useTimeout from "../../hooks/useTimeout";

type TProps = {
  delay: number;
  title: string;
};
function Loading({ delay, title }: TProps) {
  const [showLoading, setShowLoading] = useState(!delay);

  useTimeout(() => {
    setShowLoading(true);
  }, delay);

  return (
    <div
      className={clsx(
        "flex flex-1 flex-col items-center justify-center p-24",
        !showLoading && "hidden"
      )}
    >
      <Typography
        className="text-13 sm:text-20 font-medium -mb-16"
        color="text.secondary"
      >
        {title}
      </Typography>
      <Box
        id="spinner"
        sx={{
          "& > div": {
            backgroundColor: "palette.secondary.main",
          },
        }}
      >
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </Box>
    </div>
  );
}

Loading.propTypes = {
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  title: PropTypes.string,
};

Loading.defaultProps = {
  delay: false,
  title: "در حال بارگزاری...",
};

export default Loading;
