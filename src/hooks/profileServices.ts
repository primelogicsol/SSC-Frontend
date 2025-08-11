import apiClient from "@/lib/apiClient";

export interface UserProfile {
  fullName: string;
  lastName?: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

// ✅ Get Profile
export const getUserProfile = async (): Promise<UserProfile> => {
  const res = await apiClient.get("/profile", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return res.data.profile;
};

// ✅ Update Profile
export const updateUserProfile = async (data: Partial<UserProfile>): Promise<void> => {
  await apiClient.put("/profile", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};
