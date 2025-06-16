const supportSection = {
    name: 'supportSection',
    title: 'Support Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'heading',
        title: 'Heading',
        type: 'string'
      },
      {
        name: 'subHeading',
        title: 'Sub Heading',
        type: 'string'
      },
      {
        name: 'boxes',
        title: 'Support Boxes',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'supportBox',
            fields: [
              {
                name: 'heading',
                title: 'Box Heading',
                type: 'string'
              },
              {
                name: 'description',
                title: 'Box Description',
                type: 'text'
              }
            ]
          }
        ]
      },
      {
        name: 'description',
        title: 'Bottom Description',
        type: 'text'
      }
    ]
  }
  
  export default supportSection
  