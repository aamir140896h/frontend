import React, { useMemo } from "react";

//? useCase of React.memo
// const ChildComponent = React.memo(({ count }) => {
//   console.log("Child component re-rendered!");

//   return <p>Render ChildComponent Count: {count} </p>;
// });

//? useCase of useMemo()
const ExpensiveCalulation = ({ num }) => {
  const squreNumber = useMemo(() => {
    console.log("Calculating square...");
    return num * num;
  }, [num]);
  return <p>squtreRoot: {squreNumber}</p>;
};

//? useCase of useCallBack()
// const Button = React.memo(({ handleClick }) => {
//   console.log("Button re-rendered!");
//   return <button onClick={handleClick}>Click Me</button>;
// });

// export default ChildComponent;
export default ExpensiveCalulation;
// export default Button;
