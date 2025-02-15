import React, { createContext, useState } from "react";
import ChildComponent from "./ChildComponent";

const Context = createContext();
const ContextAPI = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <Context.Provider value={{ theme, setTheme }}>
      <ChildComponent />
    </Context.Provider>
  );
};

export { Context };
export default ContextAPI;
