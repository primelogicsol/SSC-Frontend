import { Rule } from 'sanity'

export default {
  name: 'book',
  title: 'Book',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Book Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(3).max(150),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().min(10).max(1000),
    },
    {
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [{ type: 'bookPage' }],
      validation: (Rule: Rule) => Rule.min(1),
    },
    {
      name : 'slug',
      title: 'Slug',
      type: 'slug',
    }
  ]
}
