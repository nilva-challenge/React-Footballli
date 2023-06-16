import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getFullDate } from "../../utils/helpers";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/competitions/${getFullDate()}`);
  }, []);
  return <div> Home Page</div>;
};

export default Home;
