import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formType: "local",

  formData: {
    pickupCity: "",
    pick_up_date: "",
    pick_up_time: "00:00",
    mobile_no: ""
  }
};

const localSlice = createSlice({
  name: "local",
  initialState,
  reducers: {
    updateField: (state : any, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },

    resetForm: (state) => {
      state.formData = initialState.formData;
    }
  }
});

export const { updateField, resetForm } = localSlice.actions;
export default localSlice.reducer;