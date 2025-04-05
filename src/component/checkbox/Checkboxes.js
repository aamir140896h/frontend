import React from "react";
import "./checkbox.css";

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, item) => {
    setChecked((prev) => {
      const newState = { ...prev, [item.id]: isChecked };
      //   Top-down: update all children
      const updateChilderen = (node) => {
        node?.children?.map((child) => {
          newState[child.id] = isChecked;
          child.children && updateChilderen(child);
        });
      };
      updateChilderen(item);

      //  Bottom-up: update parents recursively

      const updateParent = (node, tree) => {
        const findParent = (target, current) => {
          if (!current.children) return null;
          for (let child of current.children) {
            if (child.id === target.id) return current;
          }
        };
      };
      updateParent(item, data);

      return newState;
    });
  };
  console.log(checked);

  return (
    <div>
      {data.map((item, index) => (
        <div className="parent" key={index}>
          <input
            checked={checked[item.id] || false}
            type="checkbox"
            onChange={(e) => handleChange(e.target.checked, item)}
          />
          <span>{item.label}</span>
          {item.children && (
            <Checkboxes
              data={item.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
