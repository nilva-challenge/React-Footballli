import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface footerItem {
  title: string;
  icon: string;
  iconFill: string;
  key: string;
  url: string;
}

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const footerItems: footerItem[] = [
    {
      title: "پروفایل",
      icon: "bi bi-emoji-expressionless",
      iconFill: "bi bi-emoji-expressionless-fill",
      key: "profile",
      url: "/profile",
    },
    {
      title: "لیگ ها",
      icon: "bi bi-emoji-astonished",
      iconFill: "bi bi-emoji-astonished-fill",
      key: "ligas",
      url: "/ligas",
    },
    {
      title: "فوتبال",
      icon: "bi bi-emoji-neutral",
      iconFill: "bi bi-emoji-neutral-fill",
      key: "football",
      url: "/footbal",
    },
    {
      title: "اکتشاف",
      icon: "bi bi-emoji-angry",
      iconFill: "bi bi-emoji-angry-fill",
      key: "explore",
      url: "/explore",
    },
    {
      title: "مسابقات",
      icon: "bi bi-emoji-grimace",
      iconFill: "bi bi-emoji-grimace-fill",
      key: "matches",
      url: "/wanted",
    },
  ];

  const handleTabClick = (page: footerItem) => {
    navigate(page.url);
    setActiveTab(page.key);
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        left: 0,
        bottom: 0,
        height: "80px",
        backgroundColor: "white",
      }}
      className="d-flex justify-content-between px-4"
    >
      {footerItems.map((el) => {
        return (
          <div
            style={{
              cursor: "pointer",
            }}
            className={
              "d-flex flex-column align-items-center py-2 justify-content-center " +
              (activeTab === el.key ? "tab-active" : "text-muted")
            }
            onClick={() => handleTabClick(el)}
            key={el.key}
          >
            <i
              style={{
                fontSize: "30px",
              }}
              className={activeTab === el.key ? el.iconFill : el.icon}
            ></i>
            <span style={{ fontSize: "12px" }} className="mt-0">
              {el.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
