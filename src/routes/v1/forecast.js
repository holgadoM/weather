const forecastController = require('../../controllers/v1/forecast')

const forecastRoutes = [
    {
        method:"GET",
        url:"/forecast/:city",
        schema: {
            description: 'Return city and weather information for 5 days ',
            tags: ['forecast'],
            params: {
                description: 'City',
                type: 'object',
                properties: {
                    city: { type: 'string' } 
                }
            },
            response: {
                201: {
                    value: { type: 'string' }
                  }
            }
        },
        handler: forecastController.forecast
    },
]

module.exports = forecastRoutes