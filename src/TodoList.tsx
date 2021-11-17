import React from "react";
import Todo from "./Todo";

type Props = {
  todos: { label: string }[];
};
function TodoList(props: Props) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <Todo label={todo.label} />
      ))}
    </ul>
  );
}

export default TodoList;
