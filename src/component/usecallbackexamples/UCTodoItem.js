import React from "react";

const UCTodoItem = React.memo(({ todo, onDelete }) => {
  console.log(`Rendering: ${todo.text}`);
  return (
    <li>
      {todo.text} <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
});

export default UCTodoItem;
