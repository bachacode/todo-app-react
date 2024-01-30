function InputCategory({
  category,
  containerClass,
  inputClass,
  onChange,
  checked,
}) {
  const colors = {
    container: containerClass,
    input: inputClass,
  };

  return (
    <div className="w-1/2">
      <label
        htmlFor={category.toLowerCase()}
        className={`flex flex-col justify-center text-center items-center p-5 w-full h-32 bg-slate-900 rounded-xl border-2 ${colors.container} cursor-pointer hover:bg-gray-900 transition-all shadow-md`}
      >
        <input
          type="radio"
          name="category"
          id={category.toLowerCase()}
          value={category}
          onChange={onChange}
          defaultChecked={checked}
          className={`category w-6 h-6 border-2 ${colors.input} transition-all ease-out cursor-pointer`}
        />
        <span>{category}</span>
      </label>
    </div>
  );
}

InputCategory.propTypes;

export default InputCategory;
