import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { TbPlugConnectedX } from "react-icons/tb";
import { Box, Button } from "@mui/material";
import { HiRefresh } from "react-icons/hi";

interface ErrorComponentProps {
  error?: Error | null;
  tryToSolve: () => void;
}

function ErrorComponent({ error, tryToSolve }: ErrorComponentProps) {
  return (
    <div className="flex flex-col justify-center w-full h-full px-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
      >
        <Box
          sx={(theme) => ({
            color: theme.palette.secondary.main,
          })}
          className="flex justify-center mb-12"
        >
          <TbPlugConnectedX fontSize={100} />
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      >
        <Typography
          variant="h4"
          className="text-xl font-extrabold leading-tight tracking-tight text-center"
        >
          خطا در برقراری ارتباط
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      >
        <Typography
          variant="h5"
          color="text.secondary"
          className="mt-5 text-lg font-medium tracking-tight text-center md:text-xl"
        >
          خطایی در ارتباط با سرور رخ داده است
        </Typography>
      </motion.div>

      <Button
        variant="contained"
        className="px-20 !mx-auto !mt-28 font-normal w-88"
        onClick={tryToSolve}
        endIcon={<HiRefresh />}
      >
        تلاش مجدد
      </Button>
    </div>
  );
}

export default ErrorComponent;
