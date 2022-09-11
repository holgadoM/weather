const locationRoutes = [
    {
        method:"GET",
        url:"/location",
        handler: (request, reply)=>{
            reply.send({'msg' : 'Test /location'})
        }
    },
]

module.exports = locationRoutes