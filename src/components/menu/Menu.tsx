import { FC, memo } from "react";
import { MenuItem } from "models/menu/menuItem";
import { useNavigate, useLocation } from "react-router-dom";
import { getFullDate } from "../../utils/helpers";
import ImageLoader from "../../commonComponents/ImageLoader";

interface MenuInterface {
  items: MenuItem[];
}

const Menu: FC<MenuInterface> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleRedirect = (path: string) => {
    navigate(path === "/competitions" ? `${path}/${getFullDate()}` : path);
  };

  return (
    <div className="menu">
      {items.map((item) => (
        <div
          key={item.id}
          className="menu-items"
          onClick={() => handleRedirect(item.path)}
        >
          <ImageLoader
            figureClassName="figure-icon"
            src={`/public/svg/${item.icon}.svg`}
          />
          <span
            className={`menu-title ${
              location.pathname.includes(item.path) ? "active-menu-tab" : ""
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
