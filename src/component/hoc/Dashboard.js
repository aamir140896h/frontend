import React from "react";

const Dashboard = ({ user }) => {
  return (
    <>
      <h2>Welcome to the Dashboard {user.name}!</h2>
    </>
  );
};

export default Dashboard;
