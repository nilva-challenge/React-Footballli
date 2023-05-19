import React from "react";

import Home from "pages/Home";
import SelectedDateContextProvider from "contexts/SelectedDateContext";
import LiveScoresContextProvider from "contexts/LiveScoresContext";

function App() {
  return (
    <div>
      <SelectedDateContextProvider>
        <LiveScoresContextProvider>
          <Home />
        </LiveScoresContextProvider>
      </SelectedDateContextProvider>
    </div>
  );
}

export default App;
