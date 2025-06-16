// ./schemas/purpleContent.ts

export default {
    name: 'purpleContent',
    title: 'Purple Content',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name : 'slug',
        title : 'Slug',
        type : 'slug'
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'purpleSection',
            title: 'Purple Section',
            fields: [
              {
                name: 'heading',
                title: 'Heading',
                type: 'string',
              },
              {
                name: 'description',
                title: 'Description',
                type: 'array',
                of : [{ type : 'block'}]
              },
              {
                name: 'bottomHeading',
                title: 'Bottom Heading',
                type: 'string',
              },
              {
                name : 'buttonField',
                title : 'Button Field',
                type : 'array',
                of : [
                  { name : 'buttonField',
                    type : 'object',
                    title : 'Button Field',
                    fields : [
                              {
                    name : 'buttonName',
                    title : 'Button Name',
                    type : 'string',
                  },
                  {
                    name : 'buttonUrl',
                    title : 'Button Url',
                    type : 'string'
                  }
                    ]
                  }

                ]

              },
              {
                name: 'bottomContent',
                title: 'Bottom Content',
                type: 'text',
                
              },
            ],
          },
        ],
      },
    ],
  }
  