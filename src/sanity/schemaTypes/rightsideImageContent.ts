
import { defineType } from 'sanity';

const content = defineType({
  name: 'rightsideImageContent',
  title: 'Rightside Image Content',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      
    },
    {
      name : 'linkage',
      title : 'Linkage',
      type : 'array',
      of : [
        {
          name : "links",
          title : 'Links',
          type : "object",
          fields : [
            {
              name : 'linkName',
              title : 'Link Name',
              type : 'string',
            },
            {
              name : 'link',
              title : 'Link',
              type : 'string',
            }
          ]
        }
      ]
    }
  ],
});

export default content;
