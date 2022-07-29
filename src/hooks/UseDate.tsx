import { useContext } from "react";
import { DateContext } from "../App";

export const useDate = () => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("useUserInfo must be used within a AuthorizationContext");
  }
  return context;
};
