import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg">
      {/* Product Image */}
      <div className="w-full h-56 bg-gray-100 dark:bg-gray-700">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 truncate">{product.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">${product.price}</p>
        <div className="flex items-center mt-2">
          <p className="text-yellow-500">{product.rating.rate} ⭐</p>
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({product.rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
