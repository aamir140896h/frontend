import React from "react";
import useToggle from "./useToggle";

const ToggleComponent = () => {
  const [state, toggle] = useToggle(false);
  return (
    <div>
      <button onClick={toggle}>{state ? "hide" : "show"}</button>
      {state && <p>This is toggleable text</p>}
    </div>
  );
};

export default ToggleComponent;
