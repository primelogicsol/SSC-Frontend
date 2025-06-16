// schemas/giftShop.ts

import { defineType } from 'sanity';

export default defineType({
  name: 'giftShopProduct',
  title: 'Gift Shop Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
    name: 'typeOfProduct',
    title: 'Type Of Product',
    type: 'string',
    options: {
      list: [
        { title: 'Hand Craft Product', value: 'handCraftProduct' },
        { title: 'Digital Book', value: 'digitalBook' },
        { title: 'Audio Spectrum', value: 'audioSpectrum' },
        
      ],
      layout: 'dropdown',
    },
    
  },
  {
    name: 'handCraftProduct',
    title: 'Hand Craft Product',
    type: 'array',
    of: [{ type: 'handCraftProduct' }],
    hidden: ({ parent }) => parent?.typeOfProduct !== 'handCraftProduct',
  },
  {
    name: 'digitalBook',
    title: 'Digital Book',
    type: 'array',
    of: [{ type: 'digitalBook' }],
    hidden: ({ parent }) => parent?.typeOfProduct !== 'digitalBook',
  },
  {
    name: 'audioSpectrum',
    title: 'Audio Spectrum',
    type: 'array',
    of: [{ type: 'audioSpectrum' }],
    hidden: ({ parent }) => parent?.typeOfProduct !== 'audioSpectrum',
  },
  ],
});
