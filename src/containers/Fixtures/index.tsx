import { FixturesPageContainer } from "./styles";
import { Topbar } from "../../components/Topbar";
import { SearchInput } from "../../components/SerachInput";

export function Fixtures() {
  return (
    <FixturesPageContainer>
      <Topbar />
      <SearchInput />
    </FixturesPageContainer>
  );
}
