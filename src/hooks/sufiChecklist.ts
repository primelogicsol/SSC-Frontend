import apiClient from "@/lib/apiClient"; // make sure your apiClient is correctly configured
import { ChecklistItemStatus, ChecklistSection } from "@/types/sufiChecklist"; // adjust the path to your enums or types

export type ChecklistItem = {
  section: ChecklistSection;
  title: string;
  status?: ChecklistItemStatus;
};

export type SufiChecklistPayload = {
  progress: number;
  completeAll?: boolean;
  resetAll?: boolean;
  items: ChecklistItem[];
};

export const createOrUpdateChecklist = async (data: SufiChecklistPayload) => {
  const response = await apiClient.post("/sufi-checklist", data);
  return response.data;
};

export const getChecklist = async () => {
  const response = await apiClient.get("/sufi-checklist");
  return response.data;
};
