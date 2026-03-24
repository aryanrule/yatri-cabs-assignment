
import { configureStore } from "@reduxjs/toolkit";

import outstationReducer from '../slice/outstationSlice';
import localReducer from '../slice/localSice';
import airportReducer from '../slice/airportSlice';
import appReducer from '../slice/appSlice';


// store/store.js
export const store = configureStore({
  reducer: {
    app : appReducer , 
    outstation: outstationReducer,
    local: localReducer,
    airport: airportReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;