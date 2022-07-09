import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:8090/api/v1/usuarios/";

export const usersSlice = createSlice({
  name: "usuarios",
  initialState: [],
  reducers: {
    setUsers: () => {},
  },
});

export const { setUsers } = usersSlice.actions;

// usuarios
export const getUsuarios = (data) => (dispatch) => {
  return axios
    .get(baseUrl)
    .then((res) => dispatch(setUsers(res.data)))
    .finally();
};

export default usersSlice.reducer;
