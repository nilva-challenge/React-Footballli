import { useEffect } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useAppSelector } from "../../Redux/hooks";
import { useAppDispatch } from "./../../Redux/hooks";
import { getData } from "../../Redux/actions/fetchActions";
import { rootStore } from "../../Redux/store";
import { TabPartsToShow } from "../../Helpers/Constants";
import Leauge from "./SchaduleTabs/League/League";
import Loading from "../Utility/Loading";
import Profile from "./SchaduleTabs/Profile/Profile";
import Exploration from "./SchaduleTabs/Exploration/Exploration";
import Comppetition from "./SchaduleTabs/Coppetition/Comppetition";
const maxHeight = window.innerHeight - 300;
const SchaduleContainer = styled(Box)({
  overflow: "auto",
  maxHeight: maxHeight,
  width: "100%",
  padding: "8px 15px",
  backgroundColor: "#e8e8e8",
  flex: 1,
  "&::-webkit-scrollbar": {
    display: "none",
  },
});
const SchaduleBox = () => {
  const dispatch = useAppDispatch();
  const { selectedDate, selectedPartTabToShow, loading } = useAppSelector(
    (state: rootStore) => ({
      selectedDate: state.tabsReducer.selectedDate,
      selectedPartTabToShow: state.tabsReducer.selectedPartTabToShow,
      loading: state.fetchDataReducer.loading,
    })
  );

  useEffect(() => {
    dispatch(getData(selectedDate));
  }, [selectedDate]);

  return (
    <SchaduleContainer>
      {loading ? (
        <Loading />
      ) : selectedPartTabToShow === TabPartsToShow.LEAUGES ? (
        <Leauge />
      ) : selectedPartTabToShow === TabPartsToShow.COMPETITIONS ? (
        <Comppetition />
      ) : selectedPartTabToShow === TabPartsToShow.EXPLORATION ? (
        <Exploration />
      ) : selectedPartTabToShow === TabPartsToShow.SOCCER ? (
        <Comppetition />
      ) : selectedPartTabToShow === TabPartsToShow.PROFILE ? (
        <Profile />
      ) : (
        ""
      )}
    </SchaduleContainer>
  );
};
export default SchaduleBox;
