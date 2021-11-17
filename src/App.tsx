import React, { useState } from "react";
import TodoList from "./TodoList";
import Input from "./Input";

function App() {
  const [todos, setTodos] = useState<{ label: string }[]>([]);
  const handleClick = (text: string) => {
    setTodos([...todos, { label: text }]);
  };
  return (
    <>
      <Input handleClick={handleClick} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
