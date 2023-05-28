import { FC, memo } from "react";

interface ImageLoaderInterface {
  src: string;
  figureClassName?: string;
  imgClassName?: string;
}

const ImageLoader: FC<ImageLoaderInterface> = ({
  src,
  figureClassName,
  imgClassName,
}) => {
  return (
    <figure className={`${figureClassName ?? ""}`}>
      <img className={`${imgClassName ?? ""}`} src={src} alt={src} />
    </figure>
  );
};

export default memo(ImageLoader);
