import React, { ReactNode } from "react";

interface CustomCardProps {
  children: ReactNode;
  title: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ children, title }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
      className="rounded text-muted shadow-sm"
    >
      <div className="p-3">{title}</div>
      <hr className="my-0" />
      <div className="p-3">{children}</div>
    </div>
  );
};

export default CustomCard;
