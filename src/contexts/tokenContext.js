import { createContext, useState } from "react";

const TokenContext = createContext();

export default TokenContext;

export function TokenContextProvider({ children }) {
  const persistedToken = JSON.parse(localStorage.getItem("token"));

  const [token, setToken] = useState(persistedToken);

  function logIn(auth) {
    setToken(auth);
    localStorage.setItem("auth", JSON.stringify(auth));
  }

  function logOut(auth) {
    localStorage.removeItem("auth", JSON.stringify(auth));
  }

  return (
    <TokenContext.Provider value={{ token, logIn, logOut }}>
      {children}
    </TokenContext.Provider>
  );
}
