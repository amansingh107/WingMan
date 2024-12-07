import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';  // Make sure to import your store
import App from './App';  // Your App component
import './index.css'; // Ensure Tailwind is applied
// src/main.tsx or src/index.tsx (depending on your Vite setup)

// Wrap the App component with the Provider and pass the Redux store
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
