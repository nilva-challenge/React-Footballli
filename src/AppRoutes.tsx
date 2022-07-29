import React, { lazy } from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";

const Matches = lazy(() => import("./container/pages/Matches/Matches"));
const NotFound = lazy(() => import("./core/pages/NotFound"));
const UnderConstructions = lazy(
  () => import("./core/pages/UnderConstructions")
);

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/matches" element={<Matches />} />
        <Route path="404" element={<NotFound />} />
        <Route path="/" element={<Navigate to={`/matches`} />} />
        <Route path="/leagues" element={<UnderConstructions />} />
        <Route path="/players" element={<UnderConstructions />} />
        <Route path="*" element={<Navigate to={`404`} replace />} />
      </Routes>
    </React.Fragment>
  );
};

export default AppRoutes;
