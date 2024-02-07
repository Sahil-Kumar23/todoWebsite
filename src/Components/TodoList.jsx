import PropTypes from 'prop-types';
import Todo from './Todo';
import { useState } from 'react';

const TodoList = ({ todos, onToggle, onDelete , onUpdate}) => {
  const [showRows, setShowRows] = useState(4);

  const handleShowMore = () => {
    setShowRows(prevRows => prevRows + 4);
  };

  const handleShowLess = () => {
    setShowRows(prevRows => prevRows - 4);
  };

  const hideMoreButton = showRows >= todos.length;
  const hideLessButton = showRows <= 4;

  return (
    <>
    <div className="mt-4 grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
      {todos.slice(0, showRows).map((todo, index) => (
        <Todo key={todo.id} s_no={index+1} {...todo} onToggle={onToggle} onDelete={onDelete} onUpdate={onUpdate}/>
      ))}
    </div>
    <div className="flex justify-center gap-4 mb-4">
      <button className="cursor-pointer relative group overflow-hidden border-2 px-6 py-2 border-blue-700 rounded-lg" onClick={handleShowMore} hidden={hideMoreButton}>
        <span className="font-bold text-white text-md relative z-10 group-hover:text-white duration-500">Show more</span>
        <span className="absolute top-0 left-0 w-full bg-blue-700 duration-500 group-hover:-translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-blue-700 duration-500 group-hover:translate-x-full h-full"></span>

        <span className="absolute top-0 left-0 w-full bg-blue-700 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
        <span className="absolute delay-300 top-0 left-0 w-full bg-blue-700 duration-500 group-hover:translate-y-full h-full"></span>
      </button>
      <button className="cursor-pointer relative group overflow-hidden border-2 px-6 py-2 border-blue-700 rounded-lg" onClick={handleShowLess} hidden={hideLessButton}>
        <span className="font-bold text-white text-md relative z-10 group-hover:text-white duration-500">Show less</span>
        <span className="absolute top-0 left-0 w-full bg-blue-700 duration-500 group-hover:-translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-blue-700 duration-500 group-hover:translate-x-full h-full"></span>

        <span className="absolute top-0 left-0 w-full bg-blue-700 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
        <span className="absolute delay-300 top-0 left-0 w-full bg-blue-700 duration-500 group-hover:translate-y-full h-full"></span>
      </button>
      </div>
    </>
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
