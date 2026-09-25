import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ allowedRoles }) {
  const { currentUser, isAuthenticated } = useAuth();

  const location = useLocation();

  // User is not logged in
  if (!isAuthenticated || !currentUser) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  // User doesn't have permission
  if (
    allowedRoles &&
    !allowedRoles.includes(currentUser.role)
  ) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}