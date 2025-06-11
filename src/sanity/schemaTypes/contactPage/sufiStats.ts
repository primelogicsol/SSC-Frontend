const sufiStats = {
    name: 'sufiStats',
    title: 'Sufi Statistics',
    type: 'object',
    fields: [
      {
        name: 'mainTitle',
        title: 'Main Title',
        type: 'string'
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string'
      },
      {
        name: 'stats',
        title: 'Statistics',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'statItem',
            fields: [
              {
                name: 'value',
                title: 'Value',
                type: 'number'
              },
              {
                name: 'suffix',
                title: 'Suffix',
                type: 'string'
              },
              {
                name: 'title',
                title: 'Title',
                type: 'string'
              }
            ]
          }
        ]
      }
    ]
}
  
export default sufiStats
  