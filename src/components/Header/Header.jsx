import Logo from "../Logo/Logo";
import SignOut from "../SignOut/SignOut";
import { SCHeader } from "./style";

export default function Header() {
  return (
    <SCHeader>
      <Logo />
      <SignOut />
    </SCHeader>
  );
}
