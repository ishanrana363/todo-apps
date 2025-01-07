import { configureStore } from '@reduxjs/toolkit';
import todoSlice from "../redux/features/todo/todoSlice";
import toggleTeme from "../redux/features/drack/drackSlice"

const store = configureStore({
  reducer: {
    todo: todoSlice,
    toggleColor: toggleTeme
  }
})


export default store;