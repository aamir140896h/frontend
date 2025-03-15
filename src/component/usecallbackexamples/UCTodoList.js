import { useCallback, useRef, useState } from "react";
import UCTodoItem from "./UCTodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Master Redux" },
    { id: 3, text: "Explore Node.js" },
  ]);

  // Function recreated on each render (BAD for performance) Without UsecallBack
  //   const handleDelete = (id) => {
  //     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  //   };

  // With UsecallBack

  const handleDelete = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <UCTodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
