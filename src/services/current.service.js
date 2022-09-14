const { getCityInformation, getWeather,getIpInformation } = require("./api.service")

const current_get_information = async (city, ip)=>{

    var objResponse = {};

        if(!city || city === 'null' || city === 'undefined' || city.length == 0 ){
            const ip_information = await getIpInformation(ip)
            objResponse['ip_information'] = ip_information
            if( ip_information['status'] === 'success' ){
                const weather_information = await getWeather(ip_information['lat'], ip_information['lon'])
                objResponse['weather_information'] = weather_information
            }
            return { ...objResponse }
        }

        const city_information = await getCityInformation(city)
        objResponse['city_information'] = city_information
        if( city_information.length > 0 ){
            const weather_information = await getWeather(city_information[0]['lat'], city_information[0]['lon'])
            objResponse['weather_information'] = weather_information
        }
        
        return { ...objResponse }
}

module.exports = {current_get_information}