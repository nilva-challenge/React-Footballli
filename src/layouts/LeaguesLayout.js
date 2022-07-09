import { League } from "../components";
import { useGlobalContext } from "../context/context";

export default function LeaguesLayout() {
  const { leagues } = useGlobalContext();
  return (
    <div className="flex flex-col m-10 shadow-lg rounded-md">
      <League league={leagues} />
    </div>
  );
}
