const supertest = require('supertest')
const build = require('../app')
const objCity = require('./mock/obj_city')

describe('Test /current[/city]',()=>{

    test('Response with city_information', async ()=>{
        const app = build()
        await app.ready()

        const res = await supertest(app.server)
        .get(`/v1/current/${objCity['name']}`)
        .expect(200)

        expect(res.body).toHaveProperty('city_information')
    })

    test('Response with city_information and information inside', async ()=>{
        const app = build()
        await app.ready()

        const res = await supertest(app.server)
        .get(`/v1/current/${objCity['name']}`)
        .expect(200)

        expect(res.body).toHaveProperty('city_information')
        expect(res.body['city_information'].length).toBeGreaterThanOrEqual(1)
    })

    test('Response with ip_information',async () =>{
        const app = build()
        await app.ready()
        const res = await supertest(app.server)
            .get('/v1/current/')
            .expect(200)

        expect(res.body).toHaveProperty('ip_information')
    })

    test('Response with weather_information',async () =>{
        const app = build()
        await app.ready()
        const res = await supertest(app.server)
            .get('/v1/current/')
            .expect(200)
        expect(res.body).toHaveProperty('weather_information')
        expect(res.body['weather_information']).toHaveProperty('current')
    })

    
})