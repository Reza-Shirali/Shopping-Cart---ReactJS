import React from "react";
import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import PulseLoader from "react-spinners/PulseLoader";

const ProductsPage = () => {
  const products = useProducts();
  return (
    <div className="flex justify-between">
      <div className="w-full flex flex-wrap justify-between">
      {!products.length ? <PulseLoader color="#fe5d42" className="w-full my-0 mx-auto flex justify-center text-center h-[100rem] mt-[10rem]" />  : null}
        {products.map((product) => {
          return <Card key={product.id} data={product} />;
        })}
      </div>
      <div>sidebar</div>
    </div>
  );
};

export default ProductsPage;
