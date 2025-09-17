import React, { useCallback, useState } from "react";

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("button clicked");
  }, []);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>increament{count}</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default UseCallbackExample;

const Child = React.memo(({ onClick }) => {
  console.log("child rendered");

  return <button onClick={onClick}>Click Me</button>;
});
