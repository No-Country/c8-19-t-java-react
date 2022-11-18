import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthStore } from "../hooks/useAuthStore";


const ProtectedRoute = () => {
  const location = useLocation();
  const { status } = useAuthStore();

  return (status === 'authenticated') ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default ProtectedRoute;
