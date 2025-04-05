import _ from "lodash";
import React from "react";

const Debouncing = () => {
  //   const debounce = (func, delay) => {
  //     let timer;
  //     return function (arg) {
  //       clearTimeout(timer);
  //       timer = setTimeout(() => func(arg), delay);
  //     };
  //   };

  //   using lodash
  const handleChange = _.debounce((query) => {
    console.log(`search Querr ${query}`);
  }, 300);
  return (
    <div>
      <input onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
};

export default Debouncing;
