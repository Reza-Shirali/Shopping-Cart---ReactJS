const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search);
  });
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter((product) => {
    return product.category === category;
  });
  return filteredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    console.log(rest);
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    console.log(rest);
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
};
