// import { Rule } from 'sanity'
// import { defineType } from 'sanity'

// export default defineType ({
//   name: 'digitalBookCategory',
//   title: 'Digital Book Category',
//   type: 'document',
//   fields: [
//     {
//       name: 'category',
//       title: 'Category Title',
//       type: 'string',
      
//     },{
//         name: 'heading',
//         title: ' Heading',
//         type: 'string',
        
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'array',
//       of : [{ type : 'block'}]
//     },
//     {
//       name: 'typeOfBook',
//       title: 'Type Of Book',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'Dailog Series', value: 'dailogSeries' },
//           { title: 'Hard Talk', value: 'hardTalk' },
//           { title : 'Professions Detail', value : 'professionsDetail'},
//           { title : 'Inspiring Interview', value : 'inspiringInterview'}
//         ],
//         layout: 'dropdown',
//       },
//       validation: (Rule : Rule) => Rule.required(),
//     },
//     {
//       name : 'dailogSeries',
//       type : 'array',
//       hidden: ({ parent }) => parent?.type !== 'dailogSeries',
//       of : [{ type : 'dailogSeries'}]
//     },
//     {
//       name : 'hardTalk',
//       type : 'array',
//       hidden: ({ parent }) => parent?.type !== 'hardTalk',
//       of : [{ type : 'hardTalk'}]
//     },
//     {
//       name : 'professionsDetail',
//       type : 'array',
//       hidden: ({ parent }) => parent?.type !== 'professionsDetail',
//       of : [{ type : 'professionsDetail'}]
//     },
//     {
//       name : 'inspiringInterview',
//       type : 'array',
//       hidden: ({ parent }) => parent?.type !== 'inspiringInterview',
//       of : [{ type : 'inspiringInterview'}]
//     },
//     {
//       name : 'guideChart',
//       title : 'Guide Chart',
//       type : 'guideChart',
//       hidden: ({ parent }) => parent?.type !== 'inspiringInterview',
//     }
    
//   ]
// })
import { Rule } from 'sanity'
import { defineType } from 'sanity'

export default defineType({
  name: 'digitalBookCategory',
  title: 'Digital Book Category',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category Title',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'typeOfBook',
      title: 'Type Of Book',
      type: 'string',
      options: {
        list: [
          { title: 'Dailog Series', value: 'dailogSeries' },
          { title: 'Hard Talk', value: 'hardTalk' },
          { title: 'Professions Detail', value: 'professionsDetail' },
          { title: 'Inspiring Interview', value: 'inspiringInterview' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule: Rule) => Rule.required(),
    },

    // Conditional arrays based on typeOfBook
    {
      name: 'dailogSeries',
      title: 'Dailog Series',
      type: 'array',
      of: [{ type: 'dailogSeries' }],
      hidden: ({ parent }) => parent?.typeOfBook !== 'dailogSeries',
    },
    {
      name: 'hardTalk',
      title: 'Hard Talk',
      type: 'array',
      of: [{ type: 'hardTalk' }],
      hidden: ({ parent }) => parent?.typeOfBook !== 'hardTalk',
    },
    {
      name: 'professionsDetail',
      title: 'Professions Detail',
      type: 'array',
      of: [{ type: 'professionsDetail' }],
      hidden: ({ parent }) => parent?.typeOfBook !== 'professionsDetail',
    },
    {
      name: 'inspiringInterview',
      title: 'Inspiring Interview',
      type: 'array',
      of: [{ type: 'inspiringInterview' }],
      hidden: ({ parent }) => parent?.typeOfBook !== 'inspiringInterview',
    },

    // Guide Chart (only for Inspiring Interview)
    {
      name: 'guideChart',
      title: 'Guide Chart',
      type: 'guideChart',
      hidden: ({ parent }) => parent?.typeOfBook !== 'inspiringInterview',
    },
  ],
})
