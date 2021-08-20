import { productsApi } from '../../services/api';

import {
  SET_PRODUCTS,
  IS_LOADING_TRUE,
  IS_LOADING_FALSE,
  SET_NOTIFICATION,
  RESET_NOTIFICATION,
  SET_PRODUCT_BY_ID,
  RESET_CURRENT_PRODUCT
} from '../actions/actionsTypes';

export const getProducts = (pageNumber, pageSize, filterStatus) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading());
      const { status, data, total } = await productsApi.getProducts(
        pageNumber,
        pageSize,
        filterStatus
      );
      if (status === 200 && data) {
        dispatch(setProducts(data, total));
      }
    } catch (error) {
      console.log(error);
      dispatch(setNotification('Error! Something wrong...', 'is-danger'));
      setTimeout(() => {
        dispatch(resetNotification());
      }, 3000);
    } finally {
      dispatch(isLoadingFalse());
    }
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading());
      const { status, data } = await productsApi.getProductsById(id);
      if (status === 200 && data) {
        console.log('getProductById', data);
        await dispatch(setProductById(data));
        dispatch(isLoadingFalse());
      }
    } catch (error) {
      console.log(error);
      dispatch(setNotification('Error! Something wrong...', 'is-danger'));
      setTimeout(() => {
        dispatch(resetNotification());
      }, 3000);
    } finally {
      dispatch(isLoadingFalse());
    }
  };
};

const setProducts = (data, total) => ({ type: SET_PRODUCTS, data, total });
const isLoading = () => ({ type: IS_LOADING_TRUE });
const isLoadingFalse = () => ({ type: IS_LOADING_FALSE });
const setNotification = (
  notification = 'Sorry! Something wrong!',
  notificationType = 'is-warning'
) => ({
  type: SET_NOTIFICATION,
  notification,
  notificationType
});
export const resetNotification = () => ({ type: RESET_NOTIFICATION });
const setProductById = (data) => ({
  type: SET_PRODUCT_BY_ID,
  data
});
export const resetCurrentProduct = () => ({ type: RESET_CURRENT_PRODUCT });
