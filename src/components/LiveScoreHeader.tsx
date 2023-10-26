import { Flex } from "@mantine/core";
import { SearchBox } from ".";
import DaysTab from "./DaysTab";

const LiveScoreHeader = () => {
  return (
    <Flex direction={"column"}>
      <div>Header</div>
      <SearchBox />
      <DaysTab />
    </Flex>
  );
};
export default LiveScoreHeader;
