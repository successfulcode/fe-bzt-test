import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getProducts,
  resetNotification
} from '../../redux/actions/productsActions';
import Spinner from '../../UI/Spinner/Spinner';
import Notification from '../../UI/Notification/Notification';
import ProductsListItem from '../ProductsListItem/ProductsListItem';
import Sort from '../Sort/Sort';

const ProductsList = ({
  products,
  getProducts,
  isLoading,
  isNotification,
  notification,
  notificationType,
  resetNotification
}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      {isNotification && (
        <Notification type={notificationType} reset={resetNotification}>
          {notification}
        </Notification>
      )}
      <Sort />
      {isLoading ? (
        <div className='is-flex is-justify-content-center is-align-content-center'>
          <Spinner />
        </div>
      ) : (
        <div className='mt-5 is-flex is-justify-content-center is-flex-wrap-wrap'>
          {products.map((product) => (
            <ProductsListItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

ProductsList.propTypes = {
  name: PropTypes.array,
  getProducts: PropTypes.func,
  isLoading: PropTypes.bool,
  isNotification: PropTypes.bool,
  notification: PropTypes.string,
  notificationType: PropTypes.string,
  resetNotification: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    products: state.products.productsList,
    isLoading: state.products.isLoading,
    isNotification: state.products.isNotification,
    notification: state.products.notification.message,
    notificationType: state.products.notification.type
  };
};

export default connect(mapStateToProps, { getProducts, resetNotification })(
  ProductsList
);
