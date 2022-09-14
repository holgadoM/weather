const locationController = require('../../controllers/v1/location')

const locationRoutes = [
    {
        method:"GET",
        url:"/location",
        schema: {
            description: 'returns location data by ip address',
            tags: ['location'],
            response: {
                200: {
                    status:{type: "string"},
                    country:{type: "string"},
                    countryCode:{type: "string"},
                    region:{type: "string"},
                    regionName:{type: "string"},
                    city:{type: "string"},
                    zip:{type: "string"},
                    lat:{type: "string"},
                    lon:{type: "string"},
                    timezone:{type: "string"},
                    isp:{type: "string"},
                    org:{type: "string"},
                    as:{type: "string"},
                    query:{type: "string"},
                },
                404: {
                    status:{ type: 'string' } ,
                    message:{ type: 'string' },
                    query:{ type: 'string' } 
                }
            }
        },
        handler: locationController.location
    },
]

module.exports = locationRoutes