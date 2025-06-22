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
          {title : 'PupleLine' , value : 'purpleLine'},
          {title : 'Dark Purple' , value : 'lightPurple'},
          { title: 'Indented Paragraph', value: 'indent' },
          {title : 'bg Gray' , value : 'bgGray'},
          
        ],
      },
    },
  ],
})