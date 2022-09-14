const fastify = require('fastify')

const indexRouteV1 = require('./routes/index_v1')
const configSwagger = require('./swagger/swagger')

function initServer(opts={}) {
    const app = fastify(opts)

    app.register(require('@fastify/swagger'), configSwagger )

    app.register(function(appRegister,_,done){

      indexRouteV1.forEach((route)=>{
        appRegister.route(route)
      })
      
      done()
      
    },{prefix:'/v1'})

  return app
}

module.exports = initServer