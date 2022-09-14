const { getCityInformation, getExtendedForecast,getIpInformation, } = require("./api.service")

const forecast_get_information = async (city, ip) =>{
    var objResponse = {};

        if(!city || city === 'null' || city === 'undefined' ){
            
            const ip_information = await getIpInformation(ip)
            objResponse['ip_information'] = ip_information
            if( ip_information['status'] === 'success' ){
                const forecast_information = await getExtendedForecast(ip_information['lat'], ip_information['lon'])
                objResponse['forecast_information'] = forecast_information
            }
            return {...objResponse}
        }

        const city_information = await getCityInformation(city)
        objResponse['city_information'] = city_information
        if( city_information.length > 0 ){
            const forecast_information = await getExtendedForecast(city_information[0]['lat'], city_information[0]['lon'])
            objResponse['forecast_information'] = forecast_information
        }

        return {...objResponse}
    
}

module.exports = { forecast_get_information }