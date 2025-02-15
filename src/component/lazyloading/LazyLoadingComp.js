import React, { lazy, Suspense } from "react";

const UserProfile = lazy(() => import("./UserProfile"));

const LazyLoadingComp = () => {
  return (
    <Suspense fallback={<div>Loding user profile</div>}>
      <UserProfile />
    </Suspense>
  );
};

export default LazyLoadingComp;
