import { createContext, useState } from "react";

const SearchContext = createContext();

export default SearchContext;

export function SearchContextProvider({ children }) {
  const [search, setSearch] = useState("disciplina");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
