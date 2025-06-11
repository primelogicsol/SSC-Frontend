// // ./sanity/schemas/page.ts
// export default {
//     name: 'page',
//     type: 'document',
//     title: 'Page',
//     fields: [
//       {
//         name: 'title',
//         type: 'string',
//         title: 'Page Title',
//       },
//       {
//         name: 'slug',
//         type: 'slug',
//         title: 'Slug',
//         options: {
//           source: 'title',
//           maxLength: 96,
//         },
//       },
//       {
//         name: 'content',
//         type: 'array',
//         title: 'Content Blocks',
//         of: [
//           {
//             type: 'pageContent',
//           },
//         ],
//       }
//     ],
//   }
  
// import { defineType } from 'sanity';

// export default defineType({
//   name: 'page',
//   type: 'document',
//   title: 'Page',
//   fields: [
//     {
//       name: 'typeSelector',
//       type: 'string',
//       title: 'Content Type Selector',
//       options: {
//         list: [
//           { title: 'Goal Section', value: 'goalSection' },
//           { title: 'Complex Content Block', value: 'complexContentBlock' },
//         ],
//       },
//     },
//     {
//       name: 'goalSections',
//       type: 'array',
//       title: 'Goal Sections',
//       hidden: ({ document }) => document?.typeSelector !== 'goalSection',
//       of: [{ type: 'goalSection' }],
//     },
//     {
//       name: 'complexContentBlocks',
//       type: 'array',
//       title: 'Complex Content Blocks',
//       hidden: ({ document }) => document?.typeSelector !== 'complexContentBlock',
//       of: [{ type: 'complexContentBlock' }],
//     },
//   ],
// });

// import { defineType } from 'sanity';

// export default defineType({
//   name: 'page',
//   type: 'document',
//   title: 'Page',
//   fields: [
//     {
//       name: 'contentSections',
//       type: 'array',
//       title: 'Content Sections',
//       of: [
//         {
//           type: 'object',
//           name: 'typeSelectorBlock',
//           title: 'Content Block',
//           fields: [
//             {
//               name: 'type',
//               type: 'string',
//               title: 'Section Type',
//               options: {
//                 list: [
//                   { title :  'Purple Chart', value: 'purpleChart' },
//                   { title : 'Purple Content', value : 'purpleContent'},
//                   { title : 'White Chart' , value : 'whiteChart'},
//                   { title : 'Voucher', value : 'voucher'},
//                   { title : 'Beginner Check List', value : 'bignnerCheckList'},
//                   { title : 'Membership Form', value : 'membershipForm'},
//                   { title : 'Teaching Assignment', value : 'teachingAssigment'},
//                   { title : 'Support Section', value : 'supportSection'},
//                   { title : 'Complex Content Block', value : 'complexContentBlock'},
//                   { title : 'Sufi Transmission', value : 'sufiTrans'},
//                   { title : 'sufi Statics', value: 'sufiStats' },
//                   { title : 'Matter Box', value : 'matterBox' },
//                   { title : 'Hero Section', value: 'heroSections' },
//                   { title: 'Goal Section', value: 'goalSection' },
//                   { title: 'Complex Content Block', value: 'complexContentBlock' },
//                 ],
//                 layout: 'dropdown',
//               },
//             },
//             {
//               name: 'goalSection',
//               type: 'goalSection',
//               hidden: ({ parent }) => parent?.type !== 'goalSection',
//             },
//             {
//               name: 'complexContentBlock',
//               type: 'complexContentBlock',
//               hidden: ({ parent }) => parent?.type !== 'complexContentBlock',
//             },
//             {
//               name: 'heroSections',
//               type: 'heroSections',
//               hidden : ({ parent }) => parent?.type !== 'heroSections',
//             },
//             {
//               name: 'matterBox',
//               type: 'matterBox',
//               hidden: ({ parent }) => parent?.type !== 'matterBox',
//             },
//             {
//               name: 'sufiStats',
//               type: 'sufiStats',
//               hidden: ({ parent }) => parent?.type !== 'sufiStats',
//             },
            
//           ],
//         },
//       ],
//     },
//   ],
// });

