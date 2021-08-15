import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductById } from '../../redux/actions/productsActions';
import { useParams } from 'react-router-dom';
import { Img } from 'react-image';
import Spinner from '../../UI/Spinner/Spinner';

const Product = ({ getProductById, product, isLoading }) => {
  const { id } = useParams();
  const loader = <Spinner />;

  useEffect(() => {
    getProductById(id);
  }, [id, getProductById]);

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
              <Img
                src={product.filename}
                alt='Product image'
                loader={loader}
                className='ProductsListItem__image-img'
              />
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
          </div>
        </section>
      )}
    </>
  );
};

Product.propTypes = {
  isLoading: PropTypes.bool,
  getProductById: PropTypes.func,
  product: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    product: state.products.currentProduct
  };
};

export default connect(mapStateToProps, { getProductById })(Product);
