// schemas/teachingAssessment.ts
// schemas/teachingAssessment.ts

import { defineType } from 'sanity'

export default defineType({
  name: 'teachingAssessment',
  title: 'Teaching Assessment',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
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
      name: 'message1',
      title: 'Message 1',
      type: 'string',
    },
    {
      name: 'message2',
      title: 'Message 2',
      type: 'string',
    },
    {
      name: 'message3',
      title: 'Message 3',
      type: 'string',
    },
    {
      name: 'message4',
      title: 'Message 4',
      type: 'string',
    },
    {
      name: 'message5',
      title: 'Message 5',
      type: 'string',
    },
    {
      name: 'note',
      title: 'Note',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
})







