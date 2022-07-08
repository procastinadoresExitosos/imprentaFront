import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const rolesSlice = createSlice({
    name: "roles",
    initialState: [],
    reducers: {
        setRoles: (state, action)=>{
            return action.payload
        }
    }
})

export const {setRoles} = rolesSlice.actions;

export const getRoles = ()=> (dispatch) => {
    return axios.get("http://localhost:8090/api/v1/roles/")
        .then(res => dispatch(setRoles(res.data)))
}

export default rolesSlice.reducer;