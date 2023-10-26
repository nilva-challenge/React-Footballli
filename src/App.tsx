import { Flex } from "@mantine/core";
import { FooterTab, LiveScoreBody, LiveScoreHeader } from "./components";

const App = () => {
  return (
    <>
      <Flex direction={"column"} className="z-0">
        <LiveScoreHeader />
        <LiveScoreBody />
      </Flex>
      <div className="shadow-md shadow-black pb-[10px] fixed bottom-0 left-0 right-0 w-[100%] z-1">
        <FooterTab />
      </div>
    </>
  );
};
export default App;
