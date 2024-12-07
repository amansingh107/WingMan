import React from 'react';
import { useAppDispatch } from '../store/store';
import { setSearchTerm } from '../store/productsSlice';
import { AiOutlineSearch } from 'react-icons/ai'; // Importing a search icon

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="relative w-full md:w-1/2 lg:w-1/3">
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
        className="w-full py-2 pl-10  border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-green-300 transition-all"
      />
      <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-white" />
    </div>
  );
};

export default SearchBar;
