import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import PulseLoader from "react-spinners/PulseLoader";

import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

const ProductsPage = () => {
  const products = useProducts();

  // Copy Products
  const [displayed, setDisplayed] = useState([]);
  // For Search
  const [search, setSearch] = useState("");
  // For Search and Category
  const [query, setQuery] = useState({});
  // For Query String
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    setDisplayed(finalProducts);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search: search }));
  };

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category: category }));
  };
  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
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
        <SideBar categoryHandler={categoryHandler} />
      </div>
    </>
  );
};

export default ProductsPage;
