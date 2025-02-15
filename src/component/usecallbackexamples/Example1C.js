import React from "react";

const Example1C = React.memo(({ handleClick }) => {
  console.log("child Component");

  return <button onClick={handleClick}>Click C</button>;
});

export default Example1C;
