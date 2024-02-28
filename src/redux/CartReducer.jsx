import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            console.log('state = ', state);
            console.log('action = ', action);
            state.push({ ...action.payload.product, quantity: action.payload.quantity, isInCart: true });
            
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        updateCartItem: (state, action) => {
            console.log('state = ', state);
            console.log('action = ', action);

            const existingItemIndex = state.findIndex(item => item.id === action.payload.product.id);
            if (existingItemIndex !== -1) {
                state[existingItemIndex].quantity = action.payload.quantity;
            }
        }
        
    }
});

export const { addToCart, removeFromCart, updateCartItem } = cartSlice.actions;
export default cartSlice.reducer;