import { defineType } from 'sanity';

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
     {
        name : "pageName",
        title : "Page Name",
        type : "string",
    },
    {
      name : 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name : 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'contentSections',
      type: 'array',
      title: 'Content Sections',
      of: [
        {
          type: 'object',
          name: 'typeSelectorBlock',
          title: 'Content Block',
          fields: [
            {
              name: 'type',
              type: 'string',
              title: 'Section Type',
              options: {
                list: [
                  { title : 'About Content', value : 'aboutContent'},
                  { title : 'Contact Section', value : 'contactSection'},
                  { title : 'White Content Chart', value : 'whiteContentChart'},
                  { title : 'Volunteer Section', value : 'volunteer'},
                  { title : 'Donate Section', value : 'donateSection'},
                  { title : 'Registration Form', value : 'registrationForm'},
                  { title : 'Simple Content', value : 'simpleContent'},
                  { title : 'Rightside Image Content', value : 'rightsideImageContent'},
                  { title : 'Gift Shop Product' , value : 'giftShopProduct'},
                  { title : 'Digital Book Product', value : 'digitalBookCategory'},
                  { title  : 'Insight Product' , value : 'insightCategory'},
                  { title : 'Purple Chart', value: 'purpleChart' },
                  { title : 'Purple Content', value : 'purpleContent'},
                  { title : 'White Chart' , value : 'whiteChart'},
                  { title : 'Voucher', value : 'voucher'},
                  { title : 'Beginner Check List', value : 'beginnerChecklist'},
                  { title : 'Membership Form', value : 'membershipForm'},
                  { title : 'Teaching Assignment', value : 'teachingAssessment'},
                  { title : 'Support Section', value : 'supportSection'},
                  { title : 'Complex Content Block', value : 'complexContentBlock'},
                  { title : 'Sufi Transmission', value : 'sufiTrans'},
                  { title : 'sufi Statics', value: 'sufiStats' },
                  { title : 'Matter Box', value : 'matterBox' },
                  { title : 'Hero Section', value : 'heroSections' },
                  { title: 'Goal Section', value: 'goalSection' },
                ],
                layout: 'dropdown',
              },
            },

            // Matching fields for each type — with original values
            {
              name: 'purpleChart',
              type: 'purpleChart',
              hidden: ({ parent }) => parent?.type !== 'purpleChart',
            },
            {
              name: 'purpleContent',
              type: 'purpleContent',
              hidden: ({ parent }) => parent?.type !== 'purpleContent',
            },
            {
              name: 'whiteChart',
              type: 'whiteChart',
              hidden: ({ parent }) => parent?.type !== 'whiteChart',
            },
            {
              name: 'voucher',
              type: 'voucher',
              hidden: ({ parent }) => parent?.type !== 'voucher',
            },
            {
              name: 'beginnerChecklist',
              type: 'beginnerChecklist',
              hidden: ({ parent }) => parent?.type !== 'beginnerChecklist',
            },
            {
              name: 'membershipForm',
              type: 'membershipForm',
              hidden: ({ parent }) => parent?.type !== 'membershipForm',
            },
            {
              name: 'teachingAssessment',
              type: 'teachingAssessment',
              hidden: ({ parent }) => parent?.type !== 'teachingAssessment',
            },
            {
              name: 'supportSection',
              type: 'supportSection',
              hidden: ({ parent }) => parent?.type !== 'supportSection',
            },
            {
              name: 'complexContentBlock',
              type: 'complexContentBlock',
              hidden: ({ parent }) => parent?.type !== 'complexContentBlock',
            },
            {
              name: 'sufiTrans',
              type: 'sufiTrans',
              hidden: ({ parent }) => parent?.type !== 'sufiTrans',
            },
            {
              name: 'sufiStats',
              type: 'sufiStats',
              hidden: ({ parent }) => parent?.type !== 'sufiStats',
            },
            {
              name: 'matterBox',
              type: 'matterBox',
              hidden: ({ parent }) => parent?.type !== 'matterBox',
            },
            {
              name: 'heroSections',
              type: 'heroSections',
              hidden : ({ parent }) => parent?.type !== 'heroSections',
            },
            {
              name: 'goalSection',
              type: 'goalSection',
              hidden: ({ parent }) => parent?.type !== 'goalSection',
            },{
              name : 'rightsideImageContent',
              type : 'rightsideImageContent',
              hidden : ({ parent }) => parent?.type !== 'rightsideImageContent',
            },
            {
              name : 'digitalBookCategory',
              type: 'digitalBookCategory',
              hidden: ({ parent }) => parent?.type !== 'digitalBookCategory',
            },
            {
              name: 'giftShopProduct',
              type: 'giftShopProduct',
              hidden: ({ parent }) => parent?.type !== 'giftShopProduct',
            },
            {
              name: 'insightCategory',
              type: 'insightCategory',
              hidden: ({ parent }) => parent?.type !== 'insightCategory',
            },
            {
              name : 'simpleContent',
              type : 'simpleContent',
              hidden: ({ parent }) => parent?.type !== 'simpleContent',
            },
            {
              name : 'registrationForm',
              type : 'registrationForm',
              hidden: ({ parent }) => parent?.type !== 'registrationForm',
            },
            {
              name : 'donateSection',
              type : 'donateSection',
              hidden: ({ parent }) => parent?.type !== 'donateSection',
            },
            {
              name : 'volunteer',
              type : 'volunteer',
              hidden: ({ parent }) => parent?.type !== 'volunteer',
            },
            {
              name : 'whiteContentChart',
              type: 'whiteContentChart',
              hidden: ({ parent }) => parent?.type !== 'whiteContentChart',
            },
            {
              name : 'contactSection',
              type: 'contactSection',
              hidden: ({ parent }) => parent?.type !== 'contactSection',
            },
            {
              name : 'aboutContent',
              type: 'aboutContent',
              hidden: ({ parent }) => parent?.type !== 'aboutContent',
            }
          ],
        },
      ],
    },
  ],
});
