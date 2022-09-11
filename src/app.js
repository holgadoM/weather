const fastify = require('fastify')

function initServer(opts={}) {
    const app = fastify(opts)

    app.register(function(appRegister,_,done){
      
      done()
      
    },{prefix:'/v1'})

  return app
}

module.exports = initServer