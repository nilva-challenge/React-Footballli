import { StyledEngineProvider } from "@mui/material/styles";
import routes from "./config/routesConfig";
import { useMemo } from "react";
import AppContext from "./AppContext";

type ComponentProps = {
  name?: string;
};

function withAppProviders(Component: React.ComponentType<ComponentProps>) {
  function WithAppProviders(props: React.PropsWithChildren<ComponentProps>) {
    const val = useMemo(
      () => ({
        routes,
      }),
      [routes]
    );

    return (
      <AppContext.Provider value={val}>
        <StyledEngineProvider injectFirst>
          <Component {...props} />
        </StyledEngineProvider>
      </AppContext.Provider>
    );
  }

  return WithAppProviders;
}

export default withAppProviders;
