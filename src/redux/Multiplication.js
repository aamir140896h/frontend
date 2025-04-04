import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { multiplications } from "./multipySlice";

const Multiplication = () => {
  const multiplication = useSelector((state) => state.multiply.mul);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Multiplication :{multiplication} </h1>
      <button onClick={() => dispatch(multiplications())}>Mul</button>
    </div>
  );
};

export default Multiplication;
