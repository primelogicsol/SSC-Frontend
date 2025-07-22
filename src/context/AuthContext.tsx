"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { login as loginApi, googleAuth } from "@/hooks/authServices";

interface User {
  email: string;
  fullName?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  googleLogin: (email: string, fullName: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Restore session on mount
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const email = localStorage.getItem("userEmail");
    const fullName = localStorage.getItem("userFullName");

    if (accessToken && email) {
      setUser({ email, fullName: fullName || "" });
    }
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const data = await loginApi(email, password);
      if (data.accessToken && data.refreshToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        setUser(data.user || { email });
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const googleLogin = async (email: string | undefined, fullName: string | undefined) => {
    setLoading(true);
    try {
      const data = await googleAuth(email ?? "", fullName ?? "");
      setUser(data.user || { email: email ?? "", fullName: fullName ?? "" });
    } catch (err) {
      console.error("Google Auth failed", err);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userFullName");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, loading, login, googleLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
