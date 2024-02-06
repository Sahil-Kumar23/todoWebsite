import PropTypes from 'prop-types';
import Todo from './Todo';
import { useEffect, useState } from 'react';

const TodoList = ({ todos, onToggle, onDelete , onUpdate}) => {
  const [serialNumbers, setSerialNumbers] = useState([]);
  useEffect(() => {
    // Initialize serial numbers when todos change
    const updatedSerialNumbers = todos.map((_, index) => index + 1);
    setSerialNumbers(updatedSerialNumbers);
  }, [todos]);

  return (
    <div className="mt-4 grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
      {todos.map((todo, index) => (
        <Todo key={todo.id} s_no={serialNumbers[index]} {...todo} onToggle={onToggle} onDelete={onDelete} onUpdate={onUpdate}/>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      updatedAt: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TodoList;
