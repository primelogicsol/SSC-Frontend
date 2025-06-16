import { defineType } from 'sanity'

export default defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Red Text', value: 'redText' },
          { title: 'Green Text', value: 'greenText' },
          {title : 'Light Purple' , value : 'lightPurple'},
          {title : 'bg Gray' , value : 'bgGray'},
          { title: 'Indented Paragraph', value: 'indent' },
        ],
      },
    },
  ],
})
