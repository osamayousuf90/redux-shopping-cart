import axios from 'axios'
import instance from '../instance';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

// Thunks
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const temp = await instance.get('products')
    return temp.data
});

// Thunks
export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        users: [],
        status: STATUSES.IDLE,
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
            state.status = STATUSES.IDLE;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.status = STATUSES.IDLE;
        },
      },
});

export default productSlice.reducer;

