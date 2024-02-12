import { createSlice } from "@reduxjs/toolkit";

//Store the initial state in a variable

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodoItem: (state, { payload }) => {
      state.todos.push(payload);
    },
    removeTodoItem: () => {},
  },
});

//Export the reducers function (addTodoItem & removeTodoItem)
//This is used where we want to dispatch the action/ function`
export const { addTodoItem, removeTodoItem } = todoSlice.actions;

//Export the reducer as default
//This is used to configure our store
export default todoSlice.reducer;
