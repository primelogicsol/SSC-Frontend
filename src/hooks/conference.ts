import apiClient from "@/lib/apiClient"; // the Axios instance you created

// --------------------
// Types
// --------------------
interface ConferencePayload {
  institution?: string;
  abstract: string;
  presentationType: string;
  topic: string;
}

// --------------------
// Create Conference
// --------------------
export const createConference = async (payload: ConferencePayload) => {
  try {
    const response = await apiClient.post("/conference", payload);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to create conference");
  }
};

// --------------------
// Get All Conferences for Logged-in User
// --------------------
export const getConferences = async () => {
  try {
    const response = await apiClient.get("/conference");
    return response.data; // Make sure backend returns user-specific list
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch conferences");
  }
};

// --------------------
// Update Conference Status (Admin or Moderator)
// --------------------
export const updateConferenceStatus = async (id: number, status: number) => {
  try {
    const response = await apiClient.put(`/conference/${id}/status`, { status });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update status");
  }
};
