import { defineType } from 'sanity';

export default defineType({
  name: 'audioSpectrum',
  title: 'Audio Spectrum',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'audioFile',
      title: 'Audio File',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
    },
    {
      name: 'previewFile',
      title: 'Preview File',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
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
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Example: 3:45',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'genre',
      title: 'Genre',
      type: 'string',
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
    },
    {
      name: 'accessType',
      title: 'Access Type',
      type: 'string',
      options: {
        list: [
          { title: 'Free', value: 'free' },
          { title: 'Member Only', value: 'member' },
          { title: 'Paid', value: 'paid' },
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      hidden: ({ parent }) => parent?.accessType !== 'paid',
    },
    {
        name: 'descriptionBlock',
        title: 'Description Block',
        type: 'object',
        fields: [
          {
            name: 'heading',
            title: 'Heading',
            type: 'string',
          },
          {
            name: 'note',
            title: 'Note',
            type: 'string',
          },
          {
            name: 'detail',
            title: 'Detail Sections',
            type: 'array',
            of: [
              {
                type: 'object',
                name: 'section',
                title: 'Section',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
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
    {
        name: 'termsSection',
        title: 'Terms Section',
        type: 'object',
        fields: [
          {
            name: 'heading',
            title: 'Heading',
            type: 'string',
          },
          {
            name: 'note',
            title: 'Note',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
          },
        ],
      }
  ],
});
