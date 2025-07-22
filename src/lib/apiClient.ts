import axios from "axios";

const API_BASE_URL = "https://api.sufisciencecenter.info/v1";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false, // Your API uses tokens, not cookies
});

// Request interceptor: add access token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor: handle token refresh on 401
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const refreshResponse = await axios.get(`${API_BASE_URL}/refresh-access-token`, {
            headers: { Authorization: `Bearer ${refreshToken}` },
          });
          const newAccessToken = refreshResponse.data.accessToken;
          localStorage.setItem("accessToken", newAccessToken);
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiClient.request(error.config); // Retry
        } catch {
          localStorage.clear();
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
