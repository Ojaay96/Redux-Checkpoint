import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./slices/myTodoSlice";

//configure store

const store = configureStore({
  reducer: {
    todos: todoSliceReducer,
  },
});
export { store };
