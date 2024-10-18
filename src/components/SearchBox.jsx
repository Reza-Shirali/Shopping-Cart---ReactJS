import React from "react";
import { ImSearch } from "react-icons/im";

const SearchBox = ({ search, setSearch, searchHandler }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
};

export default SearchBox;
