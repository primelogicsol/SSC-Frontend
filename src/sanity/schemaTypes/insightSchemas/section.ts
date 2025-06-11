// schemas/insightSection.ts
import { Rule } from 'sanity' 


export default {
    name: 'insightSection',
    title: 'Insight Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
        description: 'e.g., Prophetic Sayings, Scientific Reflections',
        validation: (Rule : Rule)=> Rule.required()
      },
      {
        name: 'pages',
        title: 'Pages',
        type: 'array',
        of: [{ type: 'insightPage' }],
        validation: (Rule : Rule) => Rule.min(1)
      }
    ]
  }
  