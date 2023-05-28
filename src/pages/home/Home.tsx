import { useEffect } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/competitions");
  }, []);
  return <div> Home Page</div>;
};

export { Home };
