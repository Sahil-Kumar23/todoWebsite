import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
const Todo = ({ id, s_no, updatedAt, text, completed, onToggle, onDelete , onUpdate}) => {
  const [formattedDate, setFormattedDate] = useState(new Date(updatedAt).toLocaleString());
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  useEffect(() => {
    setFormattedDate(new Date(updatedAt).toLocaleString());
  }, [updatedAt]);

  const handleUpdate = () => {
    onUpdate(id, editedText);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedText(text);
  };

  return (
    <div className="m-12 bg-gray-700 min-w-[200px] max-w-[300px] min-h-[300px] max-h-[300px] rounded-xl border-2 border-gray-500 shadow-gray-700 shadow-md hover:bg-gray-900 hover:border-white hover:border-solid hover:border-2 hover:shadow-lg hover:scale-110 duration-700 p-5 ">
      <input 
        className="w-9 h-9 p-1 bg-blue-700 rounded-md text-white font-bold text-center" 
        defaultValue={1}
        value={s_no}
        readOnly
      />
      {/* <h4 className="py-2 text-white font-bold">{}</h4> */}
      <p className="text-xs text-white space-y-4 p-1">{formattedDate}</p>
      <div className={`flex text-white items-center justify-between p-1 ${completed ? 'line-through' : ''}`}>
        <div className="max-h-36 min-h-36 overflow-y-auto">
          {/* <p className="text-base leading-7 text-white space-y-4 ">{text}</p> */}
          {isEditing ? (
            <textarea
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="border p-1 rounded-md w-full bg-gray-700 h-36"
            />
          ) : (
            <p className="text-base leading-6 text-white space-y-4 ">{text}</p>
          )}
        </div>
      </div>
      <div className="pt-3 pb-2">
        {isEditing ? (
          <>
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              onClick={() => handleUpdate()}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 16 16" 
                fill="currentColor" 
                className="w-4 h-4"
              >
                <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Edit</span>
            </button>
            <button
              type="button"
              className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500"
              onClick={() => handleCancel()}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 16 16" 
                fill="currentColor" 
                className="w-4 h-4"
              >
                <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Cancel</span>
            </button>
          </>
        ): (
          <>
            <label className="relative inline-flex items-center cursor-pointer mr-4">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={() => onToggle(id)}
                checked={completed}
              />
              <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[10%] after:start-[1.2px] after:transform-translate-y-[-50%] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-white peer-checked:bg-blue-600"></div>
            </label>
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              onClick={() => onDelete(id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              <span className="sr-only">Delete</span>
            </button>
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              onClick={() => setEditing(true)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-3 h-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              <span className="sr-only">Edit</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  s_no: PropTypes.number.isRequired,
  updatedAt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Todo;