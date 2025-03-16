import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const Searche = () => {
  const [query, setQuery] = useState("");
  const debounceVlaue = useDebounce(query, 500);
  useEffect(() => {
    if (debounceVlaue) {
      console.log("Search Query :", debounceVlaue);
    }
  }, [debounceVlaue]);
  return (
    <div>
      <input
        type="text"
        placeholder="search somthing"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Searche;
