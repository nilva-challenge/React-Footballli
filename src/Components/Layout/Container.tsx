import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { ReactNode } from "react";
const ContainerBox = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

interface props {
  children: ReactNode;
}
const Container: React.FC<props> = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>;
};
export default Container;
