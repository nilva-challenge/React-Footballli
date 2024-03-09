import { motion } from "framer-motion";
import { TbError404 } from "react-icons/tb";
import { Box, Button, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

type TError404PageProps = {
  title?: string;
  message?: string;
  iconColor?: any;
  icon?: ReactNode;
  submitText?: string;
  submitClick?: any;
  titleColor?: any;
  noSubmit?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
};

function Error404Page({
  title = "صفحه مورد نظر یافت نشد!",
  message = "صفحه ای که دنبال آن هستید یافت نشد.",
  iconColor = "error.main",
  icon: Icon = <TbError404 fontSize={240} className="mt-52 -mb-52" />,
  submitText = "بازگشت به صفحه اصلی",
  submitClick = <Navigate to="/" replace />,
  titleColor,
  noSubmit,
  startIcon,
  endIcon,
  className,
}: TError404PageProps) {
  return (
    <div
      className={`flex flex-col px-16 h-full w-full justify-center ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
      >
        <Box color={iconColor} className="flex justify-center mb-20">
          {Icon}
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      >
        <Typography
          variant="h4"
          className="text-xl font-semibold leading-tight tracking-tight text-center"
          color={titleColor}
        >
          {title}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      >
        <Typography
          variant="h6"
          color="text.secondary"
          className="mt-8 text-lg font-medium tracking-tight text-center md:text-xl"
        >
          {message}
        </Typography>
      </motion.div>

      {!noSubmit && (
        <Button
          className="mx-auto mt-48 font-normal"
          onClick={submitClick}
          startIcon={startIcon}
          endIcon={endIcon}
        >
          {submitText}
        </Button>
      )}
    </div>
  );
}

export default Error404Page;
