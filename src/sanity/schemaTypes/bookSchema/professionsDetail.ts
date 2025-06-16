// schemas/dialogSeries.ts

import { defineType } from 'sanity'

export default defineType({
  name: 'professionsDetail',
  title: 'Professions Detail',
  type: 'document',
  fields: [
    {
      name : 'slug',
      title : 'Slug',
      type : 'slug'
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'linkTitle',
      title: 'Link Title',
      type: 'string',
    },
    {
      name: 'coverImageText',
      title: 'Cover Image Text',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'note',
      title: 'Note',
      type: 'text',
    },
    {
      name: 'headerSection',
      title: 'Header Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'personName',
          title: 'Person Name',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'note',
          title: 'Note',
          type: 'string',
        },
      ],
    },
    {
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of : [{type :'dpages'}]
  
    },
    {
      name: 'footerSection',
      title: 'Footer Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'subHeading',
          title: 'Sub Heading',
          type: 'string',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'digitalBlock',
          
        },
        {
          name: 'content2',
          title: 'Content (Second)',
          type: 'digitalBlock',
          
        },
      ],
    },
  ],
})
