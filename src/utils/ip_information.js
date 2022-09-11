const fetch = require('node-fetch')

const getIpInformation = async (ip)=>{

    const url = `http://ip-api.com/json/${ip}`;

    try {
        const response = await fetch(url);
        const data = await response.json()
        return data
    } catch (error) {
        console.log('Error => ', error);
        return {'msg':" we could not get the information "}
    }
}

module.exports = { getIpInformation }