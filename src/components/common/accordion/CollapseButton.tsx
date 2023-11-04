import { useState } from "react";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import ChevronUpIcon from "@heroicons/react/24/outline/ChevronUpIcon";

type CollapseButtonProps = {
  isCollapsed?: boolean;
};

export default function CollapseButton({ isCollapsed }: CollapseButtonProps) {
  const [collapsed, setCollapsed] = useState<boolean>(Boolean(isCollapsed));

  return (
    <>
      {collapsed ? (
        <ChevronDownIcon
          className="cursor-pointer"
          width={15}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        />
      ) : (
        <ChevronUpIcon
          className="cursor-pointer"
          width={15}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        />
      )}
    </>
  );
}
