import { configureStore } from '@reduxjs/toolkit';
import todoSlice from "../redux/features/todo/todoSlice";

const store = configureStore({
  reducer: {
    todo : todoSlice
  }
})


export default store;