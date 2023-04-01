import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICurrency, IItems } from '../../api';

const initialState: IItems<ICurrency> = {
  items: [],
  error: '',
  isLoading: false
};

export const CurrencySlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    stocksFetching (state) {
      state.isLoading = true;
    },
    stocksFetchingSuccess (state, action: PayloadAction<ICurrency[]>) {
      state.isLoading = false;
      state.error = '';
      state.items = action.payload;
      // state.pagesCount = action.payload.pagesCount;
    },
    stocksFetchingError (state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default CurrencySlice.reducer;
