import { defineType } from 'sanity';

export default defineType({
    name : 'simpleContent',
    title : 'Simple Content',
    type: 'object',
    fields: [
        {
           name : 'title',
           title : 'Title',
           type : 'string',
        },
        {
            name : 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name : 'slug',
            title: 'Slug',
            type: 'slug',
        },
        {
            name : 'description',
            title: 'Description',
            type: 'array',
            of: [{type : 'block'}],
        },
        {
            name : 'note',
            title: 'Note',
            type : 'text'
        }
    ]
})