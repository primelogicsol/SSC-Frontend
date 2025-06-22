import { PortableTextBlock } from '@sanity/types'

export interface GiftShopProduct {
  _id?: string
  _type: 'giftShopProduct'
  title?: string
  heading?: string
  description?: any[]
  typeOfProduct: 'handCraftProduct' | 'digitalBook' | 'audioSpectrum'

  handCraftProduct?: HandCraftProduct[]
  digitalBook?: DigitalBook[]
  audioSpectrum?: AudioSpectrum[]

}


  
 
  
  

  // handcraft inferface 
  export interface HandCraftProduct {
    _id?: string
    _type: 'handCraftProduct'
    title : string
    produtName: string
    subTitle: string
    slug?: {
      _type: 'slug'
      current: string
    }
  
    images: any[]
    rating?: Rating[]
    price: number
    productDescription : string
    discount?: number
    quantity : number
    labels?: string[]
  
    shippingEstimate?: {
      minDays?: number
      maxDays?: number
    }
  
    description?: {
      mainHeading?: string
      descriptions?: {
        heading?: string
        content?: PortableTextBlock[]
      }[]
    }
  
    shipping?: {
      mainHeading?: string
      details?: {
        heading?: string
        content?: PortableTextBlock[]
      }[]
    }
  }

 
  
  
  export interface Rating {
    
    [key: string]: any
  }

  // end-----------------------------------------------------------------------------------------------------------

  // digital book interface 

  export interface DigitalBook {
    _id?: string
    _type: 'digitalBook'
  
    slug?: {
      _type: 'slug'
      current: string
    }
  
    fullBook?: SanityFile
    previewFile?: SanityFile
    coverImage?: any
  
    title?: string
    subTitle?: string
    author?: string
    description?: PortableTextBlock[]
    pages? : string
    tags?: string[]
    language?: string
    genre?: string
    releaseDate?: string // ISO date string
    isbn?: string
  
    accessType?: 'free' | 'member' | 'paid'
    price?: number
  
    descriptionBlock?: {
      heading?: string
      note?: string
      detail?: {
        title?: string
        content?: PortableTextBlock[]
      }[]
    }
  
    termsSection?: {
      heading?: string
      note?: string
      description?: PortableTextBlock[]
    }
  }
  export interface SanityFile {
    _type: 'file'
    asset: {
      _ref: string
      _type: 'reference'
    }
    [key: string]: any
  }

  // end -------------------------------------------------------------------------------------------

  // audio spectrum inferface

  export interface AudioSpectrum {
    _id?: string
    _type: 'audioSpectrum'
  
    slug?: {
      _type: 'slug'
      current: string
    }
  
    title?: string
    subTitle?: string
    artist?: string
    description?: PortableTextBlock[]
  
    audioFile?: SanityFile
    previewFile?: SanityFile
    coverImage?: any
  
    duration?: string // e.g. "3:45"
    tags?: string[]
    genre?: string
    releaseDate?: string // ISO format date
  
    accessType?: 'free' | 'member' | 'paid'
    price?: number
  
    descriptionBlock?: {
      heading?: string
      note?: string
      detail?: {
        title?: string
        content?: PortableTextBlock[]
      }[]
    }
  
    termsSection?: {
      heading?: string
      note?: string
      description?: PortableTextBlock[]
    }
  }