import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
