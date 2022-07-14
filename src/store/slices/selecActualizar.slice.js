import { createSlice } from "@reduxjs/toolkit";

export const selecActualizar = createSlice({
  name: "elementoSeleccionado",
  initialState: null,
  reducers: {
    seleccionar: (state, action) => {
      return action.payload;
    },
  },
});

export const { seleccionar } = selecActualizar.actions;

export default selecActualizar.reducer;
