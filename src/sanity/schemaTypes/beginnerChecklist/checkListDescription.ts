const checklistDescription = {
    name: 'checklistDescription',
    title: 'Checklist Description',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'checklistContent',
        title: 'Checklist Content',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'contentItem',
            title: 'Content Item',
            fields: [
              {
                name: 'heading',
                title: 'Heading',
                type: 'string',
              },
              {
                name: 'text',
                title: 'Text',
                type: 'text',
              },
            ],
          },
        ],
      },
      {
        name: 'matters',
        title: 'Matters',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };
  
  export default checklistDescription;
  