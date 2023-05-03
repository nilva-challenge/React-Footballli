import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import { Home, Explore, NotFound, Football, Leagues, Profile } from "./pages";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/explore" element={<Explore />} />
        <Route path="/football" element={<Football />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
