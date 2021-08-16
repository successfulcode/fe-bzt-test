import product_list from '../data/product_list.json';

const status = 200;

export const productsApi = {
  getProducts() {
    console.log('getProducts');
    return {
      status,
      data: product_list.splice(0, 10)
    };
  },
  getProductsById(id) {
    return {
      status,
      data: product_list.find((product) => product.id === id)
    };
  },
  getProductsAscending() {
    return {
      status,
      data: product_list
        .sort((a, b) => b.actual_price - a.actual_price)
        .splice(0, 5)
    };
  },
  getProductsDescending() {
    return {
      status,
      data: product_list
        .sort((a, b) => a.actual_price - b.actual_price)
        .splice(0, 5)
    };
  }
};
