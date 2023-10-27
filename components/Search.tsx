import Image from 'next/image';

type Props = {
  search: string;
  setSearch: (search: string) => void;
};

const Search = ({ search, setSearch }: Props) => {
  return (
    <div className="bg-gray-200 relative rounded-lg overflow-hidden mt-4">
      <input
        type="text"
        className="w-full h-full p-3 pr-12 bg-inherit outline-none"
        placeholder="جستجو..."
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <Image
        src="/assets/icons/search.svg"
        width={20}
        height={20}
        alt="Search"
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
      />
    </div>
  );
};

export default Search;
