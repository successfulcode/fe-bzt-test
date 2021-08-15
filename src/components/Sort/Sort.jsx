import { useState } from 'react';

const Sort = () => {
  const [filter, setFilter] = useState('');

  const filterHandler = (e) => {
    setFilter(e.target.value);
    console.log(filter);
  };

  return (
    <div className='box mt-4'>
      <div
        className='control is-flex is-justify-content-center is-flex-wrap-wrap'
        onChange={filterHandler}
      >
        <div className='mr-2'>Sort by price:</div>
        <label className='radio mr-5'>
          <input type='radio' name='foobar' value='ascending' /> Ascending
        </label>
        <label className='radio'>
          <input type='radio' name='foobar' value='descending' /> Descending
        </label>
      </div>
    </div>
  );
};

export default Sort;
