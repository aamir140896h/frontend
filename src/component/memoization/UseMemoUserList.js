import React, { useMemo, useState } from "react";

const UseMemoUserList = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filterUser = useMemo(() => {
    return users.filter((user) =>
      user.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [users, searchQuery]);
  return (
    <>
      <input
        type="text"
        placeholder="enter name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filterUser.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default UseMemoUserList;
