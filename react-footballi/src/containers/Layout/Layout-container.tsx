import React from "react";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation-component.tsx";

interface PropsType {
  children: React.ReactNode;
}

function Layout(props: PropsType) {
  return (
    <div style={{ maxWidth: 468, margin: "auto" }}>
      {props.children}
      <BottomNavigation />
    </div>
  );
}

export default Layout;
