export default {
    name: 'beginnerChecklist',
    title: 'Beginner Checklist',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'subheading',
        title: 'Subheading',
        type: 'string',
      },

      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of : [{ type : 'block'}]
      },

      {
        name: 'bottomHeading',
        title: 'Bottom Heading',
        type: 'string',
      },
      {
        name: 'bottomDescription',
        title: 'Bottom Description',
        type: 'array',
        of : [{ type : 'block'}]
      },
      {
        name: 'bottomNote',
        title: 'Bottom Note',
        type: 'text',
      },
    ]
  }
  