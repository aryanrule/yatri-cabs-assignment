import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formType: "outStation",
  tripType: "oneWay",

  oneWay: {
    pickupCity: "",
    destinationCity: "",
    pick_up_date: "",
    pick_up_time: "00:00",
    mobile_no: ""
  },

  roundTrip: {
    pickupCity: "",
    destinationCity: "",
    pick_up_date: "",
    pick_up_time: "00:00",
    returnDate: "",
    mobile_no: ""
  }
};

const outStationSlice = createSlice({
  name: "outstationForm",
  initialState,
  reducers: {
    setTripType: (state : any, action) => {
      state.tripType = action.payload;
    },

    updateField: (state : any, action) => {
      const { formType, field, value } = action.payload;

      // safety check (VERY IMPORTANT)
      if (state[formType]) {
        state[formType][field] = value;
      }
    },

    resetForm: (state) => {
      state.oneWay = initialState.oneWay;
      state.roundTrip = initialState.roundTrip;
    }
  }
});

export const { setTripType, updateField, resetForm } = outStationSlice.actions;
export default outStationSlice.reducer;