import { Rule } from 'sanity'

export default {
    name: 'bookPage',
   title: 'Book Page',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Page Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().min(3).max(200),
      },
      {
        name: 'content',
        title: 'Main Content',
        type: 'array',
        of: [{ type: 'block' }],
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'quotes',
        title: 'Quotes / Hadith',
        type: 'array',
        of: [{ type: 'text' }],
        description: 'Optional Hadith or related quotes',
      },
      {
        name: 'footerNote',
        title: 'Footer Note / Reflection / Insight',
        type: 'text',
        description: 'Optional closing note or insight for this page.',
      }
    ]
  }
  