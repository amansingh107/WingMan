import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define types for Product and the API response
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
}

interface ProductsState {
  items: Product[];
  searchTerm: string;
  sortBy: 'price' | 'rating';
  status: 'idle' | 'loading' | 'failed';
  currentPage: number;  // New pagination state
}

// Initial state for products
const initialState: ProductsState = {
  items: [],
  searchTerm: '',
  sortBy: 'price',
  status: 'idle',
  currentPage: 1,  // Default to first page
};

// Thunk to fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

// Create the products slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSortBy: (state, action: PayloadAction<'price' | 'rating'>) => {
      state.sortBy = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setSearchTerm, setSortBy, setCurrentPage } = productsSlice.actions;
export default productsSlice.reducer;
