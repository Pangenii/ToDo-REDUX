import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/todoHandler/todoReducer.js"

export const store = configureStore({
    reducer: todoReducer
})