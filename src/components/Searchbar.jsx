import React from "react";

const Searchbar = () => {
  return (
    <div className="my-4">
      <form>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            class="block w-full p-3 pr-11 text-sm bg-gray-100 rounded focus:border-primary outline-primary"
            placeholder="جستجو..."
            required
          />
          <button
            type="submit"
            className="text-white absolute top-3 right-4"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
