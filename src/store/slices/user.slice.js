import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: "",
    reducers: {
        setUserSlice: (state, action) => action.payload
    }
})

export const { setUserSlice } = userSlice.actions;

export default userSlice.reducer;