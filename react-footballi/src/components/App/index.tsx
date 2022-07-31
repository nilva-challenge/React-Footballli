import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "../../containers/Layout/Layout-container.tsx";
import Competitions from "../../pages/Competitions-page.tsx";
import Discovery from "../../pages/Discovery-page.tsx";
import Football from "../../pages/Football-page.tsx";
import Leagues from "../../pages/Leagues-page.tsx";
import Profile from "../../pages/Profile-page.tsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/Competitions" />} />
          <Route path="/Competitions" element={<Competitions />} />
          <Route path="/Leagues" element={<Leagues />} />
          <Route path="/Football" element={<Football />} />
          <Route path="/Discovery" element={<Discovery />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
