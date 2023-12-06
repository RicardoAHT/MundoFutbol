import { createSlice } from '@reduxjs/toolkit';

export const teamSlice = createSlice({
    name: 'team',
    initialState: 302,
    reducers: {
      setTeamSlice: (state, action) => action.payload
    }
})

export const { setTeamSlice } = teamSlice.actions;

export default teamSlice.reducer;
