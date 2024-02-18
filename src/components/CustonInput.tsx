import React from "react";
import debounce from "debounce";

interface CustomInputProps {
  debounceTime?: number;
  onSearch?: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  debounceTime = 500,
  onSearch,
}) => {
  const debounceSearch = debounce(function (query: string) {
    if (onSearch) onSearch(query);
  }, debounceTime);

  return (
    <div
      className="d-flex align-items-center px-3 rounded"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <i className="bi bi-search"></i>
      <input
        className="w-100 p-2 custom-input"
        placeholder="جستجو کنید ..."
        onChange={(value) => debounceSearch(value.target.value)}
      />
    </div>
  );
};

export default CustomInput;
