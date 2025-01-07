import { createSlice } from '@reduxjs/toolkit'


export const todoSlice = createSlice({
    name : "todo",
    initialState : [],
    reducers : {
        addTodo : (state, action) => {
            state.push({
                id : Date.now(),
                title : action.payload,
                completed : false
            })
        },
    
    }
});

export const {addTodo} = todoSlice.actions;

export default todoSlice.reducer;