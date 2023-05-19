"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface BottomNavigationItemProps {
  info: {
    id: number;
    label: string;
    icon: any;
    link: string;
  };
}

const BottomNavigationItem = ({ info }: BottomNavigationItemProps) => {
  const { id, label, icon, link } = info;
  const pathname = usePathname();
  const activeClassName = pathname === link ? " text-lime-600" : "";
  return (
    <Link href={link} key={id} className='flex flex-col items-center gap-2 p-3'>
      <span className={`text-gray-400 ${activeClassName}`}>{icon}</span>
      <span className={`text-gray-700 text-light text-xs ${activeClassName}`}>
        {label}
      </span>
    </Link>
  );
};

export default BottomNavigationItem;
