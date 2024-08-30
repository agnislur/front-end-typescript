// main.tsx
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './reduxStore/store';
import App from './App';
import './index.css'; // Pastikan ini diimpor dengan benar
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
