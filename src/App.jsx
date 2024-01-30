import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import InputCategory from "./components/InputCategory";
function App() {
  return (
    <div className="h-screen bg-slate-800">
      <Header />
      <main className="flex w-full md:flex-row flex-col items-center text-white">
        <section className="w-full md:w-1/2 py-6 px-10">
          {/* Input for adding todos to the list */}
          <InputTodo></InputTodo>

          <div className="">
            <h2 className="text-sm md:text-xl py-2 italic font-semibold">
              Pick a category
            </h2>

            <div className="flex space-x-6 items-center">
              <InputCategory category="Personal"></InputCategory>
              <InputCategory category="Business"></InputCategory>
            </div>
          </div>
        </section>
        <section className="w-full md:w-1/2 py-6">
          <h2 className="uppercase">todo list</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
