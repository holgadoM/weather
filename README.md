### Features

- Get information of get information about the city where your ip is located
- Get information about the city where your ip is located or the city if the city parameter is configured, and the current weather information.
-  Get information about the city where your ip is located or about the city if the city parameter is configured, and the weather information extended by 5 days.

# Weather API

![](https://img.shields.io/github/release/holgadoM/weather.svg)


**Table of Contents**

# Configuration
## Get api key (open weather map)
1- Click [Here](https://openweathermap.org/) and register to get api key for personal use or click [Guide](https://openweathermap.org/guide) for more information.
2- Replece #API_KEY with your API KEY in .env
   
    | WEATHER_KEY=#API_KEY
	
## Run node
`$ npm install`

`$ npm run dev`

> now your server is run on localhost:3002

# How to use
- This api have 3 endpoint 
  - /v1/location
  > Get information about your IP

  - /v1/current[/city] `city is optional param`
  > Get information about a city and the current weather. If you do not configure city, information will be obtained from the IP and the weather based on your location by IP

  - /v1/forecast[/city] `city is optional param`
  > Get information about the city where your ip is located or about the city if the city parameter is configured, and the weather information extended by 5 days.

# Test
- Pre-configuration
 - Get your IP from [cual-es-mi-ip.net](https://www.cual-es-mi-ip.net/)
 - Copy your IP
 - Set with your ip address in test files
 ```javascript
 const my_ip = 'YOUR_IP'
```

## Run test
`$ npm test`
