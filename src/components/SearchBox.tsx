import { TextInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import { LiaSearchSolid } from "react-icons/lia";

const SearchBox = () => {
  const { ref, focused } = useFocusWithin();
  return (
    <TextInput
      ref={ref}
      radius={"5px"}
      styles={{
        input: {
          backgroundColor: "#F5F5F5",
          paddingRight: "45px",
          border: focused ? "1px solid #616161" : undefined,
        },

        section: { paddingRight: "10px" },
      }}
      placeholder="جستجو..."
      leftSection={<LiaSearchSolid color={"#BDBDBD"} size={"1.5rem"} />}
    />
  );
};
export default SearchBox;
