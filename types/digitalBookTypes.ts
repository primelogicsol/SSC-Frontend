import { PortableTextBlock } from '@sanity/types'
export interface DigitalBookCategory {
    category?: string;
    heading?: string;
    description?: any[]; // Replace with PortableTextBlock[] if you're using it
    typeOfBook: 'dailogSeries' | 'hardTalk' | 'professionsDetail' | 'inspiringInterview';
    dailogSeries?: DailogSeriesItem[];
    hardTalk?: HardTalkItem[];
    professionsDetail?: ProfessionsDetailItem[];
    inspiringInterview?: InspiringInterviewItem[];
    guideChart?: GuideChart;
  }
  
  // Example Structures for Conditional Arrays (You can adjust field names/types based on their schemas)
  

  
 
  
 
  
 
  
  // Guide chart used for Inspiring Interview
  
  export interface GuideChart {
    _id?: string
    _type: 'guideChart'
    heading?: string
    subHeading?: string
    content?: PortableTextBlock[]
    button?: {
      heading?: string
      title?: string
      link?: string
    }
  }
  
//  dilog series interface
  export interface DailogSeriesItem {
    _id?: string
    _type: 'dailogSeries'
    slug?: {
      _type: 'slug'
      current: string
    }
    coverImage?: any,
    linkTitle?: string
    coverImageText?: string
    heading?: string
    note?: string
    headerSection?: {
      heading?: string
      personName?: string
      description?: PortableTextBlock[]
      note?: string
    }
    pages?: DPage[]
    footerSection?: {
      heading?: string
      subHeading?: string
      content?: PortableTextBlock[]
      content2?: PortableTextBlock[]
    }
  }

//   hardTalk series interface

export interface HardTalkItem {
    _id?: string
    _type: 'hardTalk'
    slug?: {
      _type: 'slug'
      current: string
    }
    coverImage?: any,
    linkTitle?: string
    coverImageText?: string
    heading?: string
    note?: string
    headerSection?: {
      heading?: string
      personName?: string
      description?: PortableTextBlock[]
      note?: string
    }
    pages?: DPage[]
    footerSection?: {
      heading?: string
      subHeading?: string
      content?: PortableTextBlock[]
      content2?: PortableTextBlock[]
    }
  }

//   ProfessionsDetail interface

export interface ProfessionsDetailItem {
    _id?: string
    _type: 'professionsDetail'
    slug?: {
      _type: 'slug'
      current: string
    }
    coverImage?: any,
    linkTitle?: string
    coverImageText?: string
    heading?: string
    note?: string
    headerSection?: {
      heading?: string
      personName?: string
      description?: PortableTextBlock[]
      note?: string
    }
    pages?: DPage[]
    footerSection?: {
      heading?: string
      subHeading?: string
      content?: DigitalBlock
      content2?: DigitalBlock
    }
  }

//   inspiringInterview interface

export interface InspiringInterviewItem {
    _id?: string
    _type: 'inspiringInterview'
    slug?: {
      _type: 'slug'
      current: string
    }
    coverImage?: any,
    linkTitle?: string
    coverImageText?: string
    title?: string
    heading?: string
    note?: string
    headerSection?: {
      chart?: DPage
      content?: string
      bottom?: string
    }
    pages?: InterviewPage[]
    footerSection?: {
      heading?: string
      content?: FooterContentItem[]
      bottom?: {
        title?: string
        note?: string
      }
    }
  }
  
  // Individual Page inside the "pages" array
  export interface InterviewPage {
    heading?: string
    content?: InterviewContentItem[]
    bottom?: {
      title?: string
      note?: string
    }
  }
  
  // Each content block inside a page
  export interface InterviewContentItem {
    title?: string
    description?: DigitalBlock
  }
  
  // Footer content items
  export interface FooterContentItem {
    title?: string
    description?: PortableTextBlock[]
    note?: string
  }
  
  export type PageType = 'normal' | 'comparison'
  
  export interface DPage {
    _type: 'dpages'
    type: PageType
  
    // Normal type fields
    contentHeading?: string
    content?: DigitalBlock
    note?: DigitalBlock
  
    // Comparison type fields
    ComparisonHeading?: string
    subHeading?: string
    charts?: ChartItem[]
    comparisonNote?: PortableTextBlock[]
  }
  
  export interface ChartItem {
    title?: string
    content?: PortableTextBlock[]
  }
  
  // Assuming digitalBlock is a custom block type similar to Portable Text
  export type DigitalBlock = PortableTextBlock[]
    