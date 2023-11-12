import Header from "./Header.tsx";
import { PropsWithChildren } from "react";
import { Container, Toolbar } from "@mui/material";

/**
 * A container which is used as a wrapper to hold the whole of page the toolbar component is used
 * to make a spacing with itself height to separated header from the container.
 * @param props
 * @constructor
 */
const Layout = (props: PropsWithChildren) => (
  <>
    <Header />
    <Toolbar />
    <Container sx={{ mt: 2 }}>{props.children}</Container>
  </>
);

export default Layout;
