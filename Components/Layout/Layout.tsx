import { FC } from "react";
import { LayoutProps } from "./index.d";
import Header from "../Header";
import Footer from "../Footer";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-sm ">
      <Header />
      <main className="min-h-400 ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
