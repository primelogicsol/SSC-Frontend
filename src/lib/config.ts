// Frontend Configuration
export const config = {
  // API Base URL - Change this to match your backend URL
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || "https://api.sufisciencecenter.info/v1",
  
  // Google OAuth Client ID
  GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
  
  // Environment
  NODE_ENV: process.env.NODE_ENV || "development",
  
  // App URLs
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:6020",
};

// Helper function to get API URL
export const getApiUrl = (endpoint: string) => {
  return `${config.API_BASE_URL}${endpoint}`;
};

// Helper function to check if in development
export const isDevelopment = () => config.NODE_ENV === "development";

// Helper function to check if in production
export const isProduction = () => config.NODE_ENV === "production";
