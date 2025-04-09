// DropdownContext.js
import React, { createContext, useContext, useReducer } from "react";

const DropdownContext = createContext();

const dropdownReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, open: !state.open };
    case "SELECT":
      return { ...state, selected: action.payload, open: false };
    default:
      return state;
  }
};

export const DropdownProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dropdownReducer, {
    open: false,
    selected: null,
  });

  return (
    <DropdownContext.Provider value={{ state, dispatch }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => useContext(DropdownContext);
