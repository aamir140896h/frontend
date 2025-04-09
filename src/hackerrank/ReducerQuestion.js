import React, { useReducer, useState } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment": {
//       return state + 1;
//     }
//     case "double": {
//       return state * 1;
//     }
//     default: {
//       return state;
//     }
//   }
// };

const ReducerQuestion = () => {
  //   const [counter, dispatch] = useReducer(reducer, 0);
  //   const fire = () => {
  //     ["increment", "double", "reset", "increment"].forEach((type) =>
  //       dispatch(type)
  //     );
  //   };
  //   return <button onClick={fire}>counter: {counter}</button>;
  //   const [number, setNumber] = useState(0);
  //   const incrementNumber = () => {
  //     setNumber(number++);
  //   };
  //   return (
  //     <div>
  //       <p>Number : {number}</p>
  //       <button onClick={incrementNumber}>click</button>
  //     </div>
  //   );

  const [student, setStudent] = useState({
    Name: "ABC",
    Roll: "123",
    Presence: 0,
  });

  const update = () => {};

  return (
    <>
      <p>{student.Presence}</p>
      <button onClick={update(student.Presence + 1)}>Update Student</button>
    </>
  );
};

export default ReducerQuestion;
