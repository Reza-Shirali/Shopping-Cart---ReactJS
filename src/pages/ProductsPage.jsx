import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import PulseLoader from "react-spinners/PulseLoader";

import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

const ProductsPage = () => {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  const searchHandler = () => {
    console.log("search");
  };

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
  };
  return (
    <>
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
      <div className="flex justify-between">
        <div className="w-full flex flex-wrap justify-between">
          {!displayed.length ? (
            <PulseLoader
              color="#fe5d42"
              className="w-full my-0 mx-auto flex justify-center text-center h-[100rem] mt-[10rem]"
            />
          ) : null}
          {displayed.map((product) => {
            return <Card key={product.id} data={product} />;
          })}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelry</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
