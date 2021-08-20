import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductsListItem = ({ product }) => {
  return (
    <div className='ProductsListItem box m-2'>
      <Link to={`/product/${product.id}`}>
        <div className='ProductsListItem__image'>
          <img
            src={product.filename}
            alt='Product'
            className='ProductsListItem__image-img'
          />
        </div>
        <div className='is-flex is-justify-content-center'>
          <div>
            <div>{product.brand_name}</div>
            <div>{product.product_name}</div>
            <div>
              <strong>{product.actual_price} Eur</strong>
            </div>
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
