import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: {
    min: null,
    max: null,
  },
  category: "",
  amount: 4,
  rating: 5,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price.min = action.payload.split(" ").slice(1, 2);
      state.price.max = action.payload.split(" ").slice(3, 4);
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
  },
});

export const { setPrice, setCategory, setAmount, setRating } =
  filterSlice.actions;

export default filterSlice.reducer;
