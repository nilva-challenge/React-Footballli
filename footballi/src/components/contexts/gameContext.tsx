import React, { ReactNode, createContext, useState } from "react";

interface GamesContextType {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

export const GamesContext = createContext<GamesContextType | null>(null);

export const GamesProvider = ({ children }: { children: ReactNode }) => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  return <GamesContext.Provider value={{ date, setDate }}>{children}</GamesContext.Provider>;
};
