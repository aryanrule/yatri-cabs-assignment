import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formType: "airPort",

  formData: {
    pickupCity: "",
    trip: "",
    pick_up_date: "",
    pick_up_time: "00:00",
    mobile_no: "",
  },
};

const airportSlice = createSlice({
  name: "airport",
  initialState,
  reducers: {
    updateField: (
      state,
      action: {
        payload: {
          field: keyof typeof state.formData;
          value: string;
        };
      }
    ) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },

    resetForm: (state) => {
      state.formData = { ...initialState.formData };
    },
  },
});

export const { updateField, resetForm } = airportSlice.actions;
export default airportSlice.reducer;