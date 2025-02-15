import React, { useEffect, useState } from "react";

const HOC = (WrappedComp) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (props) => {
    return <WrappedComp {...props} loading={loading} />;
  };
};

export default HOC;
