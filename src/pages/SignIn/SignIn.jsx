import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import Header from "../../components/HeaderAuth/HeaderAuth";
import TitleForm from "../../components/TitleForm/TitleForm";
import useBlock from "../../hooks/useBlock";
import useToken from "../../hooks/useToken";
import bodySignInSchema from "../../schemas/bodySignInSchem";
import { postSignIn } from "../../services/api";
import { signIn } from "../../utils";
import { SCMain } from "../SignUp/style";

export default function SignIn() {
  const [bodySignIn, setBodySignIn] = useState({
    email: "",
    password: "",
  });

  const { setBlock } = useBlock();
  const { logIn } = useToken();
  const redirectSignIn = useNavigate();

  async function handleSignIn(e) {
    e.preventDefault();
    setBlock(true);

    const validate = await bodySignInSchema.isValid(bodySignIn);

    if (!validate) {
      alert("Preencha corretamente todos os dados corretamente!");
      setBlock(false);
      return;
    }

    postSignIn(bodySignIn)
      .then((response) => {
        logIn(response.data.token);
        setBlock(false);
        redirectSignIn("/home", { replace: true });
      })
      .catch((err) => {
        setBlock(false);
        console.log(err.response);
        alert("Usuário ou senha incorretos!");
      });
  }

  return (
    <>
      <Header />
      <SCMain>
        <TitleForm title="Login" />
        <Form
          inputs={signIn}
          button="Entrar"
          func={handleSignIn}
          data={bodySignIn}
          setData={setBodySignIn}
          link="Não possuo cadastro"
          rota="/sign-up"
        />
      </SCMain>
    </>
  );
}
