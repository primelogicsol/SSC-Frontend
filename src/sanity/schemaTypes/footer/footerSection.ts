// ./sanity/schemas/section.ts
export default {
  name: 'footerSection',
  type: 'document',
  title: 'Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section Title', // E.g., "About SSC", "Our Heritage", etc.
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }], // Rich text with links, etc.
    },
  ],
}
//sub title sahi he ok ab ayesa krna he k ap mujhe schemabna do pehle hoga aik title phir hoga button ur phir social media ke platform jok multiple ho sakte he aur phir website name phir subtitle ur phir aur phir aik button hoga aur phir headerSection honge jo multiple hosakte he aur hr headerSection me multiple title hosakte he