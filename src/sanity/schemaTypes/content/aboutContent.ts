import { defineType } from "sanity";

export default defineType({
    name: 'aboutContent',
    title: 'About Content',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'mainHeading',
        title: 'Main Heading',
        type: 'string',
      },
      {
         name : 'slug',
         title : 'Slug',
         type : 'slug'
      },
      {
        name : 'updatedDate',
        title : 'Updated Date',
        type : 'string'
      },
      {
        name: 'mainDescription',
        title: 'Main Description',
        type: 'text',
      },
      {
        name: 'label',
        title: 'Label',
        type: 'string',
      },
      {
        name: 'contentSections',
        title: 'Content Sections',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'contentSection',
            title: 'Content Section',
            fields: [
              {
                name: 'sectionHeading',
                title: 'Section Heading',
                type: 'string',
              },
              {
                name: 'sectionDescription',
                title: 'Section Description',
                type: 'text',
              },
              {
                name: 'subSections',
                title: 'Sub Sections',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    name: 'subSection',
                    title: 'Sub Section',
                    fields: [
                      {
                        name: 'subHeading',
                        title: 'Subheading',
                        type: 'string',
                      },
                      {
                        name: 'note',
                        title: 'Note',
                        type: 'text',
                      },
                      {
                        name: 'paragraphs',
                        title: 'Paragraphs',
                        type: 'blockContent',
                        
                      },
                      {
                        name: 'bottomNote',
                        title: 'Bottom Note',
                        type: 'string',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
  