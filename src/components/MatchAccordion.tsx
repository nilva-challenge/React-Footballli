import { Accordion } from "@mantine/core";
import { ReactNode } from "react";
interface Iprops {
  children: ReactNode;
}
const MatchAccordion = ({ children }: Iprops) => {
  return (
    <Accordion
      styles={{
        content: {
          paddingTop: "10px",
          borderTop: "2px solid #EEEEEE",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
        },
      }}
    >
      {children}
    </Accordion>
  );
};
export default MatchAccordion;
