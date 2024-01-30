import { useEffect, useState } from "react";

export default (key) => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? [],
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [key, todos]);

  return [todos, setTodos];
};
