import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'assets/styles/index.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>,
);
