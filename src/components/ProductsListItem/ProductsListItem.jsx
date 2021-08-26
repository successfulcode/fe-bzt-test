import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Img } from 'react-image';
import Spinner from '../../UI/Spinner/Spinner';

const ProductsListItem = ({ product }) => {
  const discount = (product.actual_price / product.base_price) * 100 - 100;

  return (
    <div className='productsListItem box m-2'>
      <Link to={`/product/${product.id}`} className='productsListItem__link'>
        {product.actual_price < product.base_price && (
          <div className='is-flex is-justify-content-flex-end'>
            <span className='productsListItem__image-label'>
              {discount.toFixed(0)}%
            </span>
          </div>
        )}
        <div className='productsListItem__image'>
          <Img
            src={product.filename}
            className='productsListItem__image-img'
            alt='Product'
            loader={
              <div className='productsListItem__image-spinner'>
                <Spinner />
              </div>
            }
          />
        </div>
        <div className='is-flex is-flex-direction-column is-justify-content-center'>
          <div className='has-text-centered productsListItem__brand'>
            {product.brand_name}
          </div>
          <div className='has-text-centered productsListItem__productname'>
            <div className='productsListItem__productname'>
              {product.product_name}
            </div>
          </div>
          {product.actual_price < product.base_price ? (
            <div>
              <div className='productsListItem__price-old has-text-centered is-flex is-flex-direction-column'>
                {parseFloat(product.base_price).toFixed(2)} Eur
              </div>
              <div className='productsListItem__price-dicount has-text-centered is-flex is-flex-direction-column'>
                <strong>
                  {parseFloat(product.actual_price).toFixed(2)} Eur
                </strong>
              </div>
            </div>
          ) : (
            <div className='has-text-centered is-flex is-flex-direction-column'>
              <strong>{parseFloat(product.actual_price).toFixed(2)} Eur</strong>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

ProductsListItem.propTypes = {
  product: PropTypes.object
};

export default ProductsListItem;
