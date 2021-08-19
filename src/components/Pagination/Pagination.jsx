import PropTypes from 'prop-types';

const Pagination = ({
  productsTotal,
  productsPerPage,
  currentPage,
  setCurrentPage
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(productsTotal / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const setCurrentPageHandler = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      {!(productsTotal <= productsPerPage) && (
        <nav
          className='is-flex is-justify-content-space-between mt-5 mb-5'
          role='navigation'
          aria-label='pagination'
        >
          <div>
            {
              <span
                className={`Pagination__span-link  pagination-previous ${
                  currentPage === 1 && 'Pagination__span-hide'
                } `}
                onClick={() => setCurrentPageHandler(currentPage - 1)}
              >
                Previous
              </span>
            }
          </div>
          <div>
            <ul className='pagination-list'>
              {pageNumbers.map((number) => (
                <li key={number}>
                  <span
                    className={`Pagination__span-link pagination-link ${
                      number === currentPage && 'is-current'
                    }`}
                    onClick={() => setCurrentPageHandler(number)}
                  >
                    {number}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span
              className={`Pagination__span-link  pagination-previous ${
                currentPage === Math.ceil(productsTotal / productsPerPage) &&
                'Pagination__span-hide'
              } `}
              onClick={() => setCurrentPageHandler(currentPage + 1)}
            >
              Next page
            </span>
          </div>
        </nav>
      )}
    </>
  );
};

Pagination.propTypes = {
  roductsTotal: PropTypes.number,
  getProducts: PropTypes.func
};

export default Pagination;
