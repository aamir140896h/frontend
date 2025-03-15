import React from "react";
import UseMemoUserList from "./UseMemoUserList";

const UseMemoMain = () => {
  const users = ["Aamir", "John", "Doe", "Alice", "Bob"];
  return <UseMemoUserList users={users} />;
};

export default UseMemoMain;
