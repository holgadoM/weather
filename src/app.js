const fastify = require('fastify')

const locationRoutes = require('./routes/v1/location')
const currentRoutes = require('./routes/v1/current')
const forecastRoutes = require('./routes/v1/forecast')

function initServer(opts={}) {
    const app = fastify(opts)

    app.register(function(appRegister,_,done){

      const listRoutes = [...locationRoutes, ...currentRoutes,...forecastRoutes];

      listRoutes.forEach((route)=>{
        appRegister.route(route)
      })
      
      done()
      
    },{prefix:'/v1'})

  return app
}

module.exports = initServer