import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from 'react-hot-toast';
import HomePage from './HomePage';
import CollectionPage from './CollectionPage';
import ProductDetailPage from './ProductDetailPage';
import { Provider } from 'react-redux';  // Import Provider
import {store} from '../redux/Store/index';  // Import store từ Redux

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0
      }
    }
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>  {/* Bao bọc ứng dụng với Provider */}
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path="/collection/:type" element={<CollectionPage />} />
              <Route path="/product/:name" element={<ProductDetailPage />} />
            </Routes>
          </BrowserRouter>
        </Provider>
        <Toaster 
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "18px 0" }}
          toastOptions={{
            success: {
              duration: 3000,
            }, 
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
            }
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
