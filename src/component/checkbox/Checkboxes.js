import React from "react";
import "./checkbox.css";

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, item) => {
    setChecked((prev) => {
      const newState = { ...prev, [item.id]: isChecked };

      //   Top-down: update all children
      const updateChildren = (node) => {
        if (!node.children) return;
        for (const child of node.children) {
          newState[child.id] = isChecked;
          updateChildren(child);
        }
      };
      updateChildren(item);

      //  Bottom-up: update parents recursively

      const verifyParentChecked = (node) => {
        if (!node.children) return newState[node.id] || false;

        newState[node.id] = node.children.every((child) =>
          verifyParentChecked(child)
        );

        return newState[node.id];
      };
      data.forEach((node) => verifyParentChecked(node));

      return newState;
    });
  };
  console.log(checked);

  return (
    <div>
      {data.map((item) => (
        <div className="parent" key={item.id}>
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
