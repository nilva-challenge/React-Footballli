import { FC, memo } from "react";
import ImageLoader from "./ImageLoader";

interface NotFoundInterface {
  text?: string;
  statusCode?: string | number;
  icon?: string;
}

const NotFound: FC<NotFoundInterface> = ({
  text = "متاسفانه صفحه مورد نظر پیدا نشد",
  statusCode = "404",
  icon = "/public/svg/notfound.svg",
}) => {
  return (
    <div className="not-found">
      <span>{text}</span>
      <ImageLoader imgClassName="notfound-icon" src={icon} />
      <span>{statusCode}</span>
    </div>
  );
};

export default memo(NotFound);
