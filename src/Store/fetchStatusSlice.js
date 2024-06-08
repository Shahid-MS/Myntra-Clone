import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchingStarted: (state) => {
      // console.log("Fetching Started");
      // console.log(state);
      {
        state.currentlyFetching = true;
      }
    },
    markFetchDone: (state) => {
      // console.log("Fetching done");
      {
        state.fetchDone = true;
      }
    },
    markFetchingFinished: (state) => {
      // console.log("Fetching Finished");
      {
        state.currentlyFetching = false;
      }
    },
  },
});
export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
