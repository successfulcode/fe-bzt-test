import product_list from '../data/product_list.json';

const status = 200;

export const productsApi = {
  async getProducts(pageNumber, pageSize) {
    const products = [...product_list];
    return {
      status,
      data: products.splice((pageNumber - 1) * pageSize, pageSize)
    };
  },
  async getProductsById(id) {
    const products = [...product_list];
    const item = products.find((product) => product.id === id);
    return {
      status,
      data: products.find((product) => product.id === id)
    };
  },
  async getProductsAscending() {
    return {
      status
      // data: products.sort((a, b) => b.actual_price - a.actual_price)
    };
  },
  async getProductsDescending() {
    return {
      status
      // data: products.sort((a, b) => a.actual_price - b.actual_price)
    };
  }
};
