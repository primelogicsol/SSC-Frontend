import apiClient from "../lib/apiClient";

interface AuthResponse {
  accessToken?: string;
  refreshToken?: string;
  message?: string;
  user?: {
    id: string;
    email: string;
    fullName: string;
  };
}

const saveTokens = (accessToken?: string, refreshToken?: string) => {
  if (accessToken && refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }
};

export const register = async (fullName: string, email: string, password: string): Promise<AuthResponse> => {
  try {
    const res = await apiClient.post<AuthResponse>("/register", { fullName, email, password });
    return res.data; // OTP sent
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const verifyAccount = async (email: string, OTP: string): Promise<AuthResponse> => {
  try {
    const res = await apiClient.post<AuthResponse>("/verify-account", { email, OTP });
    saveTokens(res.data.accessToken, res.data.refreshToken);
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Verification failed");
  }
};

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const res = await apiClient.post<AuthResponse>("/login", { email, password });
    saveTokens(res.data.accessToken, res.data.refreshToken);
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const resendOTP = async (email: string): Promise<AuthResponse> => {
  try {
    const res = await apiClient.post<AuthResponse>("/resend-OTP", { email });
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to resend OTP");
  }
};

export const forgotPassword = async (email: string): Promise<AuthResponse> => {
  try {
    const res = await apiClient.post<AuthResponse>("/forgot-password", { email });
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to request password reset");
  }
};

export const newPassword = async (email: string, newPassword: string): Promise<AuthResponse> => {
  try {
    const res = await apiClient.post<AuthResponse>("/new-password", { email, newPassword });
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to set new password");
  }
};

export const googleAuth = async (email: string, fullName: string): Promise<AuthResponse> => {
  try {
    const res = await apiClient.post<AuthResponse>("/google-auth", { email, fullName });

    // ✅ Save tokens for authenticated requests
    if (res.data.accessToken && res.data.refreshToken) {
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
    }

    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Google authentication failed");
  }
};
