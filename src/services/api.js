import axios from 'axios';

const url = '/data.json';

export const productsApi = {
  getAxios() {
    return axios.get(url);
  }
};
