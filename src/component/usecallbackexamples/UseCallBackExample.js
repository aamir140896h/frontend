import React, { useState } from "react";
import UseCallBackChild from "./UseCallBackChild";

const UseCallBackExample = () => {
  const [count, setCount] = useState(0);
  //   const handleClick = () => {
  //     setCount((prev) => prev + 1);
  //   };
  function handleClick() {
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      <p>count: {count}</p>
      <UseCallBackChild onClick={handleClick} />
    </div>
  );
};

export default UseCallBackExample;
