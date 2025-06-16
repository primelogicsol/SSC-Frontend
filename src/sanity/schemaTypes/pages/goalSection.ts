// // ./sanity/schemas/pageContent.ts
// export default {
//     name: 'pageContent',
//     type: 'object',
//     title: 'Page Content',
//     fields: [
//       {
//         name: 'type',
//         type: 'string',
//         title: 'Content Type',
//         description: 'Type of content block (image, text, box, etc.)',
//       },
//       {
//         name: 'text',
//         type: 'text',
//         title: 'Text Content',
//         description: 'Text content for this block',
//         hidden: ({ parent }: { parent: { type: string } }) => parent?.type !== 'text', // Only show for 'text' type
//       },
//       {
//         name: 'image',
//         type: 'image',
//         title: 'Image',
//         hidden: ({ parent }: { parent: { type: string } }) => parent?.type !== 'image', // Only show for 'image' type
//       },
//       {
//         name: 'title',
//         type: 'string',
//         title: 'Title',
//         hidden: ({ parent }: { parent: { type: string } }) => parent?.type !== 'title', // Only show for 'title' type
//       },
//       {
//         name: 'boxContent',
//         type: 'array',
//         title: 'Box Content',
//         of: [
//           {
//             type: 'block',
//           },
//         ],
//         hidden: ({ parent }: { parent: { type: string } }) => parent?.type !== 'box', // Only show for 'box' type
//       },
//       {
//         name: 'alignment',
//         type: 'string',
//         title: 'Alignment',
//         options: {
//           list: ['left', 'right', 'center'],
//         },
//         hidden: ({ parent }: { parent: { type: string } }) => parent?.type !== 'image', // Only show for 'image' type
//       },
//     ],
//   }
// ./sanity/schemas/goalSection.ts
export default {
  name: 'goalSection',
  type: 'object',
  title: 'Goal Section',
  fields: [
    {
      name : "slug",
      title : "Slug",
      type : "slug"
    },
    {
      name : 'imageText',
      title : 'Image Text',
      type : 'string'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Main Heading',
    },
    {
      name: 'subheading',
      type: 'string',
      title: 'Subheading',
    },
    {
      name: 'intro',
      type: 'text',
      title: 'Intro Line / Quote',
    },
    {
      name: 'description',
      type: 'array',
      title: 'Detailed Description',
      of : [{type : 'block'}],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Section Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bgImage',
      type: 'image',
      title: 'Background Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'pointsHeading',
      type: 'string',
      title: 'Points Section Heading', 
    },
    {
      name: 'points',
      type: 'array',
      title: 'Highlight Points',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Point Title',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Point Description',
            },
            
          ],
        },
      ],
    },
    {
      name : 'locationTitle',
      type : 'string',
      title : 'location Title'
    },
    {
      name: 'locations',
      title: 'Locations',
      type: 'locationItem',
      
      
    },
  ],
}
