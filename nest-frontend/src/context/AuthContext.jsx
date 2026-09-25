import { createContext, useContext, useState } from "react";
import { users } from "../data/mockData";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("currentUser");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email, password) => {
    const user = users.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password
    );

    if (!user) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    // Don't store password in localStorage.
    const { password: _, ...safeUser } = user;

    localStorage.setItem(
      "currentUser",
      JSON.stringify(safeUser)
    );

    setCurrentUser(safeUser);

    return {
      success: true,
      user: safeUser,
    };
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    isAuthenticated: Boolean(currentUser),
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}