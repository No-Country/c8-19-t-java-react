import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";

const ProtectedRoute = () => {
  const location = useLocation();

  const token = useSelector((state) => state.auth.token);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default ProtectedRoute;
