const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search);
  });
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category || category === "all") return products;
  const filteredProducts = products.filter((product) => {
    return product.category === category;
  });
  return filteredProducts;
};

export { shortenText, searchProducts, filterProducts };
