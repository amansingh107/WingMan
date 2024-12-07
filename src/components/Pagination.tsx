import React from 'react';

interface PaginationProps {
  totalProducts: number;
  productsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalProducts,
  productsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center mt-4">
      <ul className="flex space-x-2">
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`px-4 py-2 rounded ${
                page === currentPage
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
