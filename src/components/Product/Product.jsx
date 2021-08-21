import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getProductById,
  resetCurrentProduct
} from '../../redux/actions/productsActions';
import { useParams } from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner';
import { useHistory } from 'react-router-dom';

const Product = ({
  getProductById,
  product,
  isLoading,
  resetCurrentProduct
}) => {
  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
    return resetCurrentProduct();
  }, [getProductById, resetCurrentProduct, id]);

  const history = useHistory();

  return (
    <>
      {isLoading ? (
        <div className='is-flex is-justify-content-center is-align-content-center'>
          <Spinner />
        </div>
      ) : (
        <section className='mt-5 is-flex is-justify-content-center'>
          <div>
            <div>
              <img src={product.filename} alt='Product' />
            </div>
            <div className='mt-5 is-flex is-justify-content-center'>
              <div>
                <div>Product id: {product.id}</div>
                <div>Brand: {product.brand_name}</div>
                <div>Product name: {product.product_name}</div>
                <div>
                  <strong>Price: {product.actual_price} Eur</strong>
                </div>
              </div>
            </div>
            <button onClick={() => history.goBack()}>Back</button>
          </div>
        </section>
      )}
    </>
  );
};

Product.propTypes = {
  isLoading: PropTypes.bool,
  getProductById: PropTypes.func,
  product: PropTypes.object,
  resetCurrentProduct: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    product: state.products.currentProduct
  };
};

export default connect(mapStateToProps, {
  getProductById,
  resetCurrentProduct
})(Product);
