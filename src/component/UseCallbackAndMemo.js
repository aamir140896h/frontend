import React, { useCallback, useMemo, useState } from "react";

const UseCallbackAndMemo = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);
  const expensiveCalculation = useMemo(() => {
    console.log("calculating");
    let result = 0;
    for (let i = 0; i < 100; i++) {
      result += i;
    }
    return result + count;
  }, [count]);
  return (
    <div>
      <p>Expensive Value: {expensiveCalculation}</p>
      <button onClick={() => setCount(() => count + 1)}>
        Increament :{count}
      </button>
      <button onClick={() => setTheme(!theme)}>toggle theme </button>
    </div>
  );
};

export default UseCallbackAndMemo;
