import { Searchbox, Sidebar } from "../components";

export default function SidebarLayout() {
  return (
    <div className = 'flex flex-col bg-gray-300 m-10 p-10 rounded-md shadow-lg space-y-5'>
      <Searchbox />
      <Sidebar />
    </div>
  );
}
