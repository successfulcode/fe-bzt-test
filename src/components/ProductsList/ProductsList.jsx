import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getProducts,
  resetNotification,
  getProductsAscending,
  getProductsDescending
} from '../../redux/actions/productsActions';
import Spinner from '../../UI/Spinner/Spinner';
import Notification from '../../UI/Notification/Notification';
import ProductsListItem from '../ProductsListItem/ProductsListItem';
import Sort from '../Sort/Sort';
import InfiniteScroll from 'react-infinite-scroll-component';

const ProductsList = ({
  products,
  getProducts,
  isLoading,
  isNotification,
  notification,
  notificationType,
  resetNotification,
  getProductsAscending,
  getProductsDescending
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getProducts(page);
    setPage(page + 1);
  }, [getProducts, page]);

  const getProductsItems = () => {
    getProducts(page);
    setPage(page + 1);
  };

  console.log('ProductsList', products);

  return (
    <>
      {isNotification && (
        <Notification type={notificationType} reset={resetNotification}>
          {notification}
        </Notification>
      )}
      <Sort
        getProductsAscending={getProductsAscending}
        getProductsDescending={getProductsDescending}
      />
      {isLoading ? (
        <div className='is-flex is-justify-content-center is-align-content-center'>
          <Spinner />
        </div>
      ) : products ? (
        <InfiniteScroll
          dataLength={products.length}
          next={getProductsItems}
          hasMore={true}
        >
          <div className='mt-5 is-flex is-justify-content-center is-flex-wrap-wrap'>
            {products.map((product) => (
              <ProductsListItem key={product.id} product={product} />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <div className='is-flex is-justify-content-center'>
          <p>Product list is empty...</p>
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
  resetNotification: PropTypes.func,
  getProductsAscending: PropTypes.func,
  getProductsDescending: PropTypes.func
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

export default connect(mapStateToProps, {
  getProducts,
  resetNotification,
  getProductsAscending,
  getProductsDescending
})(ProductsList);
