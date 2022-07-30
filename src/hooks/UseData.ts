import { useContext } from "react";
import { DataContext } from "../components/context/DataContext";

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useUserInfo must be used within a AuthorizationContext");
  }
  return context;
};
