import { createSlice } from "@reduxjs/toolkit";

export const erroresSlice = createSlice({
  name: "errores",
  initialState: null,
  reducers: {
    setError: (state, action) => {
      return action.payload;
    },
    clearError: (state, action) => {
      return null;
    },
  },
});

export const { setError, clearError } = erroresSlice.actions;

export default erroresSlice.reducer;
