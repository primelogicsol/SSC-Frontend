import axios from "axios";

const API_BASE_URL = "https://api.sufisciencecenter.info/v1";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false, // Not using cookies
});

// Request Interceptor: Attach token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor: Refresh token logic
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // prevent infinite loop
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          const refreshResponse = await axios.get(`${API_BASE_URL}/refresh-access-token`, {
            headers: { Authorization: `Bearer ${refreshToken}` },
          });
          const newAccessToken = refreshResponse.data.accessToken;

          localStorage.setItem("accessToken", newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return apiClient(originalRequest); // retry original request
        } catch (err) {
          localStorage.clear();
          window.location.href = "/login"; // or use Next.js router.push("/login")
        }
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
