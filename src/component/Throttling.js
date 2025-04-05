import React, { useState } from "react";

const Throttling = () => {
  const [counter, setCounter] = useState(0);
  function throttle(func, delay) {
    let isThrottle;
    return function (arg) {
      console.log(isThrottle);
      if (!isThrottle) {
        func(arg);
        isThrottle = true;
        setTimeout(() => (isThrottle = false), delay);
      }
    };
  }
  const handleClick = throttle(() => {
    console.log("button click");
  }, 2000);
  return (
    <div>
      <button
        onClick={handleClick}
        // onClick={() => {
        //   handleClick();
        //   setCounter(counter + 1);
        // }}
      >
        click me
      </button>
      {counter}
    </div>
  );
};

export default Throttling;
