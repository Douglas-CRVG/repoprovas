import { useState } from "react";
import { SCInput } from "../../Form/Input/style";

export default function Search({ name, setData, data }) {
  const [input, setInput] = useState("");

  function getInput(target) {
    setInput(target.value);
    setData({ ...data, [target.name]: target.value });
  }
  return (
    <SCInput
      type="text"
      placeholder={name}
      onChange={(e) => getInput(e.target)}
      value={input}
      name="search"
    />
  );
}
