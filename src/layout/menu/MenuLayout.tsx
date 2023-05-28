import { FC, ReactNode, useMemo } from "react";
import Menu from "../../components/menu/Menu";
import menuItem from "../../data/error-map.json";
import { MenuItem } from "models/menu/menuItem";

interface MenulayoutInterface {
  children: ReactNode;
}

const MenuLayout: FC<MenulayoutInterface> = ({ children }) => {
  const productList = useMemo<Array<MenuItem>>(() => menuItem, []);

  return (
    <>
      {children}

      <Menu items={productList} />
    </>
  );
};

export default MenuLayout;
