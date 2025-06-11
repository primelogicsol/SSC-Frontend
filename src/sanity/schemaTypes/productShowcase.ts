import { defineType } from 'sanity';

export default defineType({
    name : 'productShowcase',
    type: 'object',
    title : 'Product Showcase',
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
            name: 'description',
            title: 'Description',
            type: 'text',
        }
    ]
})