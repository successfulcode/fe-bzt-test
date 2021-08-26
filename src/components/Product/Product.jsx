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
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

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
        <section className='product mt-5 is-flex is-justify-content-center'>
          <div>
            <div className='product__image is-flex is-justify-content-center'>
              <TransformWrapper>
                <TransformComponent>
                  <img src={product.filename} alt='Product' />
                </TransformComponent>
              </TransformWrapper>
            </div>
            <div className='mt-5 mb-5 is-flex is-justify-content-center'>
              <div>
                <div className='product__id'>Product id: {product.id}</div>
                <div>
                  <span className='product__info'>Brand:</span>
                  <span className='ml-1'>{product.brand_name}</span>
                </div>
                <div>
                  <span className='product__info mr-1'>Product name:</span>
                  {product.product_name}
                </div>
                {product.actual_price < product.base_price ? (
                  <div>
                    <div>
                      <span className='product__info mr-1'>Regular price:</span>
                      <span className='product__price-old'>
                        {parseFloat(product.base_price).toFixed(2)} Eur
                      </span>
                    </div>
                    <div>
                      <strong>
                        <span className='product__info mr-1 product__price-discount'>
                          NOW:
                        </span>
                        <span className='product__price-discount'>
                          {parseFloat(product.actual_price).toFixed(2)} Eur
                        </span>
                      </strong>
                    </div>
                    <div className='product__info  product__price-discount'>
                      You save{' '}
                      {(product.base_price - product.actual_price).toFixed(2)}{' '}
                      Eur
                    </div>
                    <div></div>
                  </div>
                ) : (
                  <div>
                    <strong>
                      <span className='product__info mr-1'>Price:</span>
                      {roundToTwo(product.actual_price).toFixed(2)} Eur
                    </strong>
                  </div>
                )}
              </div>
            </div>
            <span
              onClick={() => history.goBack()}
              className='product__backlink mt-5'
            >
              Back to previous page
            </span>
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
