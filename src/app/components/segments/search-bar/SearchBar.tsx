export default function SearchBar() {
  return (
    <div className="px-3 py-2">
      <input
        dir="rtl"
        type="text"
        placeholder="جستجو..."
        className="w-full bg-slate-100 rounded-md px-3 py-2 focus:outline-none"
      />
    </div>
  );
}
