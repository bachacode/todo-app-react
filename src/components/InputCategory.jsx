const categoryStyles = {
  personal: {
    container: "border-category-personal",
    input:
      "border-category-personal text-category-personal focus:ring-category-personal",
  },
  business: {
    container: "border-category-business",
    input:
      "border-category-business text-category-business focus:ring-category-business",
  },
};

function InputCategory({ category }) {
  const colors = categoryStyles[category.toLowerCase()];
  return (
    <div
      className={`w-1/2 h-32 relative justify-center flex flex-col items-center transition-all shadow-md border-2 rounded-xl hover:bg-slate-900 bg-slate-800 text-center ${colors.container}`}
    >
      <input
        type="radio"
        name="category"
        id={category.toLowerCase()}
        className={`w-6 h-6 border-2 ${colors.input} transition-all ease-out cursor-pointer`}
      />
      <label
        htmlFor={category.toLowerCase()}
        className={`absolute h-full w-full cursor-pointer rounded-xl translate-y-20`}
      >
        {category}
      </label>
    </div>
  );
}

InputCategory.propTypes;

export default InputCategory;
