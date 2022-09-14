const { current_get_information } = require("../../services/current.service")

const current = async (req, reply)=>{
    const {city} = req.params
    const ip = req.socket.remoteAddress

    try {

        const response = await current_get_information(city, ip)

        reply.send(response)
        
    } catch (error) {
        console.log(error)
        reply.code(400).send({'msg':'We could not get the information'})
    }

}

module.exports = { current }