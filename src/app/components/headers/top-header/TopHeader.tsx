import { WifiIcon } from "@heroicons/react/20/solid";
import Battery0Icon from "@heroicons/react/20/solid/Battery0Icon";
import { ChartBarIcon } from "@heroicons/react/24/solid";

import Clock from "./Clock";
import PageTitle from "@/components/common/PageTitle";

export default function TopHeader() {
  return (
    <>
      <div className="flex pt-6 px-4 pb-2 justify-between">
        <div className="flex justify-between gap-1 text-slate-400">
          <ChartBarIcon className="w-3" />
          <WifiIcon className="w-4" />
          <Battery0Icon className="w-4" />
        </div>
        <Clock />
      </div>
      <PageTitle />
    </>
  );
}
