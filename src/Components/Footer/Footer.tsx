import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { GiAmericanFootballPlayer, GiTrophyCup } from "react-icons/gi";
import { IoIosFootball, IoIosCompass } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import FooterItem from "./FooterItem";
import { TabPartsToShow } from "../../Helpers/Constants";

const FooterBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  padding: "10px 10px 20px 10px",
  backgroundColor: "transparent",
});
const Footer = () => {
  const footerItems = [
    {
      name: TabPartsToShow.COMPETITIONS,
      icon: <GiAmericanFootballPlayer />,
      id: 1,
    },
    { name: TabPartsToShow.EXPLORATION, icon: <IoIosCompass />, id: 2 },
    { name: TabPartsToShow.SOCCER, icon: <IoIosFootball />, id: 3 },
    { name: TabPartsToShow.LEAUGES, icon: <GiTrophyCup />, id: 4 },
    { name: TabPartsToShow.PROFILE, icon: <CgProfile />, id: 5 },
  ];
  return (
    <FooterBox>
      {footerItems.map((elem) => {
        return <FooterItem elem={elem} key={elem.id} />;
      })}
    </FooterBox>
  );
};
export default Footer;
