import { createSlice } from '@reduxjs/toolkit';

// Load todos from local storage if available
const loadTodosFromLocalStorage = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: loadTodosFromLocalStorage(),
  reducers: {
    addTodo: (state, action) => {
      // state.push({ id: Date.now(), text: action.payload, completed: false });
      const currentDate = new Date();
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
        updatedAt: currentDate.toISOString(),
      });
      saveTodosToLocalStorage(state);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodosToLocalStorage(state);
      }
    },
    // deleteTodo: (state, action) => {
    //   return state.filter((todo) => todo.id !== action.payload);
    // },
    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      state.splice(0, state.length, ...newState);
      saveTodosToLocalStorage(state);
    },
    editTodo: (state, action) => {
      const { id, newText, updatedAt } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
        todo.updatedAt = updatedAt || new Date().toISOString();
        saveTodosToLocalStorage(state);
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
