import React, { useState } from "react";
import Expensivecalculation from "./Expensivecalculation";

const Main = () => {
  const [count, setCount] = useState(0);
  const number = 10;
  return (
    <>
      <Expensivecalculation num={number} count={count} />
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};

export default Main;
