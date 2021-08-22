import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';

const Pagination = ({
  productsTotal,
  productsPerPage,
  currentPage,
  setCurrentPage
}) => {
  const setCurrentPageHandler = (number) => {
    setCurrentPage(number);
    scroll.scrollToTop();
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
          className='is-flex is-justify-content-center mt-5 mb-5'
          role='navigation'
          aria-label='pagination'
        >
          <div>
            <span
              className={`pagination__span-link  pagination-previous ${
                currentPage === 1 && 'pagination__span-hide'
              } `}
              onClick={() => setCurrentPageHandler(currentPage - 1)}
            >
              Previous
            </span>
          </div>
          <div>
            <ul className='is-flex is-justify-content-center is-flex-wrap-wrap'>
              {showPagesNumber.map((number) => (
                <li key={number}>
                  <span
                    className={`pagination__span-link-none pagination__span-link pagination-link ${
                      number === currentPage && 'is-current'
                    }`}
                    onClick={() => setCurrentPageHandler(number)}
                  >
                    {number}
                  </span>
                </li>
              ))}
            </ul>
            <span className='pagination__span-link-mobile pagination__span-link pagination-link is-current'>
              {currentPage}
            </span>
          </div>
          <div>
            <span
              className={`pagination__span-link  pagination-previous ${
                currentPage === Math.ceil(productsTotal / productsPerPage) &&
                'pagination__span-hide'
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
