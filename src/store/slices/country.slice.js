import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
    name: "country",
    initialState: 44,
    reducers:{
        setCountrySlice: (state, action) => action.payload
    }
})

export const {setCountrySlice} = countrySlice.actions
export default countrySlice.reducer