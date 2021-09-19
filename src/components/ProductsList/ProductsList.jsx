import { useEffect, useState } from 'react';
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
import Pagination from '../Pagination/Pagination';

const ProductsList = ({
  products,
  total,
  getProducts,
  isLoading,
  isNotification,
  notification,
  notificationType,
  resetNotification
}) => {
  const [currentPage, setCurrentPage] = useState(
    parseInt(sessionStorage.getItem('pageNumber')) || 1
  );
  const productsPerPage = 32;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const [filterStatus, setFilterStatus] = useState(
    sessionStorage.getItem('filter') || 'none'
  );

  useEffect(() => {
    getProducts(indexOfFirstProduct, indexOfLastProduct, filterStatus);
    sessionStorage.setItem('pageNumber', currentPage);
    sessionStorage.setItem('filter', filterStatus);
  }, [
    getProducts,
    productsPerPage,
    currentPage,
    indexOfFirstProduct,
    indexOfLastProduct,
    filterStatus
  ]);

  return (
    <>
      {isNotification && (
        <Notification type={notificationType} reset={resetNotification}>
          {notification}
        </Notification>
      )}
      <Sort
        setFilterStatus={setFilterStatus}
        setCurrentPage={setCurrentPage}
        filterStatus={filterStatus}
      />
      {isLoading ? (
        <div className="is-flex is-justify-content-center is-align-content-center">
          <Spinner />
        </div>
      ) : (
        <div className="mt-5 is-flex is-justify-content-center is-flex-wrap-wrap">
          {products.map((product) => (
            <ProductsListItem key={product.id} product={product} />
          ))}
        </div>
      )}
      {products.length <= 0 && !isLoading && (
        <div className="is-flex is-justify-content-center">
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
  resetNotification: PropTypes.func
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
  resetNotification
})(ProductsList);
