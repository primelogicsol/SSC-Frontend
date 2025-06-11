// schemas/rating.js
import { Rule } from 'sanity'

export default {
    name: 'rating',
    title: 'Rating',
    type: 'object',
    fields: [
      {
        name: 'stars',
        title: 'Stars',
        type: 'number',
        validation: (Rule : Rule) => Rule.required().min(1).max(5),
      },
      {
        name: 'review',
        title: 'Review',
        type: 'text',
        validation: (Rule : Rule) => Rule.max(500),
      },
      {
        name : 'username',
        title : 'Username',
        type : 'string'
      },
      {
        name : 'userEmail',
        title : 'user Email',
        type : 'string'
      }
    ]
  }
  