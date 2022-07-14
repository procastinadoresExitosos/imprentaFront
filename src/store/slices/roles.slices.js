import { createSlice } from "@reduxjs/toolkit";
import { setLoader } from "./loader.slice";
import axios from "axios";

export const rolesSlice = createSlice({
  name: "roles",
  initialState: [],
  reducers: {
    setRoles: (state, action) => {
      return action.payload;
    },
  },
});

export const { setRoles } = rolesSlice.actions;

export const getRoles = () => (dispatch) => {
  dispatch(setLoader(true));
  return axios
    .get("https://imprenta-usuarios.herokuapp.com/api/v1/roles/")
    .then((res) => dispatch(setRoles(res.data)))
    .finally(() => dispatch(setLoader(false)));
};

export default rolesSlice.reducer;
