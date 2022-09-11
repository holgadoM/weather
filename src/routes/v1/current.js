const currentController = require('../../controllers/v1/current')

const currentRoutes = [
    {
        method:"GET",
        url:"/current/:city",
        handler: currentController.current
    },
]

module.exports = currentRoutes