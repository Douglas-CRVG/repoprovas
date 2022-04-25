import { SCLogo } from "./style";
import logo from "../../assets/images/logo.jpeg";

export default function Logo() {
  return (
    <SCLogo>
      <img
        src={logo}
        alt="Logo do app RepoProvas. Uma folha de prova ao lado de um lápis"
      />
      <p>
        Repo
        <strong>Provas</strong>
      </p>
    </SCLogo>
  );
}
