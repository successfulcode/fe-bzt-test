import PropTypes from 'prop-types';

const Sort = ({ setFilterStatus, setCurrentPage, filterStatus }) => {
  const changeFilterHandler = (e) => {
    setFilterStatus(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className='box mt-4 mx-2'>
      <div className='is-flex is-justify-content-center is-flex-wrap-wrap'>
        <div className='mr-2'>Sort by price:</div>
        <div>
          <label className='radio mr-5 sort__label'>
            <input
              type='radio'
              name='none'
              value='none'
              onChange={changeFilterHandler}
              checked={filterStatus === 'none'}
            />{' '}
            None
          </label>
        </div>
        <div>
          <label className='radio mr-5 sort__label'>
            <input
              type='radio'
              name='ascending'
              value='ascending'
              onChange={changeFilterHandler}
              checked={filterStatus === 'ascending'}
            />{' '}
            Ascending
          </label>
        </div>
        <div>
          <label className='radio sort__label'>
            <input
              type='radio'
              name='descendin'
              value='descending'
              onChange={changeFilterHandler}
              checked={filterStatus === 'descending'}
            />{' '}
            Descending
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
