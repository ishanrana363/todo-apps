import { createSlice } from '@reduxjs/toolkit'

export const darkSlice = createSlice({
    name : "dark",
    initialState : {
        mode : false,
    },
    reducers : {
        toggleDarkMode : (state) => {
            state.mode =!state.mode
        }
    }
});

export const {toggleDarkMode} = darkSlice.actions;

export default darkSlice.reducer;