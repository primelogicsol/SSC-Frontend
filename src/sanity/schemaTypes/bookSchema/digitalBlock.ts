import { defineType } from 'sanity'

export default defineType({
  name: 'digitalBlock',
  title: 'Digital Block',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'purple Text', value: 'purpleText' },
          
        ],
      },
    },
  ],
})