const currentController = require('../../controllers/v1/current')

const currentRoutes = [
    {
        method:"GET",
        url:"/current/:city",
        schema: {
            description: 'Return current city and weather information, or ip information if city wasn`t set',
            tags: ['current'],
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
        handler: currentController.current
    },
]

module.exports = currentRoutes