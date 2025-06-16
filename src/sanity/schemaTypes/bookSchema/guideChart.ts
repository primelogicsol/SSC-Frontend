// schemas/guideChart.ts

import { defineType } from 'sanity'

export default defineType({
  name: 'guideChart',
  title: 'Guide Chart',
  type: 'document',
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
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Button Heading',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Button Title',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
          description: 'Add a URL or internal route',
        },
      ],
    },
  ],
})
