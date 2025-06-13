export interface InsightMatter {
    title?: string;
  }
  
  export interface DetailContent {
    heading?: string;
    content?: any[];
  }
  
  export interface PageContent {
    subject?: string;
    content?: any[];
  }
  
  export interface Subject {
    subjectName?: string;
    pageContent?: PageContent[];
  }
  
  export interface InsightBook {
    heading?: string;
    subHeading?: string;
    bookContent?: Subject[];
    detail?: DetailContent[];
  }
  
  export interface InsightCollection {
    sectionTitle?: string;
    bookImage?: any;
    slug?: {
      current?: string;
    };
    insightBook?: InsightBook;
  }
  
  export interface InsightCategory {
    categoryName?: string;
    description?: any[];
    image?: any;
    books?: InsightCollection[];
    matterHeading?: string;
    matters?: InsightMatter[];
  }
  
  export interface HeroSectionItem {
    title?: string;
    heading?: string;
    description?: string;
    buttonText?: string;
    link?: string;
  }
  
  export type HeroSections = HeroSectionItem[];
  
 
  
  