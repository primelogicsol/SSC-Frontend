const bookReference = {
    name: 'bookReference',
    title: 'Book Reference',
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
        name: 'books',
        title: 'Books',
        type: 'array',
        of: [{ type: 'string' }]
      }
    ]
  }
  
  export default bookReference
  