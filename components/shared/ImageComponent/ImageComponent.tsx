import React from 'react';
import Image, {ImageProps} from "next/image";

type Props = ImageProps
const ImageComponent = (props: Props) => {

  return (
    <Image
      {...props}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      // loader={({src, width, quality}) => src}
    />
  );
};

export default ImageComponent;