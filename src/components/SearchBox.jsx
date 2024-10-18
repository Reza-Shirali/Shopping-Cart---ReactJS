import React from "react";
import { ImSearch } from "react-icons/im";

const SearchBox = ({ search, setSearch, searchHandler }) => {
  return (
    <div className="mt-0 mx-[1rem] mb-[5rem]">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        className="border-[.2rem] border-dashed border-[#fe5d42] p-[1rem] w-[25rem] text-[1.44rem] text-[#fe5d42] rounded-[1rem] mr-[1rem] outline-none"
      />
      <button
        onClick={searchHandler}
        className="p-[1rem] text-[2.6rem] relative top-[.7rem] bg-[#fe5d42] text-white border-none rounded-[1rem] cursor-pointer"
      >
        <ImSearch />
      </button>
    </div>
  );
};

export default SearchBox;
