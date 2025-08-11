// hooks/interview.ts
import apiClient from "@/lib/apiClient";

export interface CreateInterviewPayload {
  profession: string;
  institution: string;
  website?: string;
  areasOfImpact?: string[];
  spiritualOrientation?: string;
  publicVoice: boolean;
  interviewIntent?: string[];
  interviewTimeZone?: string;
  scheduledAt: string;
  additionalNotes?: string;
}

export interface Interview {
  id: string;
  profession: string;
  institution: string;
  scheduledAt: string;
  status: number;
  createdAt: string;
  // add more fields if your backend returns them
}

export const createInterview = async (data: CreateInterviewPayload) => {
  const response = await apiClient.post("/book-interview", data);
  return response.data;
};

export const getInterviews = async (): Promise<Interview[]> => {
  const response = await apiClient.get("/book-interview");
  return response.data;
};

export const cancelInterview = async (id: string) => {
  const response = await apiClient.delete(`/book-interview/${id}`);
  return response.data;
};
