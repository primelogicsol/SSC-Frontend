import apiClient from "../lib/apiClient";

// Valid enum values according to backend schema
export const PRESENTATION_TYPES = [
  "ORAL",
  "POSTER",
  "WORKSHOP",
  "PANEL_DICUSSION" // Note: Backend has typo "PANEL_DICUSSION"
] as const;

export const TOPIC_TYPES = [
  "SUFI_PHILOSOPHY",
  "QUANTUM_CONSCIOUSNESS",
  "MYSTICAL_PRACTICES",
  "HEALING_TRANSITIONS",
  "INTER_APPROACHES",
  "OTHER"
] as const;

// --------------------
// Types
// --------------------
interface ConferencePayload {
  institution?: string; // Optional in backend
  abstract: string; // Required in backend
  presentationType: typeof PRESENTATION_TYPES[number]; // Required in backend
  topic: typeof TOPIC_TYPES[number]; // Required in backend
}

// --------------------
// Create Conference
// --------------------
export const createConference = async (payload: ConferencePayload) => {
  try {
    console.log("📤 Sending conference data:", payload);
    // Backend route: POST /conference
    const response = await apiClient.post("/user/conference", payload);
    return response.data;
  } catch (error: any) {
    console.error("❌ Conference creation error:", error.response?.data);
    throw new Error(error.response?.data?.message || "Failed to create conference");
  }
};

// --------------------
// Get All Conferences for Logged-in User
// --------------------
export const getConferences = async () => {
  try {
    // Backend route: GET /conference
    const response = await apiClient.get("/user/conference");
    return response.data; // Ensure backend filters by logged-in user
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch conferences");
  }
};

// --------------------
// Update Conference Status
// --------------------
export const updateConferenceStatus = async (id: number, status: number) => {
  try {
    // Backend route: POST /conference/:id
    const response = await apiClient.post(`/user/conference/${id}`, { status });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update status");
  }
};
