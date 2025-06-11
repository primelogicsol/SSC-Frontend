import { defineType } from 'sanity' 
// schemas/insightCollection.ts
export default defineType ({
    name: 'insightCollection',
    title: 'Insight Collection',
    type: 'object',
    fields: [
    {
      name : 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name : 'bookImage',
      title : 'Book Image',
      type : 'image',
      options: {
          hotspot: true
        }

    },
    {
        name : 'slug',
        title: 'Slug',
        type: 'slug',
    },
    {
  name: 'insightBook',
  title: 'Insight Book',
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
      name: 'bookContent',
      title: 'Book Content',
      type: 'array',
      of: [
        {
          name: 'subject',
          title: 'Subject',
          type: 'object',
          fields: [
            {
              name: 'subjectName',
              title: 'Subject Name',
              type: 'string',
            },
            {
              name: 'pageContent',
              title: 'Page Content',
              type: 'array',
              of: [
                {
                  name: 'page',
                  title: 'Page',
                  type: 'object',
                  fields: [
                    {
                      name: 'subject',
                      title: 'Subject',
                      type: 'text',
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
          ],
        },
      ],
    },
    {
      name : 'detail',
      title : 'Detail',
      type : 'array',
      of : [
        {
        name : 'detailContent',
        title : 'Detail Content',
        type : 'object',
        fields : [
          {
          name : 'heading',
          title : 'Heading',
          type : 'string',
          },
          {
            name : 'content',
            title : 'Content',
            type : 'array',
            of : [{type : 'block'}],
          }
        ]
      }
      ]
    
    
    },
  ],
}
      
    ]
})
  