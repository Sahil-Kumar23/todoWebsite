import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, editTodo } from './feature/todosSlice'
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  // Update local storage when todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (id, newText) => {
    const currentDate = new Date().toISOString();
    dispatch(editTodo({ id, newText, updatedAt: currentDate }));
  }; 

  return (
    <div className="container mx-auto mt-6 p-4 w-[85%]">
      <h1 className="text-4xl font-bold mb-8 text-white text-center">Todo App</h1>
      <TodoForm onSubmit={handleAddTodo} />
      <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} onUpdate={handleUpdateTodo}/>
    </div>
  );
}

export default App;
