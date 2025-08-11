import apiClient from "@/lib/apiClient";

export const createBooking = async (data: any) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.post("/book-service", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getBookings = async () => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.get("/book-service", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data?.data;
};
