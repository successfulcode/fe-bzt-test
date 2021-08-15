import PropTypes from 'prop-types';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner';

const ProductsListItem = ({ product }) => {
  const loader = <Spinner />;
  return (
    <div className='ProductsListItem box m-2'>
      <Link to={`/product/${product.id}`}>
        <div className='ProductsListItem__image'>
          <Img
            src={product.filename}
            alt='Product image'
            loader={loader}
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
