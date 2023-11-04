import SearchBar from "../../segments/search-bar/SearchBar";
import DatesNavbar from "../../segments/dates-navbar/DatesNavbar";

export default function HeaderBanner() {
  return (
    <div className="bg-white">
      <SearchBar />
      <DatesNavbar />
    </div>
  );
}
