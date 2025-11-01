// Frontend Configuration
export const config = {
  // API Base URL - Change this to match your backend URL
  API_BASE_URL:
  // process.env.NEXT_PUBLIC_API_URL || "https://api.sufisciencecenter.info/v1",
  "http://localhost:6015/v1",

  // Google OAuth Client ID
  GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "1057933844118-p7d72js5jlith3qi0ut68op8a5iou623.apps.googleusercontent.com",

  // Environment
  NODE_ENV: process.env.NODE_ENV || "development",

  // App URLs
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:6020",

  //stripe
  STRIPE_PUBLIC_KEY:
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_51Pdq59I9FlUtxdNw6HUneiX29rGwyaryJBCG5DGoNSaVEEIHqx8Xl2BUVkhckN8V4FI3AG9xEpci788GxayrU9vW00QHT4eI7A",
  STRIPE_SECRET_KEY:
    process.env.STRIPE_SECRET_KEY ||
    "sk_test_51Pdq59I9FlUtxdNwL1KyOPRWSqungmQnxbUcf1tkRYcAmrsPTCcXVPR2sEovOXegQuk9xRDZkvrljAZMQKrIDU5o00bSs0AXJd",
};

// Helper function to get API URL
export const getApiUrl = (endpoint: string) => {
  // Remove leading slash from endpoint if it exists
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
  return `${config.API_BASE_URL}/${cleanEndpoint}`;
};

// Helper function to check if in development
export const isDevelopment = () => config.NODE_ENV === "development";

// Helper function to check if in production
export const isProduction = () => config.NODE_ENV === "production";
