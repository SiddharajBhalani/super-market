import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element }) => {
  const user = JSON.parse(localStorage.getItem("user")); // Retrieve user from localStorage

  return user ? element : <Navigate to="/login" replace />;
};
