import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

// Este hooks solamente lo hice para simplificar la importacion de los valores

const useAuth = () => {
  const { loading, error, user, handleLogIn, handleLogOut } =
    useContext(AuthContext);

  return { loading, error, user, handleLogIn, handleLogOut };
};

export default useAuth;
