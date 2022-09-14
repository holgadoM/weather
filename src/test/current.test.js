const supertest = require('supertest')
const build = require('../app')
const { current_get_information } = require('../services/current.service')

const my_ip = '181.46.66.9'

const app = build()

beforeAll( async ()=>{
    await app.ready()
})

describe('Test /current[/city]',()=>{

    test('API response Json format', async ()=>{
        const city = 'Buenos aires'
        await supertest(app.server)
            .get(`/v1/current/${city}`)
            .expect(200)
            .expect('Content-type',/application\/json/)
    })

    test('send city param and response with two objects => city_information and weather_information  ', async ()=>{
        const city = 'Buenos aires'
        const res = await current_get_information(city, my_ip)

        expect(res).toHaveProperty('city_information')
        expect(res).toHaveProperty('weather_information')
    })

    test('send null city param and response with two objects => ip_information and weather_information  ', async ()=>{
        const city = null
        const res = await current_get_information(city, my_ip)

        expect(res).toHaveProperty('ip_information')
        expect(res).toHaveProperty('weather_information')
    })

    test('send undefined city param and response with two objects => ip_information and weather_information  ', async ()=>{
        const city = undefined
        const res = await current_get_information(city, my_ip)

        expect(res).toHaveProperty('ip_information')
        expect(res).toHaveProperty('weather_information')
    })

    test('send empty string into city param and response with two objects => ip_information and weather_information  ', async ()=>{
        const city = ''
        const res = await current_get_information(city, my_ip)

        expect(res).toHaveProperty('ip_information')
        expect(res).toHaveProperty('weather_information')
    })

    
})