import React, { useContext } from "react";
import { Context } from "./ContextAPI";

const ChildComponent = () => {
  const { theme, setTheme, count, setCount } = useContext(Context);
  return (
    <div>
      <p>Current theme : {theme}</p>
      <p>count : {count}</p>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        chnage theme
      </button>
      <button onClick={() => setCount(() => count + 1)}>increment</button>
      <button onClick={() => setCount(() => count - 1)}> decrememnt</button>
    </div>
  );
};

export default ChildComponent;
