import apiClient from "../lib/apiClient";

export interface ContentItem {
  id: string;
  section: "explorer" | "academy";
  slug: string;
  title: string;
  subtitle?: string;
  heroImage?: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  blocks: any[];
  version: number;
  updatedAt: string;
}

export interface ContentResponse {
  success: boolean;
  status: number;
  message: string;
  data: ContentItem;
}

export const contentServices = {
  // Get latest version of content (backend automatically returns latest)
  async getContent(section: string, slug: string): Promise<ContentItem> {
    try {
      const response = await apiClient.get<ContentResponse>(`/content/${section}/${slug}`);
      return response.data.data;
    } catch (error: any) {
      console.error("Error fetching content:", error);
      throw new Error(error.response?.data?.message || "Failed to fetch content");
    }
  },

  // Get content list for a section
  async getContentList(section: string): Promise<any> {
    try {
      const response = await apiClient.get(`/content/${section}`);
      return response.data.data;
    } catch (error: any) {
      console.error("Error fetching content list:", error);
      throw new Error(error.response?.data?.message || "Failed to fetch content list");
    }
  }
};
