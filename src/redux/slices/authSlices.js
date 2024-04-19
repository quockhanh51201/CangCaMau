import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllAuth = createAsyncThunk('auths/fetchAllAuth', async () => {
  const response = await axios('https://jsonplaceholder.typicode.com/posts/1');
  return response.data;
});

const initialState = {
  listAuth: [],
  isLoaing: false,
  isError: false,
};

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAllAuth.pending, (state, action) => {
        // Add user to the state array
        state.isLoaing = true;
        state.isError = false;
      })
      .addCase(fetchAllAuth.fulfilled, (state, action) => {
        // Add user to the state array
        state.listAuth = action.payload;
        state.isLoaing = false;
        state.isError = false;
      })
      .addCase(fetchAllAuth.rejected, (state, action) => {
        // Add user to the state array
        state.isLoaing = false;
        state.isError = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = authSlice.actions;

export default authSlice.reducer;
