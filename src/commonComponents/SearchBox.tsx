import { FC, memo, useId } from "react";
import ImageLoader from "./ImageLoader";

interface SearchBoxProps {
  onChange: (item: string) => void;
  type?: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
  value?: any;
  parentClassName?: string;
  inputClassName?: string;
  defaultValue?: string;
  icon?: string;
}

const SearchBox: FC<SearchBoxProps> = ({
  onChange,
  type = "text",
  disabled,
  value,
  parentClassName,
  inputClassName,
  defaultValue,
  placeholder = "جستجو...",
  icon = "/public/svg/search.svg",
}) => {
  const id = useId();
  return (
    <>
      <div className={`search-box ${parentClassName ?? ""}`}>
        <input
          className={`${inputClassName ?? ""}`}
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
        />
        <label htmlFor={id}>
          <ImageLoader figureClassName="icon" src={icon} />
        </label>
      </div>
    </>
  );
};

export default memo(SearchBox);
