import { defineType} from 'sanity'

export default defineType({
    name : 'post',
    type: 'document',
    title : 'Post',
    fields: [
        {
            name : 'blockContent',
            title : 'Block Content',
            type : 'blockContent'
        }
    ]
})