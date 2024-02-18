import React from "react";

interface ImageWrapperProps {
  url: string;
  width?: number;
  height?: number;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  url,
  width = 30,
  height = 30,
}) => {
  return <img src={url} width={width} height={height} />;
};

export default ImageWrapper;
