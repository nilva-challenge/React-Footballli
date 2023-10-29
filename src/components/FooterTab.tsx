import { Flex, NavLink, Text } from "@mantine/core";
import { useState } from "react";
import { TbSoccerField } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { PiSoccerBall, PiTrophyBold } from "react-icons/pi";

const footerItems = [
  { icon: BsPerson, label: "پروفایل" },
  { icon: PiTrophyBold, label: "لیگ ها" },
  { icon: PiSoccerBall, label: "فوتبال" },
  { icon: MdOutlineExplore, label: "اکتشاف" },
  { icon: TbSoccerField, label: "مسابقات" },
];
const FooterTab = () => {
  const [active, setActive] = useState(footerItems.length - 1);

  const items = footerItems.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={
        <Flex direction="column" align={"center"} gap={"10px"}>
          <item.icon color={index !== active ? "#BDBDBD" : ""} size="2rem" />
          <Text size={"12px"} c={index !== active ? "#BDBDBD" : ""}>
            {item.label}
          </Text>
        </Flex>
      }
      onClick={() => setActive(index)}
      color="#2E7D32"
      variant="subtle"
    />
  ));

  return (
    <Flex bg={"white"} direction={"row"} justify={"space-between"}>
      {items}
    </Flex>
  );
};
export default FooterTab;
