const supertest = require('supertest')
const build = require('../app')
const { buildRequest } = require('fastify/lib/request')
const { forecast_get_information } = require('../services/forecast.service')

const my_ip = '181.46.66.9'

const app = build({trustProxy: true})

beforeAll( async ()=>{
    await app.ready()
})

describe('Test /forecast[/city]',()=>{

    test('Response with ip_information', async ()=>{

        const res = await supertest(app.server)
        .get(`/v1/forecast/`)
        .set('Accept', 'application/json')
        .set('X-Forwarded-For', my_ip)
        .expect(200)

        expect(res.body).toHaveProperty('ip_information')
    })

    test('Response with city_information', async ()=>{
        const city = 'Buenos aires'

        const res = await supertest(app.server)
        .get(`/v1/forecast/${city}`)
        .expect(200)

        expect(res.body).toHaveProperty('city_information')
    })

    test('Response with forecast_information and 5 days forecast', async ()=>{

        const res = await supertest(app.server)
        .get(`/v1/forecast/`)
        .set('Accept', 'application/json')
        .set('X-Forwarded-For', my_ip)
        .expect(200)

        expect(res.body).toHaveProperty('forecast_information')
        expect(res.body['forecast_information']['cnt']).toStrictEqual(5)
    })
})

describe('Test feature service forecast',()=>{

    const city = 'Buenos aires'

    test('send city param and return two objects => city_information and forecast_information', async ()=>{

        const res = await forecast_get_information(city, my_ip)

        expect(res).toHaveProperty('city_information')
        expect(res).toHaveProperty('forecast_information')
    })

    test('send null city param and return two objects => ip_information and forecast_information  ', async ()=>{
        const city = null
        const res = await forecast_get_information(city, my_ip)

        expect(res).toHaveProperty('ip_information')
        expect(res).toHaveProperty('forecast_information')
    })

    test('send undefined city param and return two objects => ip_information and forecast_information  ', async ()=>{
        const city = undefined
        const res = await forecast_get_information(city, my_ip)

        expect(res).toHaveProperty('ip_information')
        expect(res).toHaveProperty('forecast_information')
    })

    test('send empty string into city param and return two objects => ip_information and forecast_information  ', async ()=>{
        const city = ''
        const res = await forecast_get_information(city, my_ip)

        expect(res).toHaveProperty('ip_information')
        expect(res).toHaveProperty('forecast_information')
    })


})