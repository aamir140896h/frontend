import React from "react";

const HOCExample = () => {
  const hocWrapper = (WrappedComponent) => {
    return function withLogger(props) {
      console.log("Props", props);
      return <WrappedComponent {...props} />;
    };
  };

  function Hello(props) {
    return <h1>Hello {props.name}</h1>;
  }

  const HOCLOgger = hocWrapper(Hello);
  return (
    <>
      <Hello name="Ayaz" />
      <HOCLOgger name="Aamir" />;
    </>
  );
};

export default HOCExample;
