import React, { useState, createContext, useContext } from "react";

import { leagueTypeResponse } from "types";

interface LiveScoresContextType {
  liveScores: leagueTypeResponse;
  onLiveScoresChange: (data: leagueTypeResponse) => void;
}

interface ContextProps {
  children: React.ReactNode;
}

const LiveScoresContext = createContext<LiveScoresContextType>({
  liveScores: [],
  onLiveScoresChange: () => {},
});

export const useStateLiveScores = () => useContext(LiveScoresContext);

const LiveScoresContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [liveScores, setLiveScores] = useState<leagueTypeResponse>([]);

  const onLiveScoresChange = (data: leagueTypeResponse) => {
    setLiveScores(data)
  };

  return (
    <LiveScoresContext.Provider
      value={{ liveScores, onLiveScoresChange }}
    >
      {children}
    </LiveScoresContext.Provider>
  );
};

export default LiveScoresContextProvider;
