function InputTodo() {
  return (
    <div className="font-bold italic flex flex-col">
      <label htmlFor="todo" className="text-sm md:text-xl font-semibold italic">
        What are you going to do?
      </label>
      <input
        type="text"
        id="todo"
        name="todo"
        className="bg-slate-900 border-slate-600 border-none shadow-xl rounded-lg py-3 w-full"
      />
    </div>
  );
}

export default InputTodo;
