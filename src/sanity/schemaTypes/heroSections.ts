import { defineType } from 'sanity';

export default defineType({


      name: 'heroSections',
      type: 'array',
      title: 'Hero Sections',
      of: [
        {
          type: 'object',
          title: 'Hero Section',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'buttonText', type: 'string', title: 'Button Text' },
            { name: 'link', type: 'string', title: 'Button Link' },
          ],
        },
      ],
    },)