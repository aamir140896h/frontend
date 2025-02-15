import React, { useContext } from "react";
import { Context } from "./ContextAPI";

const ChildComponent = () => {
  const { theme, setTheme } = useContext(Context);
  return (
    <div>
      <p>Current theme : {theme}</p>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        chnage theme
      </button>
    </div>
  );
};

export default ChildComponent;
