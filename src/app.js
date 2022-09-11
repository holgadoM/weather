const fastify = require('fastify')

const locationRoutes = require('./routes/v1/location')

function initServer(opts={}) {
    const app = fastify(opts)

    app.register(function(appRegister,_,done){

      locationRoutes.forEach((route)=>{
        appRegister.route(route)
      })
      
      done()
      
    },{prefix:'/v1'})

  return app
}

module.exports = initServer