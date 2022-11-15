import { Navigate, Outlet, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const location = useLocation();
  const { user } = useAuth();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
export default ProtectedRoute;
