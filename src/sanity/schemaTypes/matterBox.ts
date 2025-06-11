export default {
    name : 'matterBox',
    title : 'Matter',
    description : 'Matter is a material that is used to create objects.',
    type : 'array',
    of : [{
        name : "box",
        title : 'Box',
        type : 'object',
        fields :[

        {
            name : 'title',
            type : 'string',
            title : 'Title',
        },
        {
            name : 'description',
            type : 'string',
            title : 'Description',
        }]
}]
}