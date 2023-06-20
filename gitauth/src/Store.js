
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Features/authSlice';
import reposReducer from './Features/reposSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        repos: reposReducer,
    },
});

export default store;
