import PropTypes from "prop-types";
import { useState } from "react";

function TodoItem({ todo, toggleChecked, deleteTodo }) {
  const colors = `border-category-${todo.category.toLowerCase()} text-category-${todo.category.toLowerCase()} focus:ring-category-${todo.category.toLowerCase()}`;
  const [checked, setChecked] = useState(todo.checked);

  const handleChecked = (e) => {
    toggleChecked(e.target.checked, todo.id);
    setChecked(e.target.checked);
  };

  return (
    <li className="todo-list-item flex space-x-3 items-center bg-slate-900 p-3 rounded-md">
      <label className="text-center">
        <input
          defaultChecked={checked}
          onChange={handleChecked}
          type="checkbox"
          className={`form-radio category w-6 h-6 border-2 ${colors} transition-all ease-out cursor-pointer`}
        />
      </label>
      <p className={`w-full ${checked && "line-through text-gray-500"}`}>
        {todo.content}
      </p>
      <button onClick={() => deleteTodo(todo.id)}>
        <div className="flex p-2 border rounded-md cursor-pointer text-white bg-red-500 font-semibold text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            ></path>
          </svg>
        </div>
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleChecked: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
