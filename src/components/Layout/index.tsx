import { FC, memo, ReactNode, useContext } from "react";
import { Container } from "@mui/material";
import { useRoutes } from "react-router-dom";
import AppContext from "../../AppContext";
import { Page } from "../Page";
import Navigation from "./Navigation";

interface ILayoutProps {
  children?: ReactNode;
}

const Layout: FC<ILayoutProps> = memo((props) => {
  const appContext = useContext(AppContext);

  const { routes } = appContext;

  return (
    <main className="flex h-screen overflow-hidden">
      <section className="w-full">
        <Container
          maxWidth="xl"
          component="section"
          className="max-w-[1014px] h-[calc(100vh-75px)] overflow-auto pb-4"
        >
          <Page>{useRoutes(routes!)}</Page>
          {props.children}
        </Container>
      </section>
      <Navigation />
    </main>
  );
});
export default Layout;
