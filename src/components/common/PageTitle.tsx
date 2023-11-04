"use client";

import { usePathname } from "next/navigation";

import {
  PageConfig,
  pagesConfigs,
} from "@/app/components/footer/Footer.config";

export default function PageTitle() {
  const currentPathname: string = usePathname();

  const currentPageConfig: PageConfig = pagesConfigs.find(
    (pageConfig: PageConfig) => currentPathname === pageConfig.pathname
  )!;

  return (
    <div className="flex justify-between items-center px-3 py-2">
      <span className="text-2xl font-bold">{currentPageConfig.title}</span>
      <div className="w-10">
        <currentPageConfig.Icon />
      </div>
    </div>
  );
}
