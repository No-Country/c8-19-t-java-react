import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogIn = () => {
    setLoading(true);
    try {
      setUser(true);
    } catch (error) {
      setError("Wrong credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleLogOut = () => setUser(false);

  return (
    <AuthContext.Provider
      value={{ user, loading, error, handleLogIn, handleLogOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
