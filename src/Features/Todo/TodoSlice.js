import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};

// Getting the creation time
function getFormattedCurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        completed: action.payload.completed,
        createdTime: getFormattedCurrentTime(),
      };
      state.todos.push(todo);
    },
    completedTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodoText: (state, action) => {
      const { id, updatedText } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = updatedText;
      }
    },
  },
});
export const { addTodo, removeTodo, completedTodo, updateTodoText } =
  todoSlice.actions;
export default todoSlice.reducer;
