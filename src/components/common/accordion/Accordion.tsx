import { useState, PropsWithChildren } from "react";
import clsx from "clsx";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import ChevronUpIcon from "@heroicons/react/24/outline/ChevronUpIcon";

import CollapseButton from "./CollapseButton";

type AccordionProps = {
  title: string | JSX.Element;
  isCollapsed?: boolean;
  className?: string;
};

export default function Accordion({
  title,
  isCollapsed,
  className,
  children,
}: PropsWithChildren<AccordionProps>) {
  const [collapsed, setCollapsed] = useState<boolean>(Boolean(isCollapsed));

  return (
    <div className={clsx("w-full bg-white rounded-lg", className)}>
      <div className="flex justify-between items-center py-3 pr-3 pl-5 border-b-2 border-b-slate-100">
        {title}
        <CollapseButton isCollapsed={isCollapsed}/>
      </div>
      {!collapsed && <div className="py-5">{children}</div>}
    </div>
  );
}
