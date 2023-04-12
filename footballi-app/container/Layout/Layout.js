import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
