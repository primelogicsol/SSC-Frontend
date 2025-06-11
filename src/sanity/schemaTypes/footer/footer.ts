// ./sanity/schemas/footer.ts
export default {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Footer Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'BgImage',
        type: 'image',
        title: 'Background Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'array',
        title: 'Footer Description',
        of : [{ type : 'block'}]
      },
      
      {
        name: 'socialLinks',
        type: 'array',
        title: 'Social Media Links',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'platform',
                type: 'string',
                title: 'Platform Name',
              },
              {
                name: 'url',
                type: 'url',
                title: 'Link URL',
              },
            ],
          },
        ],
      },
    {
      name: 'footerSections',
      type: 'array',
      title: 'Footer Sections',
      of: [
        {
          type: 'object',
          title: 'Header Section',
          fields: [
            {
              name: 'sectionName',
              type: 'string',
              title: 'Section Name',
            },
            {
              name: 'sections',
              type: 'array',
              title: 'Sections',
              of: [
                {
                  type: 'object',
                  title: 'Section',
                  fields: [
                    {
                      name: 'title',
                      type: 'string',
                      title: 'Title',
                    },
                    {
                      name: 'slug',
                      type: 'slug',
                      title: 'URL',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
        name: 'footerPolicy',
        title: 'Footer Policy',
        type: 'document',
        fields: [
          {
            name: 'copyright',
            title: 'Copyright',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'array',
            of : [{ type : 'block'}]
          },
          {
            name: 'legalLinks',
            title: 'Legal Links',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'string',
                  },
                ],
              },
            ],
          },
        ],
      }
    ],
  }
  