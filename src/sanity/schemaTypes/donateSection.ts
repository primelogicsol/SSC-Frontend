import { defineType } from 'sanity';

export default defineType ({
  name: 'donateSection',
  type: 'object',
  title: 'Donate Section',
  fields: [
    {
      name : "slug",
      title : "Slug",
      type : "slug"
    },
    {
      name: 'intro',
      type: 'text',
      title: 'Intro Line / Quote',
    },
    {
      name : 'imageText',
      title : 'Image Text',
      type : 'string'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Main Heading',
    },
    {
      name: 'subheading',
      type: 'string',
      title: 'Subheading',
    },
    
    {
      name: 'description',
      type: 'array',
      title: 'Detailed Description',
      of : [{type : 'block'}],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Section Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bgImage',
      type: 'image',
      title: 'Background Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'pointsHeading',
      type: 'string',
      title: 'Points Section Heading', 
    },
    {
      name: 'points',
      type: 'array',
      title: 'Highlight Points',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Point Title',
            },
          
            
          ],
        },
      ],
    },
    {
        name : 'note',
        type : 'text',
        title : 'Note',
    }
    
  ],
})