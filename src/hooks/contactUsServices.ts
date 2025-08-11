import apiClient from "@/lib/apiClient";

export interface ContactUsPayload {
  subject: string;
  message: string;
}

export const submitContactUs = async (data: ContactUsPayload) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.post("/contact-us", data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
};
