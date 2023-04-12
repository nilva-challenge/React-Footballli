import { useRouter } from "next/router";
import React from "react";

function Search() {
  const router = useRouter();
  const search = router.query.search;
  return (
    <div className="bg-[#F5F6FB] h-[calc(100vh-260px)] font-sans">
      <p className="text-center pt-3 text-xl">واژه سرچ شده : {search}</p>
      <p className="text-center pt-20">صفحه جستجو همچنان در حال توسعه میباشد</p>
    </div>
  );
}

export default Search;
