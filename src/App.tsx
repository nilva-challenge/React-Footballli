import { Flex } from "@mantine/core";
import { DaysTab, FooterTab, LiveScoreHeader } from "./components";

const App = () => {
  return (
    <>
      <Flex direction={"column"} className="h-screen justify-between">
        <LiveScoreHeader />
        <div className="bg-[#EEEEEE] h-[100%] overflow-y-auto">
          <DaysTab />
        </div>
        <div className="shadow-md shadow-black w-[100%] self-end">
          <FooterTab />
        </div>
      </Flex>
    </>
  );
};
export default App;
