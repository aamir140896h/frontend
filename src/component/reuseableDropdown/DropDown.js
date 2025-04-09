// Dropdown.js
import React from "react";
import { useDropdown } from "./DropDownContext";

const Dropdown = ({ options }) => {
  const { state, dispatch } = useDropdown();

  return (
    <div className="dropdown">
      <input
        type="text"
        readOnly
        value={state.selected || ""}
        placeholder="Select"
        onClick={() => dispatch({ type: "TOGGLE" })}
        style={{ cursor: "pointer" }}
      />
      {state.open && (
        <ul>
          {options.map((opt) => (
            <li
              key={opt}
              style={{ cursor: "pointer" }}
              onClick={() => dispatch({ type: "SELECT", payload: opt })}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
