import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 100,
  category: "",
  amount: 4,
  rating: 5,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
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
