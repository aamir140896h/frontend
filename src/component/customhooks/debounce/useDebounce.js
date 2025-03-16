import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debounceVlaue, setDebounceVlaue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVlaue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounceVlaue;
};

export default useDebounce;
