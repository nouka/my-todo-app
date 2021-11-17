import React, { useState } from "react";

type Props = {
  label: string;
};
function Todo(props: Props) {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <li onClick={() => setDone(false)}>
        <s>{props.label}</s>
      </li>
    );
  }
  return <li onClick={() => setDone(true)}>{props.label}</li>;
}

export default Todo;
