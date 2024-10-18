import React from "react";
import { FaListUl } from "react-icons/fa";

import categories from "../constants/list";

const SideBar = ({ categoryHandler, query }) => {
  return (
    <div className="w-[20rem] h-fit m-[1rem] p-[2rem] ml-[3rem] bg-white border-[.2rem] border-dashed border-[#e2e2e2] rounded-[2rem]">
      <div className="w-[20rem] flex items-center mb-[1rem] text-[#fe5d42] font-medium">
        <FaListUl />
        <p className="ml-[1rem]">Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((category) => (
          <li
            className={`list-none p-[.5rem] cursor-pointer hover:text-[#fe5d42] ${
              category.type.toLowerCase() === query.category
                ? "bg-[#f7753d49] text-[#fe5d42] rounded-[1rem] px-3"
                : null
            }`}
            key={category.id}
          >
            {category.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
