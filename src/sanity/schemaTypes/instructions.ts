
import { Rule } from 'sanity' 

export default {
  name: 'instructions',
  title: 'Instructions',
  type: 'object',
  fields: [ {
    name : 'instruction',
    title : 'Instruction',
    type : 'text',
    validation: (Rule: Rule) => Rule.min(1).max(60),


  }
]
}
