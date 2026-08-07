import { Navigate } from "react-router-dom";
import { getToken } from "../utils/auth";

function ProtectedRoute({ children, role }) {
  const user = getToken();

  // User is not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // User role does not match
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  // Allow access
  return children;
}

export default ProtectedRoute;
