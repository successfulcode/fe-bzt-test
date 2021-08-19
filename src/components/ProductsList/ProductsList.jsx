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
import Pagination from '../Pagination/Pagination';

const ProductsList = ({
  products,
  total,
  getProducts,
  isLoading,
  isNotification,
  notification,
  notificationType,
  resetNotification,
  getProductsAscending,
  getProductsDescending
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  useEffect(() => {
    if (currentPage === 1) {
      getProducts(currentPage - 1, productsPerPage);
    } else {
      getProducts(indexOfFirstProduct, indexOfLastProduct);
    }
  }, [
    getProducts,
    productsPerPage,
    currentPage,
    indexOfFirstProduct,
    indexOfLastProduct
  ]);

  console.log('products', products);
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
      ) : products.length > 0 ? (
        <div className='mt-5 is-flex is-justify-content-center is-flex-wrap-wrap'>
          {products.map((product) => (
            <ProductsListItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className='is-flex is-justify-content-center'>
          <p>Product list is empty...</p>
        </div>
      )}
      <Pagination
        productsTotal={total}
        getProducts={getProducts}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        productsPerPage={productsPerPage}
      />
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
    total: state.products.total,
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
