import { createSlice } from "@reduxjs/toolkit";

export const leagueSlice = createSlice({
    name: "league",
    initialState: 152,
    reducers:{
        setLeagueSlice: (state, action) => action.payload
    }
})

export const {setLeagueSlice} = leagueSlice.actions
export default leagueSlice.reducer