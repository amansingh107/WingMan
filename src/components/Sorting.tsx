import React from 'react';
import { useAppDispatch } from '../store/store';
import { setSortBy } from '../store/productsSlice';

const Sorting: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(event.target.value as 'price' | 'rating'));
  };

  return (
    <div className="relative w-full md:w-1/6">
      <select
        onChange={handleSortChange}
        className="py-2 pr-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-green-300 transition-all"

      >
        <option value="price">Sort by Price</option>
        <option value="rating">Sort by Rating</option>
      </select>
      {/* Sorting icon inside the select dropdown */}
    </div>
  );
};

export default Sorting;
