// import React from 'react'
// import { Outlet } from 'react-router-dom'

// const PrivateRoute = ({allowedRoles}) => {
//   return <Outlet />
// }

// export default PrivateRoute

import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";

const PrivateRoute = ({ allowedRoles }) => {
  const { user, loading } = useContext(UserContext);

  if (loading) return null; // or a loader

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // 🚫 role not allowed → redirect to dashboard
    return user.role === "admin" ? (
      <Navigate to="/admin/dashboard" />
    ) : (
      <Navigate to="/user/dashboard" />
    );
  }

  return <Outlet />;
};

export default PrivateRoute;