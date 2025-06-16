// schemas/voucher.ts

const voucher = {
    name: 'voucher',
    title: 'Voucher',
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
    ],
  };
  
  export default voucher;
  