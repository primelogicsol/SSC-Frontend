const sufiTrans = {
    name: 'sufiTrans',
    title: 'Sufi Transmissions',
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
        name: 'detail',
        title: 'Details',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'transDetail',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string'
              },
              {
                name: 'subTitle',
                title: 'Sub Title',
                type: 'string'
              }
            ]
          }
        ]
      }
    ]
  }
  
  export default sufiTrans
  