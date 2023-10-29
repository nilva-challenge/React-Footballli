import { Flex } from "@mantine/core";
import { SearchBox } from ".";
import { FaRegClock } from "react-icons/fa";

const LiveScoreHeader = () => {
  return (
    <Flex direction={"column"} p={"20px"} gap={"15px"}>
      <Flex justify={"space-between"}>
        <span className="font-black text-[25px]">نتایج زنده</span>
        <FaRegClock size={"2rem"} />
      </Flex>
      <SearchBox />
    </Flex>
  );
};
export default LiveScoreHeader;
