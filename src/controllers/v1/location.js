const utils = require('../../utils/ip_information')

const location = async (req, reply)=>{
    const ip = req.ip

    try {
        const data = await utils.getIpInformation(ip)
        reply.send(data)
    } catch (error) {
        console.log('Error => ', error);
        reply.code(400).send({'msg':" we could not get the information "})
    }
}

module.exports = {
    location
}