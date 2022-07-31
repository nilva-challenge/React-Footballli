import React, { FC } from "react";
import Header from "../../Header/Header";
import Navbar from "../../Navbar/Navbar";
import SearchInput from "../../SearchInput/SearchInput";

interface IProps {
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
        <SearchInput />
      </header>
      {children}
      <Navbar />
    </>
  );
};

export { Layout };
