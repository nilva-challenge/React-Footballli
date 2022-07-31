import React from "react";
import Stack from "../Stack/Stack-component.tsx";
import Box from "../Box/Box-component.tsx";
import Divider from "../Divider/Divider-component.tsx";
import useRoute from "../../hooks/useRoute.web.ts";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon-component.tsx";

let styles = {
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: 11,
  },
  bar: {
    backgroundColor: "#fff",
    maxWidth: 468,
    margin: "auto",
    width: "100%",
    border: "1px solid #ccc",
    borderBottom: "",
    padding: "10px 20px",
  },
};

const ROUTES = [
  {
    key: "Profile",
    icon: "FiUser",
    title: "پروفایل",
  },
  {
    key: "Leagues",
    icon: "CgTrophy",
    title: "لیگ ها",
  },
  {
    key: "Football",
    icon: "FaFutbol",
    title: "فوتبال",
  },
  {
    key: "Discovery",
    icon: "FiCompass",
    title: "اکتشاف",
  },
  {
    key: "Competitions",
    icon: "BsTv",
    title: "مسابقات",
    active: true,
  },
];

function BottomNavigation() {
  let routeInfo = useRoute();
  let nav = useNavigate();
  return (
    <Box style={styles.container}>
      <Stack style={styles.bar} distribution="space-between">
        {ROUTES.map((route, idx) => {
          const isFocused = routeInfo.name == route.key;
          return (
            <button
              key={idx}
              onClick={() => {
                if (!isFocused) {
                  nav(route.key);
                }
              }}
              style={{
                cursor: "pointer",
                backgroundColor: "#fff",
                border: "none",
              }}
            >
              <Icon name={route.icon} color={isFocused ? "green" : "#999999"} />
              <Divider size={4} />
              <p
                style={{
                  color: isFocused ? "green" : "#999999",
                  margin: 0,
                }}
              >
                {route.title}
              </p>
            </button>
          );
        })}
      </Stack>
    </Box>
  );
}

export default BottomNavigation;
