import product_list from '../data/product_list.json';

const status = 200;

const sorted_products = [...product_list].sort(
  (a, b) => a.actual_price - b.actual_price
);

function getSortedData(pageNumber, pageSize, filterStatus) {
  switch (filterStatus) {
    case 'ascending':
      return sorted_products.slice(pageNumber, pageSize);
    case 'descending':
      return sorted_products
        .slice(
          sorted_products.length - pageNumber * pageSize - pageSize,
          sorted_products.length - pageNumber * pageSize
        )
        .reverse();
    default:
      return product_list.slice(pageNumber, pageSize);
  }
}

export const productsApi = {
  async getProducts(pageNumber, pageSize, filterStatus = 'none') {
    return {
      status,
      data: getSortedData(pageNumber, pageSize, filterStatus),
      total: product_list.length
    };
  },
  async getProductsById(id) {
    return {
      status,
      data: product_list.find((product) => product.id === id)
    };
  }
};
