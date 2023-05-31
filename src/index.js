import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { CartProvider } from './contexts/cart.context';

import './index.scss';
import { store } from './store/store';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <CartProvider>
                    <App/>
                </CartProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
