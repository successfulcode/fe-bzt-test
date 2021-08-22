import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Img } from 'react-image';
import Spinner from '../../UI/Spinner/Spinner';

const ProductsListItem = ({ product }) => {
  const roundToTwo = (price) => {
    return +(Math.round(price + 'e+2') + 'e-2');
  };

  return (
    <div className='productsListItem box m-2'>
      <Link to={`/product/${product.id}`} className='productsListItem__link'>
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
          <div className='has-text-centered'>{product.product_name}</div>
          <div className='has-text-centered is-flex is-flex-direction-column'>
            <strong>{roundToTwo(product.actual_price).toFixed(2)} Eur</strong>
          </div>
        </div>
      </Link>
    </div>
  );
};

ProductsListItem.propTypes = {
  product: PropTypes.object
};

export default ProductsListItem;
