import React, { useState, createContext, useContext } from "react";
import getToday from "utils/getToday";

interface SelectedDateContextType {
  selectedDate: string;
  onChangeSelectedDate: (date: string) => void;
}

interface ContextProps {
    children: React.ReactNode;
}

const SelectedDateContext = createContext<SelectedDateContextType>({
  selectedDate: getToday(),
  onChangeSelectedDate: () => {},
});

export const useStateSelectedDate = () => useContext(SelectedDateContext);

const SelectedDateContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(getToday());

  const onChangeSelectedDate = (newDate: string) => {
    setSelectedDate(newDate);
  }

  return (
    <SelectedDateContext.Provider value={{ selectedDate, onChangeSelectedDate}}>
        {children}
    </SelectedDateContext.Provider>
  );
};

export default SelectedDateContextProvider;