import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type productSearchState = {
  value: string;
};

const initialState = {
  value: '',
} as productSearchState;

export const productSearch = createSlice({
  name: 'productSearch',
  initialState,
  reducers: {
    reset: () => initialState,
    changeSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeSearch, reset } = productSearch.actions;
export default productSearch.reducer;
