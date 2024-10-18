import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <productContext.Provider value={products}>
      {children}
    </productContext.Provider>
  );
};

const useProducts = () => {
  const products = useContext(productContext);
  return products;
};

export default ProductProvider;
export { useProducts };
