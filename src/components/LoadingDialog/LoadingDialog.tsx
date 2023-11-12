import { Box, Dialog, DialogContent, DialogProps, Stack } from "@mui/material";
import logoSvg from "../../assets/logo.svg";
import Spinner from "./Spinner.tsx";

/**
 * This component can hold a text shows whenever there isn't any data in some specific sections.
 * This includes a logo and a spinner to bring a sense of waiting to user.
 * @param props
 * @constructor
 */
const LoadingDialog = (props: DialogProps) => (
  <Dialog
    fullScreen
    {...props}
    sx={{
      opacity: 0.7,
    }}
  >
    <DialogContent
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Stack height={"100%"} alignItems={"center"} justifyContent={"center"}>
        <Box
          component={"img"}
          src={logoSvg}
          alt={"logo icon text"}
          width={"20%"}
        />
        <Spinner />
      </Stack>
    </DialogContent>
  </Dialog>
);

export default LoadingDialog;
