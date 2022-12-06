import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));
const favorites = JSON.parse(localStorage.getItem("favorites"));

const initialState = {
  user: user ? user : null,
  token: token ? token : null,
  favorites: favorites ? favorites : [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log(action);
      state.user = action.payload.name;
      state.token = action.payload.token;
      state.favorites.push(action.payload.favorites);
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", JSON.stringify(state.token));
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    logout: (state) => {
      (state.user = null), (state.token = null);
      localStorage.clear();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
