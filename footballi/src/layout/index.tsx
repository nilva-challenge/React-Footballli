import Header from "./header";
import { ReactNode } from "react";
import style from "./layout.module.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className={style.container}>{children}</div>
    </>
  );
};

export default Layout;
