import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import Header from "../../components/HeaderAuth/HeaderAuth";
import TitleForm from "../../components/TitleForm/TitleForm";
import useBlock from "../../hooks/useBlock";
import bodySignUpSchema from "../../schemas/bodySignUpSchema";
import { postSignUp } from "../../services/api";
import { signUp } from "../../utils/index";
import { SCMain } from "./style";

export default function SignUp() {
  const [bodySignUp, setBodySignUp] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const { setBlock } = useBlock();
  const redirectSignIn = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();
    setBlock(true);
    const validate = await bodySignUpSchema.isValid(bodySignUp);
    if (!validate) {
      alert("Preencha corretamente todos os dados para cadastro!");
      setBlock(false);
      return;
    }

    if (bodySignUp.password !== bodySignUp.confirm) {
      alert("Erro na confirmação de senha!");
      setBlock(false);
      return;
    } else {
      delete bodySignUp.confirm;
      postSignUp(bodySignUp)
        .then((response) => {
          setBlock(false);
          redirectSignIn("/", { replace: true });
        })
        .catch((err) => {
          setBlock(false);
          alert("Este email já está sendo utilizado!");
        });
    }
  }

  return (
    <>
      <Header />
      <SCMain>
        <TitleForm title="Cadastro" />
        <Form
          inputs={signUp}
          button="Cadastrar"
          func={handleSignUp}
          data={bodySignUp}
          setData={setBodySignUp}
          link="Já possuo cadastro"
          rota="/"
        />
      </SCMain>
    </>
  );
}
