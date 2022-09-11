const supertest = require('supertest')
const build = require('../app')

describe('Test /forecast[/city]',()=>{

    test('Response with ip_information', async ()=>{
        const app = build()
        await app.ready()

        const res = await supertest(app.server)
        .get(`/v1/forecast/`)
        .expect(200)

        expect(res.body).toHaveProperty('ip_information')
    })

    test('Response with city_information', async ()=>{
        const app = build()
        await app.ready()

        const res = await supertest(app.server)
        .get(`/v1/forecast/Buenos aires`)
        .expect(200)

        expect(res.body).toHaveProperty('city_information')
    })

    test('Response with forecast_information and 5 days forecast', async ()=>{
        const app = build()
        await app.ready()

        const res = await supertest(app.server)
        .get(`/v1/forecast/`)
        .expect(200)

        expect(res.body).toHaveProperty('forecast_information')
        expect(res.body['forecast_information']['cnt']).toStrictEqual(5)
    })

    
})