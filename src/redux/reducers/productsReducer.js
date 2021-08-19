import {
  SET_PRODUCTS,
  IS_LOADING_TRUE,
  IS_LOADING_FALSE,
  SET_NOTIFICATION,
  RESET_NOTIFICATION,
  SET_PRODUCT_BY_ID,
  SET_SORT_PRODUCTS,
  SET_PRODUCTS_ASCENDING
} from '../actions/actionsTypes';

const initialState = {
  productsList: [],
  total: 1,
  isLoading: false,
  isNotification: false,
  notification: {
    message: '',
    type: 'is-success'
  },
  currentProduct: {}
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        // productsList: [...state.productsList, ...action.data],
        productsList: [...action.data],
        total: action.total
      };
    case SET_SORT_PRODUCTS:
      return {
        ...state
        // productsList: action.data
      };
    case IS_LOADING_TRUE:
      return {
        ...state,
        isLoading: true
      };
    case IS_LOADING_FALSE:
      return {
        ...state,
        isLoading: false
      };
    case SET_NOTIFICATION:
      return {
        ...state,
        isNotification: true,
        notification: {
          message: action.notification,
          type: action.notificationType
        }
      };
    case RESET_NOTIFICATION:
      return {
        ...state,
        isNotification: false,
        notification: {
          message: '',
          type: 'is-success'
        }
      };

    case SET_PRODUCT_BY_ID:
      return {
        ...state,
        currentProduct: action.data
      };

    case SET_PRODUCTS_ASCENDING:
      const sortedProducts = state.productsList.sort(
        (a, b) => b.actual_price - a.actual_price
      );
      return {
        ...state,
        productsList: [...sortedProducts]
      };
    default:
      return state;
  }
};

export default productsReducer;
