import apiClient from "@/lib/apiClient";

export interface DonationPayload {
  amount: string;
  pool: string[];
  type: string;
}

export interface Donation {
  id: number;
  userId: string;
  amount: string;
  pool: string[];
  type: string;
  createdAt: string;
}

export const createDonation = async (data: DonationPayload) => {
  const response = await apiClient.post("/donation", data);
  return response.data;
};

export const getDonations = async (): Promise<Donation[]> => {
  const response = await apiClient.get("/donation");
  return response.data;
};

export const updateDonation = async (id: number, data: Partial<DonationPayload>) => {
  const response = await apiClient.patch(`/donation/${id}`, data);
  return response.data;
};

export const deleteDonation = async (id: number) => {
  const response = await apiClient.delete(`/donation/${id}`);
  return response.data;
};
