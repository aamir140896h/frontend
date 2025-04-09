import React, { createContext, useState } from "react";
import ChildComponent from "./ChildComponent";

const Context = createContext();
const ContextAPI = () => {
  const [theme, setTheme] = useState("dark");
  const [count, setCount] = useState(0);
  return (
    <Context.Provider value={{ theme, setTheme, count, setCount }}>
      <ChildComponent />
    </Context.Provider>
  );
};

export { Context };
export default ContextAPI;
