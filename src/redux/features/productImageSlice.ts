import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type productImageState = {
  value: string;
};

const initialState = {
  value: '',
} as productImageState;

export const productImage = createSlice({
  name: 'productImage',
  initialState,
  reducers: {
    reset: () => initialState,
    changeUrl: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeUrl, reset } = productImage.actions;
export default productImage.reducer;
