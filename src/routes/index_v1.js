const locationRoutes = require('./v1/location')
const currentRoutes = require('./v1/current')
const forecastRoutes = require('./v1/forecast')

const indexRoutes = [
    ...locationRoutes,
    ...currentRoutes,
    ...forecastRoutes
]

module.exports = indexRoutes