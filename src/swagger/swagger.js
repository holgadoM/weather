const configSwagger = {
    routePrefix: '/swagger',
    swagger: {
      info: {
        title: 'Weather API for Tech Challenge',
        description: 'Fastify API Weather',
        version: '1.1.1'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost:3002',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    exposeRoute: true
  }

  module.exports = configSwagger