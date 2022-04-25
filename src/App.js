import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlockContextProvider } from "./contexts/blockContext";
import { TokenContextProvider } from "./contexts/tokenContext";
import { SignIn, SignUp } from "./pages";
import "./assets/styles/reset.css";

export default function App() {
  return (
    <BlockContextProvider>
      <TokenContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </TokenContextProvider>
    </BlockContextProvider>
  );
}
