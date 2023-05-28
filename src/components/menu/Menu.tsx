import { FC, memo } from "react";
import { MenuItem } from "models/menu/menuItem";
import { useNavigate, useLocation } from "react-router-dom";

interface MenuInterface {
  items: MenuItem[];
}

const Menu: FC<MenuInterface> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleRedirect = (path: string) => {
    navigate(path);
  };
console.log(location)
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
