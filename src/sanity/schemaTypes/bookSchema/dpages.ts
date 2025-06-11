

import { defineType } from 'sanity'

export default defineType({
  name: 'dpages',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          { title: 'Normal', value: 'normal' },
          { title: 'Comparison', value: 'comparison' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },

    // 🔹 Normal fields
    {
      name: 'contentHeading',
      title: 'Heading',
      type: 'string',
      hidden: ({ parent }) => parent?.type !== 'normal',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'digitalBlock',
      
      hidden: ({ parent }) => parent?.type !== 'normal',
    },
    {
      name: 'note',
      title: 'Note',
      type: 'digitalBlock',
      
      hidden: ({ parent }) => parent?.type !== 'normal',
    },

    // 🔸 Comparison fields
    {
      name: 'ComparisonHeading',
      title: 'Heading',
      type: 'string',
      hidden: ({ parent }) => parent?.type !== 'comparison',
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
      hidden: ({ parent }) => parent?.type !== 'comparison',
    },
    {
      name: 'charts',
      title: 'Comparison Chart',
      type: 'array',
      hidden: ({ parent }) => parent?.type !== 'comparison',
      of: [
        {
          type: 'object',
          name: 'chartItem',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
        },
      ],
    },
    {
      name: 'comparisonNote',
      title: 'Note',
      type: 'array',
      of: [{ type: 'block' }],
      hidden: ({ parent }) => parent?.type !== 'comparison',
    },
  ],
})
