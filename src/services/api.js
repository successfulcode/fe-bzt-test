import product_list from '../data/product_list.json';

const status = 200;

export const productsApi = {
  async getProducts(page) {
    const products = [...product_list];
    const step = 2;
    return {
      status,
      data: products.splice((page - 1) * step, step)
    };
  },
  async getProductsById(id) {
    const products = [...product_list];
    const item = products.find((product) => product.id === id);
    console.log('getProductsById', products);
    console.log('getProductsById item', item);
    return {
      status,
      data: products.find((product) => product.id === id)
    };
  },
  async getProductsAscending() {
    return {
      status,
      data: product_list
        .sort((a, b) => b.actual_price - a.actual_price)
        .splice(0, 5)
    };
  },
  async getProductsDescending() {
    return {
      status,
      data: product_list
        .sort((a, b) => a.actual_price - b.actual_price)
        .splice(0, 5)
    };
  }
};
