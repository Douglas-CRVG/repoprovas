import { useState } from "react";
import useBlock from "../../../hooks/useBlock";
import { SCInput } from "./style";

export default function Input({ type, name, prop, data, setData }) {
  const [input, setInput] = useState("");
  const { block } = useBlock;

  function getInput(target) {
    setInput(target.value);
    setData({ ...data, [target.name]: target.value });
  }

  return (
    <SCInput
      block={block}
      type={type}
      placeholder={name}
      onChange={(e) => getInput(e.target)}
      value={input}
      name={prop}
    />
  );
}
