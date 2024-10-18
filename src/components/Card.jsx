import React from "react";
import { Link } from "react-router-dom";

import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";

const Card = ({ data }) => {
  const { id, title, image, price } = data;
  return (
    <div className="w-[27rem] m-[1rem] p-[2rem] flex flex-col items-start justify-end bg-white border-[.2rem] border-dashed border-[#e2e2e2] rounded-[2rem]">
      <img
        src={image}
        alt={title}
        className="w-[23rem] h-[23rem] p-[2rem] mb-[2rem] bg-white "
      />
      <h3 className="text-[#fe5d42] text-[1.76rem]">{shortenText(title)}</h3>
      <p className="text-[#666] text-[1.44rem] font-semibold mt-[1rem] mx-0 mb-[3rem]">
        {price}
      </p>
      <div className="w-full flex justify-between items-center">
        <Link
          to={`/products/${id}`}
          className="text-[2.4rem] h-[2.5rem] text-[#fe5d42] cursor-pointer"
        >
          <TbListDetails />
        </Link>
        <div className="flex items-center">
          <button className="bg-[#fe5d42] text-white border-none text-[2.72rem] h-[3.2rem] w-[3.2rem] leading-[3.2rem] p-[.2rem] rounded-[.8rem] cursor-pointer">
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
