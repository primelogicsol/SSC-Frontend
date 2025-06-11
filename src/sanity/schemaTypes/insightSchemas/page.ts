// // schemas/insightPage.ts
// import { defineType } from 'sanity' 

// export default defineType ({
//     name: 'insightPage',
//     title: 'Insight Page',
//     type: 'object',
//     fields: [
//       {
//         name: 'heading',
//         title: 'Heading',
//         type: 'string',
        
//       },
//       {
//         name : 'subHeading',
//         title: 'Sub Heading',
//         type: 'string',

//       },
//       {
//         name: 'bookContent',
//         title: 'Book Content',
//         type: 'array',
//         of: [{
//           name : 'subject',
//           title: 'Subject',
//           type: 'object',
//           fields: [
//             {
//               name : 'subjectName',
//               title : 'Subject Name',
//               type : 'string',
//             },
//             {
//           name : 'pageContent',
//           title: 'Page Content',
//           type: 'array',
//           of: [{
//             name : 'page',
//             title: 'Page',
//             type: 'object',
//             fields: [
          
//             {
//               name : 'subject',
//               title: 'Subject',
//               type: 'text',
//             },
//             {
//               name : 'content',
//               title: 'Content',
//               type: 'array',
//               of: [{ type : 'block' }],
//             }
//           ]}
//           ]
        
//           ]
//         }
//           ]

//         }],
        
//       }
//     ]
//   })
  // {
  //         name : 'pageContent',
  //         title: 'Page Content',
  //         type: 'object',
  //         fields: [
  //           {
  //             name : 'subject',
  //             title: 'Subject',
  //             type: 'text',
  //           },
  //           {
  //             name : 'content',
  //             title: 'Content',
  //             type: 'array',
  //             of: [{ type : 'block' }],
  //           }
  //         ]
  //       }

  // schemas/insightPage.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'insightPage',
  title: 'Insight Page',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
    },
    {
      name: 'bookContent',
      title: 'Book Content',
      type: 'array',
      of: [
        {
          name: 'subject',
          title: 'Subject',
          type: 'object',
          fields: [
            {
              name: 'subjectName',
              title: 'Subject Name',
              type: 'string',
            },
            {
              name: 'pageContent',
              title: 'Page Content',
              type: 'array',
              of: [
                {
                  name: 'page',
                  title: 'Page',
                  type: 'object',
                  fields: [
                    {
                      name: 'subject',
                      title: 'Subject',
                      type: 'text',
                    },
                    {
                      name: 'content',
                      title: 'Content',
                      type: 'array',
                      of: [{ type: 'block' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name : 'detail',
      title : 'Detail',
      type : 'array',
      of : [
        {
        name : 'detailContent',
        title : 'Detail Content',
        type : 'object',
        fields : [
          {
          name : 'heading',
          title : 'Heading',
          type : 'string',
          },
          {
            name : 'content',
            title : 'Content',
            type : 'array',
            of : [{type : 'block'}],
          }
        ]
      }
      ]
    
    
    },
  ],
});
