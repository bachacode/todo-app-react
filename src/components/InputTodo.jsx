import PropTypes from "prop-types";

/**
 * @param {{todo: string, onChange: () => void}}
 */
function InputTodo({ todo, onChange }) {
  return (
    <div className="font-bold italic flex flex-col">
      <label htmlFor="todo" className="text-sm md:text-xl font-semibold italic">
        What are you going to do?
      </label>
      <input
        type="text"
        id="todo"
        name="todo"
        placeholder="e.g. make a video"
        value={todo}
        onChange={onChange}
        required
        className="bg-slate-900 border-slate-600 border-none shadow-xl rounded-lg py-3 w-full"
      />
    </div>
  );
}

InputTodo.propTypes = {
  todo: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTodo;
