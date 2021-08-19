import PropTypes from 'prop-types';

const Pagination = ({
  productsTotal,
  productsPerPage,
  currentPage,
  setCurrentPage
}) => {
  const setCurrentPageHandler = (number) => {
    setCurrentPage(number);
  };

  let totalPages = productsTotal / productsPerPage;
  const pagesNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPages); i++) {
    pagesNumbers.push(i);
  }

  let startPage;
  let endPage;
  if (currentPage <= 6 || productsTotal <= 9) {
    startPage = 0;
    endPage = 9;
  } else if (currentPage + 4 >= totalPages) {
    startPage = totalPages - 9;
    endPage = totalPages;
  } else {
    startPage = currentPage - 5;
    endPage = currentPage + 4;
  }

  const showPagesNumber = pagesNumbers.slice(startPage, endPage);

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
              {showPagesNumber.map((number) => (
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
