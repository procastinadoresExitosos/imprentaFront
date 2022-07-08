import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "usuarios",
  initialState: [],
  reducers: {
    setUsers: () => {},
    usuarioEnSesion: (state, action) => {},
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
