import PropTypes from 'prop-types';

const Sort = ({ setFilterStatus, setCurrentPage }) => {
  const changeFilterHandler = (e) => {
    setFilterStatus(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className='box mt-4 mx-2'>
      <div
        className='is-flex is-justify-content-center is-flex-wrap-wrap'
        onChange={changeFilterHandler}
      >
        <div className='mr-2'>Sort by price:</div>
        <div>
          <label className='radio mr-5'>
            <input type='radio' name='foobar' value='ascending' /> Ascending
          </label>
        </div>
        <div>
          <label className='radio'>
            <input type='radio' name='foobar' value='descending' /> Descending
          </label>
        </div>
      </div>
    </div>
  );
};

Sort.propTypes = {
  setFilterStatus: PropTypes.func,
  setCurrentPage: PropTypes.func
};

export default Sort;
