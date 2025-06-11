const contactSection = {
  name: 'contactSection',
  title: 'Contact Section',
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
      name: 'subHeading',
      title: 'SubHeading',
      type: 'text',
      
    },
    {
      name : 'note',
      title : 'Note',
      type : 'array',
      of : [{type : 'block'}]
    }
    
  ],
};

export default contactSection;
