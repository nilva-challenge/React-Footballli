import React, { useEffect, useState } from "react";
import "./App.css";
import BottomMenu from "./components/BottomMenu";
import RTL from "./app/RTL/RTL";
import MobileContainer from "./components/MobileContainer";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import MatchesList from "./pages/matchesList";
import { scores } from "./app/redux/football/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/redux/store";

function App() {
  const Dispatch = useDispatch<AppDispatch>();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<MobileContainer />}
        // loader={rootLoader}
        // action={rootAction}
        errorElement={<MobileContainer/>  }
      >
        <Route errorElement={<p>404</p>}>
          <Route
            path="matchesList"
            element={<MatchesList />}
            // loader={contactLoader}
            // action={contactAction}
          />
        </Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RTL>
        <RouterProvider router={router} />
      </RTL>
    </div>
  );
}

export default App;
