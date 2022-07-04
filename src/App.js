import "./App.css";
import { Route, Redirect } from "react-router-dom";
import React from "react";
import Navbar from "./components/content/navbar";
import Footer from "./components/footer/footer";
import Header from "./components/headers/header";
import Content from "./components/content/content";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Navbar />
        <Route path="/" exact>
          <Redirect to="/Contents/:2020-02-08"></Redirect>
        </Route>
        <Route path="/Contents/:ContentId">
          <Content />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
