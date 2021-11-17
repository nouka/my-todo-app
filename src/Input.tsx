import React, { useState } from "react";

type Props = {
  handleClick: (text: string) => void;
}
function Input(props: Props) {
  const [text, setText] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => props.handleClick(text)}>追加</button>
    </>
  );
}

export default Input;
