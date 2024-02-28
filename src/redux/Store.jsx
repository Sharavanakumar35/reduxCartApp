import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './CartReducer';

import products from '../components/productsData.json'

const store = configureStore({
    reducer: {
        cart: CartReducer,
        products: () => products
    }
});

export default store;
