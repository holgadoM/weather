const forecastController = require('../../controllers/v1/forecast')

const forecastRoutes = [
    {
        method:"GET",
        url:"/forecast/:city",
        handler: forecastController.forecast
    },
]

module.exports = forecastRoutes