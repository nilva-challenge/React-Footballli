import { FC, memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
      <LazyLoadImage
        className={`${imgClassName ?? ""}`}
        alt={src}
        height="100%"
        src={src} // use normal <img> attributes as props
        width="100%"
        effect="blur"
      />
    </figure>
  );
};

export default memo(ImageLoader);
