import React, { ReactNode } from "react";
import ImageWrapper from "./ImageWrapper";

interface CustomCardProps {
  children: ReactNode;
  title: string;
  className: string;
  logo: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  children,
  title,
  className,
  logo,
}) => {
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
      className={"rounded text-muted shadow-sm " + className}
    >
      <div className="p-3">
        <ImageWrapper url={logo} /> {title}
      </div>
      <hr className="my-0" />
      <div className="p-3 pb-0">{children}</div>
    </div>
  );
};

export default CustomCard;
