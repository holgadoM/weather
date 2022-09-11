const { getIpInformation } = require("../../utils/ip_information")
const { getCityInformation, getExtendedForecast } = require("../../utils/weather_api")

const forecast = async (req, reply)=>{
    const {city} = req.params

    try {

        var objResponse = {};

        if(!city || city === 'null' || city === 'undefined' ){
            const ip = req.socket.remoteAddress
            
            const ip_information = await getIpInformation(ip)
            objResponse['ip_information'] = ip_information
            if( ip_information['status'] === 'success' ){
                const forecast_information = await getExtendedForecast(ip_information['lat'], ip_information['lon'])
                objResponse['forecast_information'] = forecast_information
            }
        }else{
            const city_information = await getCityInformation(city)
            objResponse['city_information'] = city_information
            if( city_information.length > 0 ){
                const forecast_information = await getExtendedForecast(city_information[0]['lat'], city_information[0]['lon'])
                objResponse['forecast_information'] = forecast_information
            }
        }

        reply.send({...objResponse})
        
    } catch (error) {
        console.log(error)
        reply.code(400).send({'msg':'We could not get information'})
    }
}

module.exports = { forecast }