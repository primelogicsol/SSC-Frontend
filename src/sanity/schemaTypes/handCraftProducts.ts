// schemas/product.ts
import { Rule } from 'sanity' 
import instructions from './instructions'

export default {
  name: 'handCraftProduct',
  title: 'Hand Craft Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Short display title of the product',
      validation: (Rule: Rule) => Rule.required().min(3).max(100),
    },
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      description: 'Full product name (can be same as title)',
      validation: (Rule: Rule) => Rule.required().min(3).max(200),
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
      validation: (Rule: Rule) => Rule.required().min(1).max(1000000),
    },
    {
      name: 'discount',
      title: 'Discount (%)',
      type: 'number',
      description: 'Discount in percentage (e.g., 10 for 10%)',
      validation: (Rule: Rule) => Rule.min(0).max(90),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      
      fields : [
        {
          name : 'productDescription',
          title : 'Product Description',
          type : 'string',
        },
        {
          name : 'instruction',
          title : 'Instruction',
          type : 'array',
          of : [{type : 'instructions'}],
          validation: (Rule: Rule) => Rule.min(1).max(100),

        }
      ]
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
    },
    {
      name: 'estimatedDelivery',
      title: 'Estimated Delivery (Days)',
      type: 'number',
      description: 'Estimated delivery time in days',
      validation: (Rule: Rule) => Rule.min(1).max(30),
    },{
        name: 'shippingInformation',
        title: 'Shipping Information',
        type: 'text',
        
        description: 'Details about domestic/international shipping, estimated time, eco-packaging, etc.',
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'returnPolicy',
        title: 'Return Policy',
        type: 'text',
        
        description: 'Return policy, exclusions, and process for initiating a return.',
        validation: (Rule: Rule) => Rule.required(),
      }
  ]
}
