import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
import orderReducer from '../features/order/orderSlice.js';
import userReducer from '../features/user/userSlice';
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth:authReducer,
    cart:cartReducer,
    order:orderReducer,
    user:userReducer,
    
  },
});
