// src/store/locationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    userLocation: null,
    addresses: [],
  },
  reducers: {
    setUserLocation(state, action) {
      state.userLocation = action.payload;
    },
    addAddress(state, action) {
      state.addresses.push(action.payload);
    },
    // Add more reducers as needed
  },
});

export const { setUserLocation, addAddress } = locationSlice.actions;
export default locationSlice.reducer;
