// Frontend Configuration
export const config = {
  // API Base URL - Change this to match your backend URL
  API_BASE_URL:
    process.env.NEXT_PUBLIC_API_URL || "https://api.sufisciencecenter.info/v1",

  // Google OAuth Client ID
  GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",

  // Environment
  NODE_ENV: process.env.NODE_ENV || "development",

  // App URLs
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:6020",

  //stripe
  STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_51Pdq59I9FlUtxdNwYEhydbyMWUuQBtDJUWjJbadI1BUgXzHASjFaV4Is4zJnF7ZowuqFoqOqMzMOMHV9zdinFZ87006mr0oCCn",
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "sk_test_51Pdq59I9FlUtxdNwiOdn3sWCjk8se47L4g756b1zudykbFkCxgfQs7ZjhZfFQmp401gDCfw4o1Mri7w2f2Dg4Q4l00hyVhb0WD"
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
