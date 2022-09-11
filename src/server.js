const app = require('./app')
require('dotenv').config({path:'./.env'})

const server = app({
  logger: {
    level: 'info',
  }
})

server.listen({ port: process.env.PORT ?? 3000 }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})