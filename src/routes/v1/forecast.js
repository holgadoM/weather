const forecastRoutes = [
    {
        method:"GET",
        url:"/forecast/:city",
        handler: (request, reply)=>{
            reply.send({'msg': 'Test /forecast[/city] '})
        }
    },
]

module.exports = forecastRoutes