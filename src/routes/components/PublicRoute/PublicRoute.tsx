import { ComponentType } from "react";
import MenuLayout from "../../../layout/menu/MenuLayout";

interface publicTargetPage {
  Component: ComponentType;
  hasLayout: boolean;
}

const TargetPage = ({ Component, hasLayout = true }: publicTargetPage): any => {
  return hasLayout ? (
    <MenuLayout>
      <Component />
    </MenuLayout>
  ) : (
    <Component />
  );
};

const PublicRoute = (props: any) => {
  const { component, hasLayout } = props;

  return <TargetPage Component={component} hasLayout={hasLayout} />;
};

export { PublicRoute };
