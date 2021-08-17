import { productsApi } from '../../services/api';

import {
  SET_PRODUCTS,
  IS_LOADING_TRUE,
  IS_LOADING_FALSE,
  SET_NOTIFICATION,
  RESET_NOTIFICATION,
  SET_PRODUCT_BY_ID,
  SET_SORT_PRODUCTS,
  RESET_CURRENT_PRODUCT,
  RESET_PRODUCTS
} from '../actions/actionsTypes';

export const getProducts = (page) => {
  return async (dispatch) => {
    console.log('getProducts');
    try {
      dispatch(isLoading());
      const { status, data } = await productsApi.getProducts(page);
      if (status === 200 && data) {
        dispatch(setProducts(data));
        dispatch(isLoadingFalse());
        console.log('data', data);
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

export const getProductsAscending = () => {
  return async (dispatch) => {
    dispatch(isLoading());
    try {
      const { status, data } = await productsApi.getProductsAscending();
      if (status === 200) {
        dispatch(setSortProducts(data));
        dispatch(isLoadingFalse());
        setTimeout(() => {
          dispatch(resetNotification());
        }, 5000);
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

export const getProductsDescending = () => {
  return async (dispatch) => {
    dispatch(isLoading());
    try {
      const { status, data } = await productsApi.getProductsDescending();
      if (status === 200) {
        dispatch(setSortProducts(data));
        dispatch(isLoadingFalse());
        setTimeout(() => {
          dispatch(resetNotification());
        }, 5000);
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

const setProducts = (data) => ({ type: SET_PRODUCTS, data });
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
const setSortProducts = (data) => ({ type: SET_SORT_PRODUCTS, data });
export const resetCurrentProduct = () => ({ type: RESET_CURRENT_PRODUCT });
export const resetProducts = () => ({ type: RESET_PRODUCTS });
