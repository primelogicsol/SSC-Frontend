"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { login as loginApi, googleAuth } from "@/hooks/authServices";
import { getUserProfile, UserProfile } from "@/hooks/profileServices";
import apiClient from "@/lib/apiClient";
import { useRouter } from "next/navigation";
import { getMembership, MembershipPayload } from "@/hooks/membershipServices";

interface AuthContextType {
  user: UserProfile | null;
  membership: MembershipPayload | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  googleLogin: (email: string, fullName: string) => Promise<void>;
  logout: () => void;
  fetchUserProfile: () => Promise<void>;
  setMembership: (membership: MembershipPayload | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [membership, setMembership] = useState<MembershipPayload | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // ✅ Restore session & fetch profile + membership on mount
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      fetchUserProfile();
      fetchMembership();
    }
  }, []);

  // ✅ Axios Interceptor for Token Refresh
  useEffect(() => {
    const interceptor = apiClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const newAccessToken = await refreshAccessToken();
            if (newAccessToken) {
              originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
              return apiClient(originalRequest);
            }
          } catch (err) {
            logout();
            router.push("/login");
          }
        }
        return Promise.reject(error);
      }
    );
    return () => {
      apiClient.interceptors.response.eject(interceptor);
    };
  }, []);

  // ✅ Fetch User Profile
  const fetchUserProfile = async () => {
    try {
      const profile = await getUserProfile();
      setUser(profile);
    } catch {
      logout();
    }
  };

  // ✅ Fetch Membership
  const fetchMembership = async () => {
    try {
      const membershipData = await getMembership();
      setMembership(membershipData);
    } catch (err) {
      console.error("No membership found or error fetching", err);
    }
  };

  // ✅ Refresh Access Token
  const refreshAccessToken = async (): Promise<string | null> => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return null;

    try {
      const res = await apiClient.get("/refresh-access-token", {
        headers: { Authorization: `Bearer ${refreshToken}` },
      });
      const newAccessToken = res.data.accessToken;
      localStorage.setItem("accessToken", newAccessToken);
      return newAccessToken;
    } catch {
      return null;
    }
  };

  // ✅ Login
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const data = await loginApi(email, password);
      if (data.accessToken && data.refreshToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        await fetchUserProfile();
        await fetchMembership();
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google Login
  const googleLogin = async (email: string, fullName: string) => {
    setLoading(true);
    try {
      const data = await googleAuth(email, fullName);
      if (data.accessToken && data.refreshToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        await fetchUserProfile();
        await fetchMembership();
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Logout
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    setMembership(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        membership,
        isAuthenticated: !!user,
        loading,
        login,
        googleLogin,
        logout,
        fetchUserProfile,
        setMembership,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
