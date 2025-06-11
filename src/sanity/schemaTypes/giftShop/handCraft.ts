// schemas/product.ts
import { Rule } from 'sanity'
import { defineType } from 'sanity' 


export default defineType( {
  name: 'handCraftProduct',
  title: 'Hand Craft Product',
  type: 'document',
  fields: [
  
    {
      name: 'produtName',
      title: 'Product Name',
      type: 'string',
      description: 'Full product name (can be same as title)',
      validation: (Rule: Rule) => Rule.required().min(3).max(50),
    },
    {
        name: 'subTitle',
        title: 'Sub Title',
        type: 'string',
        description: 'Short display title of the product',
        validation: (Rule: Rule) => Rule.required().min(3).max(100),
      },
    {
      name: 'slug',
      title: 'Slug',
      type : 'slug',
    },
    
    
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule: Rule) => Rule.min(1).max(5),
    },
      
    {
      name: 'rating',
      title: 'Rating',
      type: 'array',
      of : [{ type: 'rating' }],
    },
    {
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(1).max(1000),
    },
    {
      name: 'discount',
      title: 'Discount in Prize',
      type: 'number',
      description: 'Discount in prize',
      validation: (Rule: Rule) => Rule.min(0).max(90),
    },
    {
        name: 'inStock',
        title: 'In Stock',
        type: 'boolean',
    },
    {
        name : 'labels',
        title : 'Labels',
        type : 'array',
        of : [{type : 'string'}]
    },
   

    {
        name: 'shippingEstimate',
        title: 'Shipping Estimate (in days)',
        type: 'object',
        fields: [
          { name: 'minDays', title: 'Min Days', type: 'number' },
          { name: 'maxDays', title: 'Max Days', type: 'number' },
        ],
    },
    {
        name : 'description',
        title : 'Description',
        type : 'object',
        fields : [
            {
                name : 'mainHeading',
                title : 'Main Heading',
                type : 'string',
            },
            {
                name: 'descriptions',
                title: 'Descriptions',
                type: 'array',
                of : [
                       {
                         name : 'description',
                         title : 'description',
                         type : 'object',
                         fields : [
                                   {
                                      name : 'heading',
                                      title : 'Heading',
                                      type : 'string'
                                   },
                                   {
                                      name : 'content',
                                      title : 'Content',
                                      type : 'array',
                                      of : [{type : 'block'}]
                                   }
                         ]
                       }
                     ]
                
               
              },
        ]
    },
    {
        name : 'shipping',
        title : 'Shipping',
        type : 'object',
        fields : [
            {
                name : 'mainHeading',
                title : 'Main Heading',
                type : 'string',
            },
            {
                name: 'details',
                title: 'Details',
                type: 'array',
                of : [
                       {
                         name : 'detail',
                         title : 'Detail',
                         type : 'object',
                         fields : [
                                   {
                                      name : 'heading',
                                      title : 'Heading',
                                      type : 'string'
                                   },
                                   {
                                      name : 'content',
                                      title : 'Content',
                                      type : 'array',
                                      of : [{type : 'block'}]
                                   }
                         ]
                       }
                     ]
                
               
              },
        ]
    },
  ]
})
