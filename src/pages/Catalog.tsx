import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { fetchProducts } from '../store/productsSlice';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Sorting from '../components/Sorting';
import DarkModeToggle from '../components/DarkModeToggle';
import HeroSection from '../components/HeroSection';
import Pagination from '../components/Pagination'; // Importing existing Pagination component
import WingmanLogo from '../assets/thumb.svg';

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, searchTerm, sortBy, status } = useSelector((state: RootState) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter and sort products
  const filteredProducts = items
    .filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortBy === 'price' ? a.price - b.price : b.rating.rate - a.rating.rate));

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);


  const handlePageChange = (page: number) => setCurrentPage(page);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error loading products.</p>;

  return (
    <div className="relative">
    {/* Navbar Section */}
    <nav
      className="bg-white p-4 fixed w-full  top-0 left-0 flex items-center"
      style={{ height: '70px', zIndex:99 }}
    >
      {/* Left: Wingman Logo */}
      <div className="flex items-center">
        <img src={WingmanLogo} alt="Wingman Logo" className="w-12 h-12 object-contain mr-4" /> {/* Adjusted logo size */}
      </div>
  
      {/* Center: Wingman Text */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-3xl font-bold" style={{ color: 'green' }}>
          Wingman
        </h1>
      </div>
  
      {/* Right: Dark Mode Toggle */}
      <div className="ml-auto">
        <DarkModeToggle />
      </div>
    </nav>
  
    <HeroSection />
<div className="text-center px-6 md:px-12 relative z-20 mt-12 mb-12">
  <h1 className="text-5xl font-semibold mb-4" style={{ color: 'green' }}>
    Find Your Products Here
  </h1>
  <div className="flex justify-center items-center  mb-4"> 
    <SearchBar />
    <Sorting />
  </div>
        
      </div>
{/* Main Content */}
<div id="catalog" className="p-4 ">
  {/* Centered Section with Search, Sort, Dark Mode Toggle */}
 
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination Component */}
        <Pagination
          totalProducts={filteredProducts.length}
          productsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Footer */} 
      <footer className="bg-white text-center p-4 mt-8" >
        © 2024 Wingman. All rights reserved.
      </footer>
    </div>
  );
};

export default Catalog;
