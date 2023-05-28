import { FC, memo } from "react";
import { MenuItem } from "models/menu/menuItem";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { activeMenu, updateSelectMenuTab } from "../../store/menu_tab";

interface MenuInterface {
  items: MenuItem[];
}

const Menu: FC<MenuInterface> = ({ items }) => {
  const navigate = useNavigate();
  const selectedTab = useAppSelector(activeMenu);
  const dispatch = useAppDispatch();
  const handleRedirect = (path: string) => {
    dispatch(updateSelectMenuTab(path));
    navigate(path);
  };

  return (
    <div className="menu">
      {items.map((item) => (
        <div
          key={item.id}
          className="menu-items"
          onClick={() => handleRedirect(item.path)}
        >
          <figure className="figure-icon">
            <img src={`/public/svg/${item.icon}.svg`} alt={item.icon} />
          </figure>
          <span
            className={`menu-title ${
              item.path === selectedTab ? "active-menu-tab" : ""
            }`}
          >
            {item.tabTitle}
          </span>
        </div>
      ))}
    </div>
  );
};

export default memo(Menu);
