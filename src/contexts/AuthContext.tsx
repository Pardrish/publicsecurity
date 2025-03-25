
import React, { createContext, useContext, useState, useEffect } from "react";

// Types for our context
type User = {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  isAdmin: () => boolean;
};

// Default context value
const defaultContextValue: AuthContextType = {
  user: null,
  login: async () => false,
  logout: () => {},
  isLoading: true,
  isAdmin: () => false,
};

// Create the context
const AuthContext = createContext<AuthContextType>(defaultContextValue);

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Mock admin credentials - in a real app this would be validated against a backend
const ADMIN_EMAIL = "admin@safetynet.com";
const ADMIN_PASSWORD = "admin123";

// Mock user data - in a real app this would come from your backend
const ADMIN_USER: User = {
  id: "admin-1",
  name: "Admin User",
  email: ADMIN_EMAIL,
  role: "admin",
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for saved user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("auth_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Mock login function
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, you'd validate credentials against a backend
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setUser(ADMIN_USER);
      localStorage.setItem("auth_user", JSON.stringify(ADMIN_USER));
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
  };

  // Check if user is admin
  const isAdmin = () => {
    return user?.role === "admin";
  };

  const value = {
    user,
    login,
    logout,
    isLoading,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
