const { forecast_get_information } = require("../../services/forecast.service")

const forecast = async (req, reply)=>{
    const {city} = req.params
    const ip = req.ip

    try {

        const response = await forecast_get_information(city,ip)

        reply.send(response)
        
    } catch (error) {
        console.log(error)
        reply.code(400).send({'msg':'We could not get information'})
    }
}

module.exports = { forecast }