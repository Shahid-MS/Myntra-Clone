import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addTobag: (state, action) => {
      state.push(action.payload);
    },
    removeFrombag: (state, action) => {
    //   console.log("state", state);
      return state.filter((itemId) => {
        return itemId !== action.payload;
      });
    },
  },
});
export const bagActions = bagSlice.actions;
export default bagSlice;
