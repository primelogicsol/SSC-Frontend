import { defineType } from "sanity";

export default defineType ({
    name  : 'inspiringInterview',
    title : 'Inspiring Interview',
    type : 'document',
    fields : [
        {
            name : 'slug',
            title : 'Slug',
            type : 'slug'
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'linkTitle',
            title: 'Link Title',
            type: 'string',
          },
          {
            name: 'coverImageText',
            title: 'Cover Image Text',
            type: 'string',
          },{
            name : 'title',
            title : 'Title',
            type : 'string'
          },
          {
            name: 'heading',
            title: 'Heading',
            type: 'string',
          },
          {
            name: 'note',
            title: 'Note',
            type: 'text',
          },
          {
            name : 'headerSection',
            title : 'Header Section',
            type : 'object',
            fields : [
                {
                name : 'chart',
                title : 'Chart',
                type : 'dpages'
                },
                {
                    name : 'content',
                    title : 'Content',
                    type : 'text'
                },
                {
                    name : 'bottom',
                    title : 'Bottom',
                    type : 'text'
                },


            ]
          },
          {
            name : 'pages',
            title : 'page',
            type : 'array',
            of : [
                {
                    name: 'page',
                    title: 'Page',
                    type: 'object',
                    fields: [
                      {
                        name: 'heading',
                        title: 'Heading',
                        type: 'string',
                      },
                      {
                        name: 'content',
                        title: 'Content Blocks',
                        type: 'array',
                        of: [
                          {
                            type: 'object',
                            name: 'contentItem',
                            fields: [
                              {
                                name: 'title',
                                title: 'Title',
                                type: 'string',
                              },
                              {
                                name: 'description',
                                title: 'Description',
                                type: 'digitalBlock',
                                
                              },
                            ],
                          },
                        ],
                      },
                      {
                        name: 'bottom',
                        title: 'Bottom Section',
                        type: 'object',
                        fields: [
                          {
                            name: 'title',
                            title: 'Bottom Title',
                            type: 'string',
                          },
                          {
                            name: 'note',
                            title: 'Note',
                            type: 'text',
                          },
                        ],
                      },
                    ],
                  }
            ]
        },
        {
            name: 'footerSection',
            title: 'footer Section',
            type: 'object',
            fields: [
              {
                name: 'heading',
                title: 'Heading',
                type: 'string',
              },
              {
                name: 'content',
                title: 'Content Blocks',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    name: 'contentItem',
                    fields: [
                      {
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                      },
                      {
                        name: 'description',
                        title: 'Description',
                        type: 'array',
                        of: [{ type: 'block' }],
                      },
                      {
                         name : 'note',
                         title : 'Note',
                         type : 'string'
                      }
                    ],
                  },
                ],
              },
              {
                name: 'bottom',
                title: 'Bottom Section',
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Bottom Title',
                    type: 'string',
                  },
                  {
                    name: 'note',
                    title: 'Note',
                    type: 'text',
                  },
                ],
              },
            ],
          }
    ]
})