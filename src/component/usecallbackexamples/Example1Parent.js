import React, { useCallback, useState } from "react";
import Example1C from "./Example1C";

const Example1Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("handle click");
    console.log("handle click");
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <Example1C handleClick={handleClick} />
    </div>
  );
};

export default Example1Parent;
