import { FixturesPageContainer } from "./styles";
import { Topbar } from "../../components/Topbar";
import { SearchInput } from "../../components/SerachInput";
import DateSelector from "../../components/DateSelector";

export function Fixtures() {
  return (
    <FixturesPageContainer>
      <Topbar />
      <SearchInput />
      <DateSelector />
    </FixturesPageContainer>
  );
}
