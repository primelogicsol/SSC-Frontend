import { defineType } from 'sanity';

export default defineType({
  name: 'header',
  type: 'document',
  title: 'Header',
  fields: [
   
    {
      name: 'mainTitle',
      type: 'string',
      title: 'Main Title',
    },
    {
      name: 'topButton',
      type: 'array',
      title: 'Top Button',
      of : [
        {
          name : 'buttonField',
          type : 'object',
          title : 'Button Field',
          fields : [
            {
              name : 'text',
              type : 'string',
              title : 'Text',
            },
            {
              name : 'url',
              type: 'string',
              title: 'Url',
            }
          ]
        }
      ],
    },
    {
      name: 'socialMediaLinks',
      type: 'array',
      title: 'Social Media Platforms',
      of: [
        {
          type: 'object',
          title: 'Social Media',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform Name' },
            { name: 'url', type: 'url', title: 'Platform URL' },
          ],
        },
      ],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Header Image',
      

    },
    {
      name: 'websiteName',
      type: 'string',
      title: 'Website Name',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'bottomButton',
      type: 'object',
      title: 'Bottom Button',
      fields: [
        { name: 'text', type: 'string', title: 'Button Text' },
        { name: 'link', type: 'string', title: 'Button Link' },
      ],
    },
    {
      name: 'headerSections',
      type: 'array',
      title: 'Header Sections',
      of: [
        {
          type: 'object',
          title: 'Header Section',
          fields: [
            {
              name: 'sectionName',
              type: 'string',
              title: 'Section Name',
            },
            {
              name: 'sections',
              type: 'array',
              title: 'Sections',
              of: [
                {
                  type: 'object',
                  title: 'Section',
                  fields: [
                    {
                      name: 'title',
                      type: 'string',
                      title: 'Title',
                    },
                    {
                      name: 'slug',
                      type: 'slug',
                      title: 'URL',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }
    
    
  ],
});

// {
//   name: 'pageName',
//   title: 'Page Name',
//   type: 'string',
//   description: 'Enter the page name manually, e.g., "home", "about", "services".'
// },
// {
//   name : 'positionID',
//   title : 'Position ID',
//   type : 'string'
// },