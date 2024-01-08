/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useEffect, useState } from "react";

const ReactCounter = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("../../atoms.json")
      .then((res) => res.json())
      .then((data) => {
        setText(JSON.stringify(data));
      });
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
      text: {text}
    </>
  );
};

export const Counter = qwikify$(ReactCounter, { eagerness: "hover" });
