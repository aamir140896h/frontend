import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, increamnetedByAmount } from "./slice";

const Maincomonent = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increament())}>Increament</button>
      <button onClick={() => dispatch(decreament())}>Decreament</button>
      <button onClick={() => dispatch(increamnetedByAmount(5))}>
        Increamented By 5
      </button>
    </div>
  );
};

export default Maincomonent;
