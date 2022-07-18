export default({
    name: 'webSettings',
    type: 'document',
    title: 'Website Settings',
    fields: [
        {
            name: 'hours',
            title: 'Hours',
            type: 'object',
            fields: [

                {
                    name: 'monday',
                    title: 'Monday',
                    type: 'object',
                    fields: [
                        {
                            name: "from",
                            title: "From",
                            type: "string"
                        },
                        {
                            name: "to",
                            title: "To",
                            type: "string"
                        }
                    ]
                },
                {
                    name: 'tuesday',
                    title: 'Tuesday',
                    type: 'object',
                    fields: [
                        {
                            name: "from",
                            title: "From",
                            type: "string"
                        },
                        {
                            name: "to",
                            title: "To",
                            type: "string"
                        }
                    ]
                },
                {
                    name: 'wednesday',
                    title: 'Wednesday',
                    type: 'object',
                    fields: [
                        {
                            name: "from",
                            title: "From",
                            type: "string"
                        },
                        {
                            name: "to",
                            title: "To",
                            type: "string"
                        }
                    ]
                },
                {
                    name: 'thursday',
                    title: 'Thursday',
                    type: 'object',
                    fields: [
                        {
                            name: "from",
                            title: "From",
                            type: "string"
                        },
                        {
                            name: "to",
                            title: "To",
                            type: "string"
                        }
                    ]
                },
                {
                    name: 'friday',
                    title: 'Friday',
                    type: 'object',
                    fields: [
                        {
                            name: "from",
                            title: "From",
                            type: "string"
                        },
                        {
                            name: "to",
                            title: "To",
                            type: "string"
                        }
                    ]
                },
                {
                    name: 'saturday',
                    title: 'Saturday',
                    type: 'object',
                    fields: [
                        {
                            name: "from",
                            title: "From",
                            type: "string"
                        },
                        {
                            name: "to",
                            title: "To",
                            type: "string"
                        }
                    ]
                },
                {
                    name: 'sunday',
                    title: 'Sunday',
                    type: 'object',
                    fields: [
                        {
                            name: "from",
                            title: "From",
                            type: "string"
                        },
                        {
                            name: "to",
                            title: "To",
                            type: "string"
                        }
                    ]
                }
            ]
        },
        {
            name: 'websiteInfo',
            title: 'Website',
            type: 'object',
            fields: [
                {
                    name: 'seo',
                    title: 'SEO',
                    type: 'object',
                    fields: [
                        {
                            name: 'googleID',
                            title: 'Google ID',
                            type: 'number'
                        },
                        {
                            name: 'facebookID',
                            title: 'Facebook ID',
                            type: 'number'
                        }
                    ]
                },
                {
                    name: 'contact',
                    title: 'Contact',
                    type: 'object',
                    fields: [
                        {
                            name: 'email',
                            title: 'E-mail',
                            type: 'string'
                        }
                    ]
                },
                {
                   name: 'disclaimer',
                   title: 'Disclaimer',
                   type: "array",
                   of: [{type: 'string'}]
                },
                {
                    name: 'vehReports',
                    title: 'Veh Reports',
                    type: 'object',
                    fields: [
                        {
                            name: 'carfax',
                            title: 'Carfax',
                            type: 'boolean'
                        },
                        {
                            name: 'cargurus',
                            title: 'Cargurus',
                            type: 'boolean'
                        },
                        {
                            name: 'autocheck',
                            title: 'autocheck',
                            type: 'boolean',
                        }
                    ]
                },
                {
                    name: 'socialMedia',
                    title: 'Social Media',
                    type: 'object',
                    fields: [
                        {
                            name: 'twitter',
                            title: 'Twitter',
                            type: 'string'
                        },
                        {
                            name: 'youtube',
                            title: 'Youtube',
                            type: 'string'
                        },
                        {
                            name: 'facebook',
                            title: 'Facebook',
                            type: 'string'
                        },
                        {
                            name: 'instagram',
                            title: 'Instagram',
                            type: 'string'
                        }
                    ]
                },
                {
                    name: 'soldInventoryDays',
                    title: 'Sold Inventory Days',
                    type: 'number'
                },
                {
                    name: 'special',
                    title: 'Special',
                    type: 'object',
                    fields: [
                        {
                            name: 'content',
                            title: 'Content',
                            type: "array",
                            of: [{type: 'string'}]
                        },
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string'
                        }
                    ]
                }
            ]
        }
    ]
})