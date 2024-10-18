import React from "react";
import { useProducts } from "../context/ProductContext";

const ProductsPage = () => {
  const products = useProducts();
  console.log(products);
  return (
    <div className="flex justify-between">
      {!products.length ? <p>Loading...</p> : null}
      <div className="w-full flex flex-wrap justify-between">
        {products.map((product) => {
          return <p key={product.id}>{product.title}</p>;
        })}
      </div>
      <div>sidebar</div>
    </div>
  );
};

export default ProductsPage;
