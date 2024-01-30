import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import InputCategory from "./components/InputCategory";
import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem";
import useInput from "./hooks/useInput";
import useTodos from "./hooks/useTodos";

function App() {
  const [todo, setTodo] = useInput("");
  const [category, setCategory] = useInput("Personal");

  const [todos, setTodos] = useTodos("todos");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();

    setTodo("");
    setCategory(category.value);
  };

  const addTodo = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      checked: false,
      content: todo.value,
      category: category.value,
    };

    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const updateChecked = (checked, id) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = checked;
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((todos) => {
      return todos.filter((todo) => {
        if (todo.id !== id) return todo;
      });
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-800 ">
      <Header />
      <main className="flex w-full md:flex-row flex-col text-white">
        <section className="w-full md:w-1/2 py-6 px-10">
          <form onSubmit={handleSubmit}>
            {/* Input for adding todos to the list */}
            <InputTodo todo={todo.value} onChange={todo.onChange}></InputTodo>

            {/* Category Picker */}
            <h2 className="text-sm md:text-xl py-2 italic font-semibold">
              Pick a category
            </h2>

            {/* Categories */}
            <div className="flex space-x-6 items-center">
              <InputCategory
                category="Personal"
                containerClass="border-category-personal"
                inputClass="border-category-personal text-category-personal focus:ring-category-personal"
                onChange={category.onChange}
                checked={category.value === "Personal"}
              ></InputCategory>
              <InputCategory
                category="Business"
                containerClass="border-category-business"
                inputClass="border-category-business text-category-business focus:ring-category-business"
                onChange={category.onChange}
                checked={category.value === "Business"}
              ></InputCategory>
            </div>

            {/* Add todo button */}
            <div className="mt-6">
              <button
                type="submit"
                id="addTodo"
                className="w-full py-3 bg-primary rounded-lg text-xl font-semibold text-black cursor-pointer hover:brightness-90 transition-all ease-in-out duration-700 text-text hover:-translate-y-1"
              >
                Add Todo
              </button>
            </div>
          </form>
        </section>

        <section className="w-full md:w-1/2 py-6 px-10">
          <h2 className="uppercase font-bold">todo list</h2>

          <ul
            id="todo-list"
            className="todo-list overflow-auto h-[336px] md:h-[346px] space-y-2"
          >
            {todos.length > 0 ? (
              todos.map((todo) => (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  toggleChecked={updateChecked}
                  deleteTodo={deleteTodo}
                ></TodoItem>
              ))
            ) : (
              <div className="bg-slate-900 p-3 rounded-md">
                <p>You don&apos;t have pending tasks!</p>
              </div>
            )}
          </ul>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
