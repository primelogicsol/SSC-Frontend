import apiClient from "@/lib/apiClient";

export interface MembershipPayload {
  phone: string;
  country: string;
  agreedToPrinciples: boolean;
  consentedToUpdates: boolean;
  additionalInfo?: string;
  collaboratorIntent?: string;
  donorType?: string[];
  intentCreation?: string;
  monthlyTime?: string;
  organization?: string;
  previousVolunteerExp?: string;
  role: string;
  collabType?: string[]; // ← add this line
  volunteerMode?: string;
  volunteerSupport?: string[];
}

export const getMembership = async () => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.get("/membership", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data?.data; // membership object
};

export const createMembership = async (data: MembershipPayload) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.post("/membership", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const updateMembership = async (data: Partial<MembershipPayload>) => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.patch("/membership", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const deleteMembership = async () => {
  const token = localStorage.getItem("accessToken");
  const res = await apiClient.delete("/membership", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
