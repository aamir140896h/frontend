import React, { useState } from "react";

const RenderPropPattern = ({ render, last }) => {
  // ? example1
  //   const [position, setPosition] = useState({ x: 0, y: 0 });
  //   const handleMouseMove = (event) => {
  //     setPosition({ x: event.clientX, y: event.clientY });
  //   };

  //   const user = { name: "Aamir", isLogedIn: true };

  const [hovered, setHovered] = useState(false);
  return (
    // ? example1
    // <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
    //   {render(position)}
    // </div>
    // render(user)
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {render(hovered)} {last}
    </div>
  );
};

export default RenderPropPattern;
