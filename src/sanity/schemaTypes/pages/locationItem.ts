// schemas/locationItem.ts
export default {
    name: 'locationItem',
    title: 'Location Item',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'link',
        title: 'Link',
        type: 'string',
      },
    ],
  };
  