import React, { useMemo } from "react";

const Expensivecalculation = ({ num, count }) => {
  // without
  //   const calculate = () => {
  //     console.log("Expensive Calculation");
  //     return num * 2;
  //   };

  //with UseMemo
  const memoisedValue = useMemo(() => {
    console.log("Expensive Calculation");
    return num * 2;
  }, [num]);
  return (
    <>
      <p>Calculate value : {memoisedValue}</p>
      <p>Calculate value : {count}</p>
    </>
  );
};

export default Expensivecalculation;
