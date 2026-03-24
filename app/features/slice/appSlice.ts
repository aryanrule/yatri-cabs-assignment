import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeForm: "outstation" // default tab
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActiveForm: (state, action) => {
      state.activeForm = action.payload;
    }
  }
});

export const { setActiveForm } = appSlice.actions;
export default appSlice.reducer;