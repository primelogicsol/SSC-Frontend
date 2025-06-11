import { Rule } from 'sanity' 

export default {
    name: 'insightCategory',
    title: 'Insight Category',
    type: 'document',
    fields: [
      {
        name: 'categoryName',
        title: 'Category Name',
        type: 'string',
        validation: (Rule : Rule) => Rule.required()
      },
      
      {
        name: 'description',
        title: 'Category Description',
        type: 'array',
        of : [{ type : 'block'}]
      },
      {
        name: 'image',
        title: 'Category Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'books',
        title: 'Books',
        type: 'array',
        of: [{ type: 'insightCollection' }]
      },
      {
        name : 'matterHeading',
        title : 'Matter Heading',
        type : 'string',
      },
      {
        name: 'matters',
        title: 'Matters',
        type: 'array',
        of: [{ type: 'insightMatter' }],
        validation: (Rule : Rule) => Rule.min(1).max(4)
      }
    ]
  }
  