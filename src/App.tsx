import React from "react";

import Home from "pages/Home";
import SelectedDateContextProvider from "contexts/SelectedDateContext";

function App() {
  return (
    <div>
      <SelectedDateContextProvider>
        <Home />
      </SelectedDateContextProvider>
    </div>
  );
}

export default App;
