import React, { useMemo, useState } from "react";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
];

const Example2 = () => {
  const [search, setSetSearch] = useState("");
  const filterUserUsingMemo = useMemo(() => {
    console.log("search");

    return users.filter((item, i) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSetSearch(e.target.value)}
        placeholder="Enter name"
      />
      <ul>
        {filterUserUsingMemo.map((item, i) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Example2;
