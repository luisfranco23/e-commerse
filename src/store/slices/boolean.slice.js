import { createSlice } from '@reduxjs/toolkit';

export const isBooleanSlice = createSlice({
    name: 'isBoolean',
    initialState: false,
    reducers: {
        setIsBoolean: (state, action) => action.payload
    }
})

export const { setIsBoolean } = isBooleanSlice.actions;

export default isBooleanSlice.reducer;
