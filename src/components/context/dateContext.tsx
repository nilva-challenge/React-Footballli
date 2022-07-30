import { createContext, FC, useState } from "react";

interface ContextType {
  date: string;
  setDate: (date: string) => void;
}

export const DateContext = createContext<ContextType>({
  date: "",
  setDate: () => {},
});

interface IProps {
  children: React.ReactNode;
}

const DateContextProvider: FC<IProps> = ({ children }) => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  return (
    <>
      <DateContext.Provider value={{ date, setDate }}>
        {children}
      </DateContext.Provider>
    </>
  );
};

export default DateContextProvider;
