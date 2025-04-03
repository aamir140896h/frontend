const withAuth = (WrappedComp) => {
  return (props) => {
    const isAuthenticated = true;
    const user = { name: "Aamir", role: "Admin" };
    if (!isAuthenticated) return <h2>Please log in to view this page.</h2>;
    return <WrappedComp user={user} {...props} />;
  };
};

export default withAuth;
