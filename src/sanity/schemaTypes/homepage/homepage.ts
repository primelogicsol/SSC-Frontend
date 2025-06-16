import { defineType } from 'sanity';

export default defineType({
    name : 'homePage',
    type: 'document',
    title : 'Home Page',
    fields: [
        {
            name : 'slides',
            title : "Slides",
            type : 'heroSections',
        },
        {
            name : 'boxes',
            title : 'Boxes',
            type : 'matterBox',
        },
        {
            name : 'imageContent',
            title: 'Image Content',
            type : 'goalSection',
        },
        {
            name : 'boxContent',
            title : 'Box Content',
            type : 'contentChart'
        },
        {
            name : 'rightSideImageContent',
            title: 'Right Side Image Content',
            type : 'rightsideImageContent',
        },
        {
            name :'staticChart',
            title: 'Static Chart',
            type: 'sufiStats',
        },
        {
            name : 'boxContent2',
            title : 'Box Content 2',
            type : "contentChart"
        },
        {
            name : 'product1',
            title: 'Product Showcase 1',
            type: 'productShowcase',
        },
        {
            name : 'transmissionBoard',
            title : 'Transmission Board',
            type : 'sufiTrans'
        },
         {
            name : 'product2',
            title: 'Product Showcase 2',
            type: 'productShowcase',
        },
        {
            name : "supportSection",
            title : 'Support Section',
            type : 'object',
            fields: [
                {
                    name : 'supportContent',
                    title : 'Support Content',
                    type : 'contentChart'

                },
                {
                    name : 'joinForm',
                    title : 'Join Form',
                    type : 'membershipForm'
                }
            ]
        },
        {
            name : 'contactSection',
            title : 'Contact Section',
            type : 'contactSection'
        }
    ]
})