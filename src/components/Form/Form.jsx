import useBlock from "../../hooks/useBlock";
import { BarForm, SCButton, SCForm, SCLink } from "./style";
import Input from "./Input/Input";
export default function Form({
  inputs,
  button,
  func,
  data,
  setData,
  link,
  rota,
}) {
  const { block } = useBlock();
  return (
    <SCForm onSubmit={func}>
      {inputs.map((input, index) => (
        <Input key={index} {...input} data={data} setData={setData} />
      ))}
      <BarForm>
        <SCLink to={rota}>{link}</SCLink>
        <SCButton block={block}>{button}</SCButton>
      </BarForm>
    </SCForm>
  );
}
