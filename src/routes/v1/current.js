const locationController = require('../../controllers/v1/location')

const currentRoutes = [
    {
        method:"GET",
        url:"/current/:city",
        handler: (request, reply)=>{
            reply.send({'msg' : 'Test /current'})
        }
    },
]

module.exports = currentRoutes