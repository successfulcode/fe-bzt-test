import product_list from '../data/product_list.json';

const status = 200;
let products = [...product_list];

export const productsApi = {
  async getProducts(pageNumber, pageSize, filterStatus = 'none') {
    if (filterStatus === 'ascending') {
      products.sort((a, b) => a.actual_price - b.actual_price);
    } else if (filterStatus === 'descending') {
      products.sort((a, b) => b.actual_price - a.actual_price);
    } else if (filterStatus === 'none') {
      products = [...product_list];
    }
    return {
      status,
      data: products.slice(pageNumber, pageSize),
      total: product_list.length
    };
  },
  async getProductsById(id) {
    return {
      status,
      data: products.find((product) => product.id === id)
    };
  }
};
