import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increament } from "./counterSlice";
// import { decrement, increment } from "./action";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increament())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
