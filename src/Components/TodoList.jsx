import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onToggle, onDelete , onUpdate}) => {
  return (
    <div className="mt-4 grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
      {todos.map((todo, index) => (
        <Todo key={todo.id} s_no={index+1} {...todo} onToggle={onToggle} onDelete={onDelete} onUpdate={onUpdate}/>
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
