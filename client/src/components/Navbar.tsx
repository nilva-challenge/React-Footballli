import { dateMapper } from "../utils";
import "../styles/Navbar.css";

type props = {
  dates: string[];
  setDate: React.Dispatch<React.SetStateAction<string>>;
  date: string;
};

const Navbar = ({ date, dates, setDate }: props) => {
  return (
    <div className="navbar">
      {dates.map((d, i) => {
        return (
          <button
            key={i}
            className={d === date ? "navbar-button selected" : "navbar-button"}
            onClick={() => setDate(d)}
          >
            {dateMapper(d, i)}
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;
