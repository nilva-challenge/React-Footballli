import React, {
  createContext,
  useMemo,
  useState,
  useContext,
  ReactNode,
} from "react";

interface AppStore {}

const AppContext = createContext<undefined | AppStore>(undefined);

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("something went wrong, from appStore!");

  return context;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [appLoading, setAppLoading] = useState<boolean>(false);
  const handleSetAppLoading = (value: boolean) => {
    setAppLoading(value);
  };

  const appStore: AppStore = useMemo(
    () => ({
      appLoading,
      handleSetAppLoading,
    }),
    [appLoading]
  );

  return <AppContext.Provider value={appStore}>{children}</AppContext.Provider>;
};

export default AppProvider;
