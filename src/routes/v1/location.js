const locationController = require('../../controllers/v1/location')

const locationRoutes = [
    {
        method:"GET",
        url:"/location",
        handler: locationController.location
    },
]

module.exports = locationRoutes